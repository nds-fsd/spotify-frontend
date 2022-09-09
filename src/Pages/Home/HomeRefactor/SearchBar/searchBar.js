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
          <label className={styles.searchlabel}>
            <SearchIcon className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              type="text"
              name="search"
              placeholder="Search"
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
