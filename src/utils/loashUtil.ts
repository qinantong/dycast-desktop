/**
 * @file 轻量版 debounce / throttle（替代完整的 lodash 实现）
 */

export function debounce<T extends (...args: any[]) => any>(fn: T, ms: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn(...args);
    }, ms);
  };
}

export function throttle<T extends (...args: any[]) => any>(fn: T, ms: number): (...args: Parameters<T>) => void {
  let lastTime = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;

  const invoke = (args: Parameters<T>) => {
    lastTime = Date.now();
    fn(...args);
  };

  return (...args: Parameters<T>) => {
    const now = Date.now();
    const remaining = ms - (now - lastTime);

    if (remaining <= 0) {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      lastArgs = null;
      invoke(args);
      return;
    }

    lastArgs = args;
    if (timer === null) {
      timer = setTimeout(() => {
        timer = null;
        if (!lastArgs) return;
        const trailingArgs = lastArgs;
        lastArgs = null;
        invoke(trailingArgs);
      }, remaining);
    }
  };
}
