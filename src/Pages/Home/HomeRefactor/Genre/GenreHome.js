import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../SearchBar/searchBar.module.css';
import api from '../../../../Utils/api';
import Genre from '../../../../Components/Layout/Spotifybody/SectionDisplay/Genre/genre';

const GenrePage = () => {
  const [genre, setGenre] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') ? searchParams.get('search') : '');

  useEffect(() => {
    const query = {};
    if (search !== '') {
      query.search = search;
    }
    if (search.length >= 3 || search.length === 0) {
      api('GET', 'genre', {}, query).then((data) => {
        setGenre(data);
      });
    }
  }, [search]);

  return (
    <>
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
      </nav>{' '}
      {genre.length > 0 ? genre.map((c) => <Genre name={c.name} description={c.description} photo={c.photo} />) : <></>}
    </>
  );
};

export default GenrePage;
