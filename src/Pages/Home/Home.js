import { useState, useEffect } from "react";
import Cards from "../../Components/Layout/Spotifybody/SectionDisplay/Cards/cards";
import { getAllCards } from "../../Api/utils";
const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
     getAllCards().then((data) => setCards(data)); 
    }, []);



    return (<> {cards.length > 0 ? (
        cards.map((c) => (
          <Cards
            genre={c.genre}
            title={c.title}
            duration={c.duration}
            releaseDate={c.releaseDate}
            photo={c.photo}
          />
        ))
      ) : (
        <div>No cards receive from server!</div>
      )}</>)
}

export default Home;