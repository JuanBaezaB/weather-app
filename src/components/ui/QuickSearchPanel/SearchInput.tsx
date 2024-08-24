
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
interface SearchInputProps {
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchInput = ({
  search,
  handleSearch
}: SearchInputProps) => (
  <div className="relative">
    <MagnifyingGlassIcon className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40" />
    <input
      type="text"
      className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
      placeholder="Search..."
      value={search}
      onChange={handleSearch}
    />
  </div>
);