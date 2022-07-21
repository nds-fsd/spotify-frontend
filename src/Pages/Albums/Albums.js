import { useState, useEffect } from 'react';
import albums from '../../Components/Layout/Spotifybody/SectionDisplay/Albums/albums';
import { getAllAlbums } from '../../Api/utils';

const Albums = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllAlbums().then((data) => setCards(data));
  }, []);

  return (
    <>
      {' '}
      {cards.length > 0 ? (
        cards.map((c) => <Albums name={c.name} photo={c.photo} artist={c.artist} />)
      ) : (
        <div>No cards receive from server!</div>
      )}
    </>
  );
};

export default Albums;
