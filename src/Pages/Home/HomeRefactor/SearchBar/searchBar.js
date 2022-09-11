import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './searchBar.module.css';
import { useHomeContext } from '../HomeRefactorBody/homeRefactor.context';

const SearchBar = () => {
  const { search, setSearch } = useHomeContext();
  return (
    <nav>
      <div className={styles.fixedSearchContainer}>
        <form>
          <SearchIcon className={styles.searchIcon} />
          <label className={styles.searchlabel}>
            {' '}
            <span>Search</span>
            <input
              className={styles.searchInput}
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
