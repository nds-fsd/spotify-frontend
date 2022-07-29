import { useState, useEffect } from 'react';
import AlbumCards from '../../Components/Layout/Spotifybody/SectionDisplay/Albums/albumCard';
import { getAllAlbums } from '../../Api/utils';

const Albums = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllAlbums().then((data) => setCards(data));
  }, []);

  console.log(cards);
  return (
    <>
      {' '}
      {cards.length > 0 ? (
        cards.map((c) => <AlbumCards name={c.name} photo={c.photo} artist={c.artist} />)
      ) : (
        <div>No cards receive from server!</div>
      )}
    </>
  );
};

export default Albums;
