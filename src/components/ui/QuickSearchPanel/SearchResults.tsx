import type { Prediction } from "@/interfaces/prediction.interface copy";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { SearchResultsItem } from "./SearchResultsItem";
interface SearchResultsProps {
  addressPredictions: Prediction[];
}
const SearchResults = ({ 
  addressPredictions 
}: SearchResultsProps) => {

  return (
    <ul
      className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto"
    >
      <li className="p-2">
        <h2 className="sr-only">Locations</h2>
        <ul className="text-sm text-gray-700">
          {
            addressPredictions.map((prediction) => (
              <SearchResultsItem key={prediction.placeId} id={prediction.placeId} name={prediction.description} icon="MapPinIcon" />
            ))
          }
        </ul>
      </li>
      {
        addressPredictions.length === 0 && (
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