import { useEffect, useState } from 'react';

import Cards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';
import api from '../../../../Utils/api';
import usePlayer from '../../../../Hooks/use-player';

const RefactorSongs = () => {
  const { isPlaying, setIndex, indexSongs, setCountSongs, setPlayListSongs, playListSongs, setPlaying } = usePlayer();

  const [refactorSongs, setRefactorSongs] = useState([]);

  useEffect(() => {
    api('GET', 'songs', {}, {}).then((data) => {
      const fewSongs = data.slice(0, 4);
      setRefactorSongs(fewSongs);
      setPlayListSongs(fewSongs);
    });
  }, []);

  return (
    <>
      {' '}
      {refactorSongs.length > 0 ? (
        refactorSongs.map((s, index) => (
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
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default RefactorSongs;
