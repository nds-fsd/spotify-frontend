import './Home.css';
import { useState, useEffect } from 'react';
import Cards from '../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards';

const Home = ({ title, fetchData }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setCards(data));
  }, []);

  return (
    <div className="container-album">
      <div className="title">{title}</div>
      <div className="container-albums">
        {cards.length > 0 ? (
          cards.map((c) => (
            <Cards genre={c.genre} title={c.title} duration={c.duration} releaseDate={c.releaseDate} photo={c.photo} />
          ))
        ) : (
          <div>No cards receive from server!</div>
        )}
      </div>
      <div className="title2">See All </div>
    </div>
  );
};

export default Home;
