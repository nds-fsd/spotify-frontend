import { useState, useEffect } from 'react';
import api from '../../../../Utils/api';
import AlbumCards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Albums/albumCard';

const RefactorAlbum = () => {
  const [refactorAlbum, setRefactorAlbum] = useState([]);

  useEffect(() => {
    api('GET', 'album', {}, {}).then((data) => {
      const fewAlbums = data.slice(0, 5);
      setRefactorAlbum(fewAlbums);
      console.log('albums', refactorAlbum);
    });
  }, []);

  return (
    <> {refactorAlbum.length > 0 ? refactorAlbum.map((c) => <AlbumCards name={c.name} photo={c.photo} />) : <></>}</>
  );
};

export default RefactorAlbum;
