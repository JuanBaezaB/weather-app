
import { HeroIcon } from "@/components/common/HeroIcon";
import { getPlaceDetails } from "@/services/google-maps.service";
import { setLocation } from "@/store/location.store";

interface CommandPaletteItemProps {
  name: string;
  icon: string;
  id: string;
}
export const SearchResultsItem = ({ name, icon, id } :CommandPaletteItemProps) => {

  const handleSearch = async () => {
    // handleClose()
    const placeDetails = await getPlaceDetails(id)
    // setPlaceDetails(placeDetails)
    setLocation(placeDetails.location)
  }

  return (
    <li 
      id={id} onClick={handleSearch} data-dialog-open="quick-search-panel" className="group flex cursor-pointer items-center rounded-md px-3 py-2 hover:bg-gray-900 hover:bg-opacity-5 text-gray-900">
      <HeroIcon icon={icon} className="h-6 w-6 flex-none text-gray-900 text-opacity-40" />
      <span className="ml-3 flex truncate">{name}</span>
      {/* <span className="ml-3 flex-none text-xs font-semibold text-gray-500"><kbd className="font-sans">⌘</kbd><kbd className="font-sans">N</kbd></span> */}
    </li>
  );
};