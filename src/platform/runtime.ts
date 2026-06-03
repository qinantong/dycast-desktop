export const isTauri = (): boolean => {
  return typeof window !== 'undefined' && !!(window as Window & { __TAURI_INTERNALS__?: unknown }).__TAURI_INTERNALS__;
};

export const isDev = (): boolean => {
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
};

export const isTauriProd = (): boolean => isTauri() && !isDev();
