import { create } from "zustand";
import type { CacheState, CacheItem } from "@/types/store";

const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

export const useCacheStore = create<CacheState>()((set, get) => ({
  cache: new Map(),

  getCacheItem: <T>(key: string) => {
    const item = get().cache.get(key) as CacheItem<T> | undefined;
    if (!item) return null;

    const now = Date.now();
    if (now - item.timestamp > DEFAULT_TTL) {
      get().cache.delete(key);
      return null;
    }

    return item.data;
  },

  setCacheItem: <T>(key: string, data: T, ttl: number = DEFAULT_TTL) => {
    set((state) => ({
      cache: new Map(state.cache).set(key, {
        data,
        timestamp: Date.now(),
        ttl,
      }),
    }));
  },

  clearCache: () => {
    set({ cache: new Map() });
  },
}));
