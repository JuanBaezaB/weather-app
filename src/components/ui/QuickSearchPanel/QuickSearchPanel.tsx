import type { Prediction } from "@/interfaces/prediction.interface";
import { getPredictions } from "@/services/google-maps.service";
import { useState } from "react";
import { SearchInput } from "./SearchInput";
import SearchResults from "./SearchResults";


export const QuickSearchPanel = () => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen(!open);

  const [search, setSearch] = useState('');
  const [addressPredictions, setAddressPredictions] = useState<Prediction[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    try {
      const predictions: Prediction[] = await getPredictions(e.target.value);
      setAddressPredictions(predictions);
    } catch (error) {
      setAddressPredictions([]);
    }
  };


  return (
    <div onClick={toggleOpen}
      className={`
        justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
        ${open ? "visible bg-black/20" : "invisible"}
      `}>
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
        <div onClick={(e) => e.stopPropagation()}
          className={`
            mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}

        >
          <SearchInput search={search} handleSearch={handleSearch} />
          <SearchResults addressPredictions={addressPredictions} />
        </div>

      </div>
    </div>
  );
}