import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../SearchBar/searchBar.module.css';
import api from '../../../../Utils/api';
import AlbumCards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Albums/albumCard';

const Albums = () => {
  const [album, setAlbum] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') ? searchParams.get('search') : '');

  useEffect(() => {
    const query = {};
    if (search !== '') {
      query.search = search;
    }
    api('GET', 'album', {}, query).then((data) => {
      setAlbum(data);
    });
  }, [setSearch]);

  return (
    <>
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
      {album.length > 0 ? (
        album.map((albums) => (
          <AlbumCards name={albums?.name} photo={albums?.photo} artist={albums?.artist?.name} lin={albums?._id} />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default Albums;
