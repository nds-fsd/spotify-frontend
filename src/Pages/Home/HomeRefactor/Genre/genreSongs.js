import { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import api from '../../../../Utils/api';
import styles from '../SearchBar/searchBar.module.css';
import './genreSongs.css';
import Cards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';
import usePlayer from '../../../../Hooks/use-player';

const GenreSongs = ({ song, artist, _id, photo }) => {
  const { isPlaying, setIndex, indexSongs, setCountSongs, setPlayListSongs, playListSongs, setPlaying } = usePlayer();

  const [viewSongs, setViewSongs] = useState(false);
  const [genre, setGenre] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') ? searchParams.get('search') : '');

  // useEffect(() => {
  //   api('GET', `genre/${id}`, {}, {}).then((data) => {
  //     setGenre(data);
  //     console.log('genre id', data);
  //   });
  // }, []);

  useEffect(() => {
    api('GET', `genre/${id}`, {}, {}).then((data) => {
      setGenre(data.song);
      setPlayListSongs(data.song);

      console.log('songsdATA:', data.song);
    });
  }, []);
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
      </nav>{' '}
      {genre.map((g, index) => (
        <div>
          <Cards
            genre={g.genre}
            title={g.title}
            // artist={s.artist}
            // duration={s.duration}
            // releaseDate={s.releaseDate}
            photo={g.photo}
            indexUrl={index}
            lin={g._id}
          />
        </div>
      ))}
    </>
  );
};

export default GenreSongs;
