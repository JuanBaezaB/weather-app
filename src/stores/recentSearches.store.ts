import { type Prediction } from "@/interfaces/prediction.interface";
import { persistentAtom } from "@nanostores/persistent";
const MAX_RECENT_SEARCHES = 5;

export const recentSearchesStore = persistentAtom<Prediction[]>('recentSearches', [], {
  encode (value) {
    return JSON.stringify(value)
  },
  decode (value ) {
    try {
      return JSON.parse(value)
    } catch(e) {
      return value
    }
  }
})

export const setRecentSearch = (prediction: Prediction) => {
  const recentSearches: Prediction[] = recentSearchesStore.get();
  
  const index = recentSearches.findIndex((item) => item.placeId === prediction.placeId);

  if (index !== -1) {
    recentSearches.splice(index, 1);
  }

  recentSearches.unshift(prediction);

  if (recentSearches.length > MAX_RECENT_SEARCHES) {
    recentSearches.pop();
  }

  recentSearchesStore.set(recentSearches);
};

export const clearRecentSearches = () => {
  recentSearchesStore.set([]);
};

export const getRecentSearches = () => {
  return recentSearchesStore.get();
}