
import { HeroIcon } from "@/components/common/HeroIcon";
import type { Prediction } from "@/interfaces/prediction.interface";

interface CommandPaletteItemProps {
  prediction: Prediction;
  icon: string;
  handlerSelectPrediction: (prediction: Prediction) => void;
}
export const SearchResultsItem = ({ prediction, icon, handlerSelectPrediction } :CommandPaletteItemProps) => {
  const handleSelectPrediction = () => {
    handlerSelectPrediction(prediction);
  };

  return (
    <li 
      id={prediction.placeId} onClick={handleSelectPrediction} data-dialog-open="quick-search-panel" className="group flex cursor-pointer items-center rounded-md px-3 py-2 hover:bg-gray-900 hover:bg-opacity-5 text-gray-900">
      <HeroIcon icon={icon} className="h-6 w-6 flex-none text-gray-900 text-opacity-40" />
      <span className="ml-3 flex truncate">{prediction.description}</span>
      {/* <span className="ml-3 flex-none text-xs font-semibold text-gray-500"><kbd className="font-sans">⌘</kbd><kbd className="font-sans">N</kbd></span> */}
    </li>
  );
};