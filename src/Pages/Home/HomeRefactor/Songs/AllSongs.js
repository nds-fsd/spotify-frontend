import { useEffect, useState } from 'react';

import Cards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';
import api from '../../../../Utils/api';

const AllSongs = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    api('GET', 'songs', {}, {}).then((data) => {
      setSongs(data);
    });
  }, []);

  return (
    <>
      {' '}
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
