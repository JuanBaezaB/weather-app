import memoryCache from '@/utils/cache';

export const getFromCache = async <T>(key: string): Promise<T | undefined> => {
  return memoryCache.get<T>(key);
};

export const setToCache = async <T>(key: string, data: T): Promise<void> => {
  await memoryCache.set(key, data);
};