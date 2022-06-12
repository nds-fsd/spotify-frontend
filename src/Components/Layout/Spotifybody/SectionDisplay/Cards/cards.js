import './cards.css';

const Cards = ({photo,titulo,descripcion}) => {

    return(
    
    <div className="cards-container">
    <img src={photo} alt={titulo} />
    <h3>{titulo}</h3>
    <h5>{descripcion}</h5>
    </div>






)}

export default Cards;
