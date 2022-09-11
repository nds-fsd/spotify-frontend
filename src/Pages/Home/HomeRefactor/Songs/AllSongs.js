import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../SearchBar/searchBar.module.css';
import Cards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';
import api from '../../../../Utils/api';
import usePlayer from '../../../../Hooks/use-player';

const AllSongs = () => {
  const { isPlaying, setIndex, indexSongs, setCountSongs, setPlayListSongs, playListSongs, setPlaying } = usePlayer();
  const [songs, setSongs] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') ? searchParams.get('search') : '');

  useEffect(() => {
    const query = {};
    if (search !== '') {
      query.search = search;
    }

    if (search.length >= 3 || search.length === 0) {
      api('GET', 'songs', {}, query).then((data) => {
        setSongs(data);
        setPlayListSongs(data);
      });
    }
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
      {songs.length > 0 ? (
        songs.map((s, index) => (
          <div>
            <Cards
              genre={s.genre}
              title={s.title}
              // artist={s.artist}
              // duration={s.duration}
              // releaseDate={s.releaseDate}
              photo={s.photo}
              indexUrl={index}
              lin={s._id}
            />
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default AllSongs;
