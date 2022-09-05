import { useState, useEffect } from 'react';
import api from '../../../../Utils/api';
import Artists from '../../../../Components/Layout/Spotifybody/SectionDisplay/Artists/artists';

const RefactorArtist = () => {
  const [refactorArtist, setRefactorArtist] = useState([]);

  useEffect(() => {
    api('GET', 'artist', {}, {}).then((data) => {
      const fewArtist = data.slice(0, 4);
      setRefactorArtist(fewArtist);
    });
  }, []);

  return (
    <> {refactorArtist.length > 0 ? refactorArtist.map((c) => <Artists name={c.name} photo={c.photo} />) : <></>}</>
  );
};

export default RefactorArtist;
