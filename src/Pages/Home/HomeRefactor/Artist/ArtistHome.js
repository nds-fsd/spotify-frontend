import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../SearchBar/searchBar.module.css';
import api from '../../../../Utils/api';
import Artists from '../../../../Components/Layout/Spotifybody/SectionDisplay/Artists/artists';

const ArtistPage = () => {
  const [artist, setArtist] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') ? searchParams.get('search') : '');

  useEffect(() => {
    const query = {};
    if (search !== '') {
      query.search = search;
    }

    api('GET', 'artist', {}, query).then((data) => {
      setArtist(data);
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
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </form>
        </div>
      </nav>
      {artist.length > 0 ? (
        artist.map((c) => (
          <Artists
            name={c.name}
            photo={c.photo}
            bio={c.bio}
            monthlyUsers={c.monthlyUsers}
            albums={c.albums}
            lin={c._id}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default ArtistPage;
