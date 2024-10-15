import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search photos, tags, or users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;