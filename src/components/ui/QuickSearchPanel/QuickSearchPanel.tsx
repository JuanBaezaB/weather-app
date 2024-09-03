import type { Prediction } from "@/interfaces/prediction.interface";
import { getPlaceDetails, getPredictions } from "@/services/google-maps.service";
import { setLocation } from "@/stores/location.store";
import { closeQuickSearch, quickSearchIsOpenStore } from "@/stores/quickSearch.store";
import { recentSearchesStore, setRecentSearch } from "@/stores/recentSearches.store";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import SearchResults from "./SearchResults";


export const QuickSearchPanel = () => {
  const $quickSearchIsOpen = useStore(quickSearchIsOpenStore);
  const $recentSearches = useStore(recentSearchesStore);


  const [search, setSearch] = useState<string>('');
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [recentSearches, setRecentSearches] = useState<Prediction[]>([]);

  useEffect(() => {
    setRecentSearches($recentSearches);
  }, [$recentSearches]);

  const handlerSelectPrediction = async (prediction: Prediction) => {
    // closeQuickSearch();
    const placeDetails = await getPlaceDetails(prediction.placeId);
    setLocation(placeDetails.location);
    setRecentSearch(prediction);
    setSearch('');
    setPredictions([]);
    
  }

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    try {
      if (e.target.value.length === 0) {
        setPredictions([]);
        return;
      }
      const predictions: Prediction[] = await getPredictions(e.target.value);
      setPredictions(predictions);
    } catch (error) {
      setPredictions([]);
    }
  };


  return (
    <div onClick={closeQuickSearch}
      className={`
        justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
        ${$quickSearchIsOpen ? "visible bg-black/20" : "invisible"}
      `}>
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
        <div onClick={(e) => e.stopPropagation()}
          className={`
            mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all
            ${$quickSearchIsOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        >
          <SearchInput search={search} handleSearch={handleSearch} />
          <SearchResults search={search} predictions={predictions} recentSearches={recentSearches} handlerSelectPrediction={handlerSelectPrediction} />
        </div>

      </div>
    </div>
  );
}