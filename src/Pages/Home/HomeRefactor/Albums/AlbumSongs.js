import { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../SearchBar/searchBar.module.css';
import Cards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';
import usePlayer from '../../../../Hooks/use-player';
import api from '../../../../Utils/api';
import '../../../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards.css';

const AlbumSongs = ({ song, artist, _id, photo }) => {
  const [viewSongs, setViewSongs] = useState(false);
  const [album, setAlbum] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') ? searchParams.get('search') : '');
  const { isPlaying, setIndex, indexSongs, setCountSongs, setPlayListSongs, playListSongs, setPlaying } = usePlayer();

  // useEffect(() => {
  //   api('GET', `genre/${id}`, {}, {}).then((data) => {
  //     setGenre(data)
  //   });
  // }, []);

  useEffect(() => {
    api('GET', `album/${id}`, {}, {}).then((data) => {
      setAlbum(data.songs);
      setPlayListSongs(data.songs);
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
      {album.map((a, index) => (
        <div>
          <Cards
            genre={a.genre}
            title={a.title}
            // artist={s.artist}
            // duration={s.duration}
            // releaseDate={s.releaseDate}
            photo={a.photo}
            indexUrl={index}
            lin={a._id}
          />
        </div>
      ))}
    </>
  );
};

export default AlbumSongs;
