import { ref } from 'vue';
import type { Update } from '@tauri-apps/plugin-updater';
import { isTauriProd } from '@/platform/runtime';

export interface UpdateStatus {
  /** Whether an update is available */
  available: boolean;
  /** The Update object from the updater plugin */
  update: Update | null;
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
const status = ref<UpdateStatus>({
  available: false,
  update: null,
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
      status.value = {
        available: true,
        update,
        version: update.version,
        body: update.body || null,
        downloading: false,
        installed: false,
        error: null,
      };
    } else {
      // No update available (including 404 / manifest not found)
      status.value = {
        available: false,
        update: null,
        version: null,
        body: null,
        downloading: false,
        installed: false,
        error: null,
      };
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    // Network errors or temporary failures — log but don't treat as fatal
    console.warn('Update check failed:', msg, e);
    status.value = {
      available: false,
      update: null,
      version: null,
      body: null,
      downloading: false,
      installed: false,
      error: msg || '检查更新失败',
    };
  }
}

async function downloadAndInstall() {
  if (!status.value.update) return;

  status.value.downloading = true;
  try {
    await status.value.update.downloadAndInstall((progress) => {
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
