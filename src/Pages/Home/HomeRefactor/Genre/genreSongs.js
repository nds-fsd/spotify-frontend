import { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import api from '../../../../Utils/api';
import styles from '../SearchBar/searchBar.module.css';
import './genreSongs.css';

const GenreSongs = ({ song, artist, _id, photo }) => {
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
      {genre.map((g) => (
        <div className="genresongs-container">
          <h3 className="genresongs-info">{g?.title}</h3>

          <h3 className="genresongs-info">{g?.artist?.name}</h3>
          <img src={g?.photo} />
        </div>
      ))}
    </>
  );
};

export default GenreSongs;
