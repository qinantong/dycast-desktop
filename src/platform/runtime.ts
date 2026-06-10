export const isTauri = (): boolean => {
  return typeof window !== 'undefined' && !!(window as Window & { __TAURI_INTERNALS__?: unknown }).__TAURI_INTERNALS__;
};

export const isDev = (): boolean => {
  return import.meta.env.DEV;
};

export const isTauriProd = (): boolean => isTauri() && !isDev();
