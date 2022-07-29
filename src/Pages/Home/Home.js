import { useState, useEffect } from 'react';
import Cards from '../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';
import api from '../../Utils/api';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api('GET', 'songs', {}, {}).then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <>
      {' '}
      {cards.length > 0 ? (
        cards.map((c) => (
          <Cards
            genre={c.genre}
            title={c.title}
            artist={c.artist}
            duration={c.duration}
            releaseDate={c.releaseDate}
            photo={c.photo}
          />
        ))
      ) : (
        <div>No cards receive from server!</div>
      )}
    </>
  );
};

export default Home;
