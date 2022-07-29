import { useState, useEffect } from 'react';
import Artists from '../../Components/Layout/Spotifybody/SectionDisplay/Artists/artists';
import { getAllArtists } from '../../Utils/artitsUtils';

const ArtistPage = () => {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    getAllArtists().then((data) => setArtist(data));
  }, []);

  return (
    <>
      {' '}
      {artist.length > 0 ? (
        artist.map((c) => <Artists name={c.name} bio={c.bio} monthlyUsers={c.monthlyUsers} albums={c.albums} />)
      ) : (
        <div>No artists receive from server!</div>
      )}
    </>
  );
};

export default ArtistPage;
