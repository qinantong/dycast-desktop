import { isTauriProd } from './runtime';
import type { DyLiveInfo } from '@/core/dycast';

const loadHttp = async () => {
  return isTauriProd() ? import('./tauri/http') : import('./browser/http');
};

export const getApiBase = (): string => {
  return isTauriProd() ? 'https://live.douyin.com' : '/dylive';
};

export const fetchNativeLiveInfo = async (id: string): Promise<DyLiveInfo | null> => {
  return (await loadHttp()).fetchNativeLiveInfo(id);
};

export const fetchLiveHtml = async (id: string): Promise<string> => {
  return (await loadHttp()).fetchLiveHtml(id);
};

export const fetchHead = async (url: string, headers?: Record<string, string>): Promise<void> => {
  return (await loadHttp()).fetchHead(url, headers);
};

export const fetchBinary = async (url: string): Promise<ArrayBuffer> => {
  return (await loadHttp()).fetchBinary(url);
};

export const fetchJson = async <T = unknown>(url: string): Promise<T> => {
  return (await loadHttp()).fetchJson<T>(url);
};
