import { useEffect, useState } from 'react';

import Cards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';
import api from '../../../../Utils/api';

const RefactorSongs = () => {
  const [refactorSongs, setRefactorSongs] = useState([]);

  useEffect(() => {
    api('GET', 'songs', {}, {}).then((data) => {
      const fewSongs = data.slice(0, 4);
      setRefactorSongs(fewSongs);
    });
  }, []);

  return (
    <>
      {' '}
      {refactorSongs.length > 0 ? (
        refactorSongs.map((s) => (
          <Cards
            genre={s.genre}
            title={s.title}
            // artist={s.artist}
            // duration={s.duration}
            // releaseDate={s.releaseDate}
            photo={s.photo}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default RefactorSongs;
