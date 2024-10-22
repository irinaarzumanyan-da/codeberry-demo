import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search photos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
};

export default SearchBar;