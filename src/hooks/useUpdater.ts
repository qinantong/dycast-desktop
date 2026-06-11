import { ref } from 'vue';
import type { Update } from '@tauri-apps/plugin-updater';
import { isTauriProd } from '@/platform/runtime';

export interface UpdateStatus {
  /** Whether an update is available */
  available: boolean;
  /** Current/detected version info */
  version: string | null;
  /** Release body/notes */
  body: string | null;
  /** Whether currently downloading */
  downloading: boolean;
  /** Whether download and install completed */
  installed: boolean;
  /** Error message if something went wrong */
  error: string | null;
}

// Module-level shared state — all callers share the same instance
// NOTE: `update` object is stored OUTSIDE the reactive ref because
// @tauri-apps/plugin-updater's Update class uses JavaScript private fields (#),
// which are incompatible with Vue 3's Proxy-based reactivity.
let _update: Update | null = null;

const status = ref<UpdateStatus>({
  available: false,
  version: null,
  body: null,
  downloading: false,
  installed: false,
  error: null,
});

async function checkUpdate() {
  if (!isTauriProd()) return;

  // Reset previous results
  status.value.error = null;

  try {
    // Dynamic import — avoids crashing if the plugin isn't available
    const { check } = await import('@tauri-apps/plugin-updater');
    const update = await check();
    if (update) {
      _update = update;
      status.value = {
        available: true,
        version: update.version,
        body: update.body || null,
        downloading: false,
        installed: false,
        error: null,
      };
    } else {
      _update = null;
      // No update available (including 404 / manifest not found)
      status.value = {
        available: false,
        version: null,
        body: null,
        downloading: false,
        installed: false,
        error: null,
      };
    }
  } catch (e) {
    _update = null;
    const msg = e instanceof Error ? e.message : String(e);
    // Network errors or temporary failures — log but don't treat as fatal
    console.warn('Update check failed:', msg, e);
    status.value = {
      available: false,
      version: null,
      body: null,
      downloading: false,
      installed: false,
      error: msg || '检查更新失败',
    };
  }
}

async function downloadAndInstall() {
  if (!_update) return;

  status.value.downloading = true;
  try {
    await _update.downloadAndInstall((progress) => {
      console.log(`Update progress: ${progress}`);
    });
    status.value.downloading = false;
    status.value.installed = true;
  } catch (e) {
    status.value.downloading = false;
    status.value.error = e instanceof Error ? e.message : '下载更新失败';
  }
}

async function restart() {
  try {
    const { relaunch } = await import('@tauri-apps/plugin-process');
    await relaunch();
  } catch (e) {
    console.warn('Relaunch failed:', e);
    window.close();
  }
}

export function useUpdater() {
  return {
    status,
    checkUpdate,
    downloadAndInstall,
    restart,
  };
}
