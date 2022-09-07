import { useState, useEffect } from 'react';
import api from '../../../../Utils/api';
import AlbumCards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Albums/albumCard';

const Albums = () => {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    api('GET', 'album', {}, {}).then((data) => {
      setAlbum(data);
    });
  }, []);

  return (
    <>
      {' '}
      {album.length > 0 ? (
        album.map((albums) => <AlbumCards name={albums?.name} photo={albums?.photo} artist={albums?.artist} />)
      ) : (
        <></>
      )}
    </>
  );
};

export default Albums;
