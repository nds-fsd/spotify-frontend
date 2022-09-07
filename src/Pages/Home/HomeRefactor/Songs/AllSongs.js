import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Cards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';
import api from '../../../../Utils/api';

const AllSongs = () => {
  const [songs, setSongs] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const query = {};
    if (searchText !== '') {
      query.search = searchText;
    }
    api('GET', 'songs', {}, query).then((data) => {
      console.log(data);
      setSongs(data);
    });
  }, [searchText]);

  return (
    <>
      <nav>
        <div className="styles.fixedSearchContainer">
          <form>
            <SearchIcon className="styles.searchIcon" />
            <input
              className="styles.searchInput"
              type="text"
              name="search"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </div>
      </nav>{' '}
      {songs.length > 0 ? (
        songs.map((s) => (
          <Cards
            genre={s.genre}
            title={s.title}
            artist={s.artist}
            duration={s.duration}
            releaseDate={s.releaseDate}
            photo={s.photo}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default AllSongs;
