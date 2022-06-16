import './cards.css';

const Cards = ({photo,genre,title}) => {

    return(
    
    <div className="cards-container">
    <img src={photo} alt={genre} />
    <h3>{genre}</h3>
    <h5>{title}</h5>
    </div>






)}

export default Cards;
