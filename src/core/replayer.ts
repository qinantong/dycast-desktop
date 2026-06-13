import { Emitter, type EventMap } from './emitter';
import { RelayCast } from './relay';
import type { DyMessage } from './dycast';

export interface ReplayFileInfo {
  filename: string;
  totalMessages: number;
  estimatedDurationMs: number;
}

interface ReplayerEvent extends EventMap {
  progress: (current: number, total: number) => void;
  done: () => void;
  error: (msg: string) => void;
  stateChange: (state: ReplayState) => void;
}

export type ReplayState = 'idle' | 'playing' | 'paused';

const FALLBACK_INTERVAL_MS = 200;

export class Replayer {
  private messages: DyMessage[] = [];
  private intervals: number[] = [];
  private currentIndex = 0;
  private state: ReplayState = 'idle';
  private timer: ReturnType<typeof setTimeout> | undefined;
  private relayCast: RelayCast | undefined;
  private fileInfo: ReplayFileInfo | null = null;
  private emitter: Emitter<ReplayerEvent>;

  constructor() {
    this.emitter = new Emitter();
  }

  on<K extends keyof ReplayerEvent>(event: K, listener: ReplayerEvent[K]) {
    this.emitter.on(event, listener);
  }

  off<K extends keyof ReplayerEvent>(event: K, listener: ReplayerEvent[K]) {
    this.emitter.off(event, listener);
  }

  get currentState() {
    return this.state;
  }

  get currentFileInfo() {
    return this.fileInfo;
  }

  load(lines: string[], filename: string): ReplayFileInfo {
    this.messages = [];
    this.intervals = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      try {
        const msg = JSON.parse(line) as DyMessage;
        this.messages.push(msg);
      } catch {
        continue;
      }
    }

    if (this.messages.length === 0) {
      throw new Error('文件中没有有效的弹幕数据');
    }

    let totalDuration = 0;
    for (let i = 1; i < this.messages.length; i++) {
      const prev = this.messages[i - 1].timestamp;
      const curr = this.messages[i].timestamp;
      if (prev !== undefined && curr !== undefined && curr > prev) {
        const diff = curr - prev;
        this.intervals.push(diff);
        totalDuration += diff;
      } else {
        this.intervals.push(FALLBACK_INTERVAL_MS);
        totalDuration += FALLBACK_INTERVAL_MS;
      }
    }

    this.fileInfo = {
      filename,
      totalMessages: this.messages.length,
      estimatedDurationMs: totalDuration,
    };

    return this.fileInfo;
  }

  async start(relayUrl: string): Promise<boolean> {
    if (this.state !== 'idle' || !this.fileInfo) return false;

    const relay = new RelayCast(relayUrl);
    const connected = await relay.connect();
    if (!connected) {
      this.emitter.emit('error', '连接转发服务器失败');
      return false;
    }

    this.relayCast = relay;
    this.currentIndex = 0;
    this.state = 'playing';
    this.emitter.emit('stateChange', 'playing');
    this.scheduleNext();
    return true;
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    if (this.timer !== undefined) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
    this.emitter.emit('stateChange', 'paused');
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.emitter.emit('stateChange', 'playing');
    this.scheduleNext();
  }

  stop() {
    if (this.state === 'idle') return;
    this.state = 'idle';
    if (this.timer !== undefined) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
    if (this.relayCast) {
      this.relayCast.close();
      this.relayCast = undefined;
    }
    this.currentIndex = 0;
    this.emitter.emit('stateChange', 'idle');
  }

  private scheduleNext() {
    if (this.state !== 'playing') return;

    const msg = this.messages[this.currentIndex];
    if (!msg) {
      this.relayCast?.close();
      this.relayCast = undefined;
      this.state = 'idle';
      this.currentIndex = 0;
      this.emitter.emit('done');
      this.emitter.emit('stateChange', 'idle');
      return;
    }

    this.relayCast?.send(JSON.stringify([msg]));
    this.emitter.emit('progress', this.currentIndex + 1, this.messages.length);

    this.currentIndex++;
    const interval = this.currentIndex < this.messages.length
      ? this.intervals[this.currentIndex - 1]
      : 0;

    this.timer = setTimeout(() => this.scheduleNext(), Math.max(interval, 10));
  }
}
