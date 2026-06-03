import { invoke } from '@tauri-apps/api/core';
import type { DyLiveInfo } from '@/core/dycast';

const cookies = () => document.cookie || '';

export const getApiBase = (): string => 'https://live.douyin.com';

export const fetchNativeLiveInfo = async (id: string): Promise<DyLiveInfo> => {
  return invoke<DyLiveInfo>('fetch_live_info', {
    roomNum: id,
    cookies: cookies()
  });
};

export const fetchLiveHtml = async (id: string): Promise<string> => {
  return invoke<string>('fetch_live_html', {
    roomNum: id,
    cookies: cookies()
  });
};

export const fetchHead = async (url: string, headers?: Record<string, string>): Promise<void> => {
  await invoke('fetch_head', {
    url,
    cookies: cookies(),
    headers: headers || {}
  });
};

export const fetchBinary = async (url: string): Promise<ArrayBuffer> => {
  const bytes = await invoke<number[]>('fetch_binary', {
    url,
    cookies: cookies()
  });
  return new Uint8Array(bytes).buffer;
};

export const fetchJson = async <T = unknown>(url: string): Promise<T> => {
  const buffer = await fetchBinary(url);
  const text = new TextDecoder().decode(buffer);
  return JSON.parse(text) as T;
};
