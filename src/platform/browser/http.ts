import type { DyLiveInfo } from '@/core/dycast';

export const getApiBase = (): string => '/dylive';

export const fetchNativeLiveInfo = async (_id: string): Promise<DyLiveInfo | null> => null;

export const fetchLiveHtml = async (id: string): Promise<string> => {
  return fetch(`/dylive/${id}`).then(res => res.text());
};

export const fetchHead = async (url: string, headers?: Record<string, string>): Promise<void> => {
  await fetch(url, { method: 'HEAD', headers });
};

export const fetchBinary = async (url: string): Promise<ArrayBuffer> => {
  return fetch(url).then(res => res.arrayBuffer());
};

export const fetchJson = async <T = unknown>(url: string): Promise<T> => {
  return fetch(url).then(res => res.json());
};
