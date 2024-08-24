import type { Prediction } from "@/interfaces/prediction.interface copy";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { SearchResultsItem } from "./SearchResultsItem";
interface SearchResultsProps {
  search: string;
  predictions: Prediction[];
  recentSearches: Prediction[];
  handlerSelectPrediction: (prediction: Prediction) => void;
  clearRecentSearches: () => void;
}
const SearchResults = ({ 
  search,
  predictions,
  recentSearches,
  handlerSelectPrediction,
  clearRecentSearches
}: SearchResultsProps) => {

  return (
    <ul
      className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto"
    >
      { search.length === 0 && recentSearches.length > 0 && (
        <li className="p-2">
          <div className="flex justify-between mt-4 mb-2">
            <h2 className="px-3 text-xs font-semibold text-gray-900 text-left">
              Recent searches
            </h2>
            <button
              onClick={clearRecentSearches}
              className="text-xs px-3 font-semibold text-gray-500 hover:text-gray-900"
            >
              Clear
            </button>
          </div>
          {/* <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-900 text-left">
            Recent searches
          </h2> */}
          <ul className="text-sm text-gray-700">
            <h2 className="sr-only">Recent searches</h2>
            {
              recentSearches.map((recentSearch, index) => (
                <SearchResultsItem handlerSelectPrediction={handlerSelectPrediction} key={index} prediction={recentSearch} icon="ClockIcon" />
              ))
            }
          </ul>
        </li>
      )}
      <li className="p-2">
        <h2 className="sr-only">Locations</h2>
        <ul className="text-sm text-gray-700">
          {
            predictions.map((prediction) => (
              <SearchResultsItem handlerSelectPrediction={handlerSelectPrediction} key={prediction.placeId} prediction={prediction} icon="MapPinIcon" />
            ))
          }
        </ul>
      </li>
      {
        predictions.length === 0 && recentSearches.length === 0 && (
          <div className="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
            <FaceFrownIcon className="mx-auto h-6 w-6 text-gray-400" />
            <p className="mt-4 font-semibold text-gray-900">No results found</p>
          </div>
        )
      }
    </ul>
  );
}

export default SearchResults;