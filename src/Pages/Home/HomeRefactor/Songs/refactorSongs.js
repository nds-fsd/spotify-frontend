import { useEffect, useState } from 'react';

import Cards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';
import api from '../../../../Utils/api';
import usePlayer from '../../../../Hooks/use-player';
import { useHomeContext } from '../HomeRefactorBody/homeRefactor.context';

const RefactorSongs = () => {
  const { isPlaying, setIndex, indexSongs, setCountSongs, setPlayListSongs, playListSongs, setPlaying } = usePlayer();

  const [refactorSongs, setRefactorSongs] = useState([]);

  const { search } = useHomeContext();

  useEffect(() => {
    const query = {};
    if (search !== '') {
      query.search = search;
    }
    query.limit = 4;

    if (search.length >= 3 || search.length === 0) {
      api('GET', 'songs', {}, query).then((data) => {
        setRefactorSongs(data);
        setPlayListSongs(data);
      });
    }
  }, [search]);

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
