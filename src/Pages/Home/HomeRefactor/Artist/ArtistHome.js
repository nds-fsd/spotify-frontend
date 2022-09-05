import { useState, useEffect } from 'react';
import api from '../../../../Utils/api';
import Artists from '../../../../Components/Layout/Spotifybody/SectionDisplay/Artists/artists';

const ArtistPage = () => {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    api('GET', 'artist', {}, {}).then((data) => {
      setArtist(data);
    });
  }, []);
  console.log('artist', artist);
  return (
    <>
      {' '}
      {artist.length > 0 ? (
        artist.map((c) => (
          <Artists name={c.name} photo={c.photo} bio={c.bio} monthlyUsers={c.monthlyUsers} albums={c.albums} />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default ArtistPage;
