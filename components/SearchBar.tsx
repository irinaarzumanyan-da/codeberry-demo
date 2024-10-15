import React, { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import debounce from 'lodash/debounce';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      // Implement search functionality here
      console.log('Searching for:', term);
    }, 300),
    []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search photos..."
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;