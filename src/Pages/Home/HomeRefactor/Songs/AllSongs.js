import { useEffect, useState } from 'react';

import Cards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';
import api from '../../../../Utils/api';
import usePlayer from '../../../../Hooks/use-player';

const AllSongs = () => {
  const { isPlaying, setIndex, indexSongs, setCountSongs, setPlayListSongs, playListSongs, setPlaying } = usePlayer();

  const [songs, setSongs] = useState([]);
  useEffect(() => {
    api('GET', 'songs', {}, {}).then((data) => {
      setSongs(data);
      setPlayListSongs(data);
    });
  }, []);

  console.log(playListSongs);
  return (
    <>
      {' '}
      {songs.length > 0 ? (
        songs.map((s, index) => (
          <Cards
            genre={s.genre}
            title={s.title}
            artist={s.artist}
            duration={s.duration}
            releaseDate={s.releaseDate}
            photo={s.photo}
            indexUrl={index}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default AllSongs;
