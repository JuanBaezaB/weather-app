import type { Prediction } from "@/interfaces/prediction.interface";
import { atom } from "nanostores";

export const quickSearchIsOpenStore = atom(true);

export const setQuickSearchOpen = (open: boolean) => {
  quickSearchIsOpenStore.set(open);
};  

export const isQuickSearchOpen = () => {
  return quickSearchIsOpenStore.get();
};

export const toggleQuickSearchOpen = () => {
  quickSearchIsOpenStore.set(!quickSearchIsOpenStore.get());
};

export const closeQuickSearch = () => {
  quickSearchIsOpenStore.set(false);
};

export const openQuickSearch = () => {
  quickSearchIsOpenStore.set(true);
};

export const quickSearchRecentPredictionsStore = atom<Prediction[]>([]);