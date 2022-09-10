import { useState, useEffect } from 'react';
import api from '../../../../Utils/api';
import AlbumCards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Albums/albumCard';

const RefactorAlbum = () => {
  const [refactorAlbum, setRefactorAlbum] = useState([]);

  useEffect(() => {
    api('GET', 'album', {}, {}).then((data) => {
      const fewAlbums = data.slice(0, 4);
      setRefactorAlbum(fewAlbums);
    });
  }, []);

  return (
    <>
      {' '}
      {refactorAlbum.length > 0 ? (
        refactorAlbum.map((c) => <AlbumCards name={c.name} photo={c.photo} lin={c._id} />)
      ) : (
        <></>
      )}
    </>
  );
};

export default RefactorAlbum;
