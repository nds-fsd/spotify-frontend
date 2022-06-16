import Cards from "./Cards/cards.js";
import "./sectiondisplay.css";
import { getAllCards } from "../../../../Utils/utils.js";
import { useState, useEffect } from "react";
 
const SectionDisplay = () => {
  const [cards, setCards] = useState([]);
 
  useEffect(() => {
    getAllCards().then((data) => setCards(data));
  }, []);
 
  return (
    <div className="SectionDisplay-container">
      {cards.length > 0 ? (
        cards.map((c) => <Cards genre={c.genre} title={c.title} />)
      ) : (
        <div>No cards receive from server!</div>
      )}
    </div>
  );
};
 
export default SectionDisplay;
