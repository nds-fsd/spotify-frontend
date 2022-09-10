import { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import api from '../../../../Utils/api';
import styles from '../SearchBar/searchBar.module.css';
import '../../../../Components/Layout/Spotifybody/SectionDisplay/Artists/artists.css';

const ArtistSongs = () => {
  const [viewSongs, setViewSongs] = useState(false);
  const [artist, setArtist] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') ? searchParams.get('search') : '');

  // useEffect(() => {
  //   api('GET', `genre/${id}`, {}, {}).then((data) => {
  //     setGenre(data)
  //   });
  // }, []);

  useEffect(() => {
    api('GET', `artist/${id}`, {}, {}).then((data) => {
      setArtist(data.song);
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
      {artist.map((a) => (
        <div className="artist-container">
          <h3 className="artist-info">{a?.title}</h3>

          <h3 className="artist-info">{a?.artist}</h3>
          <img src={a?.photo} />
        </div>
      ))}
    </>
  );
};

export default ArtistSongs;
