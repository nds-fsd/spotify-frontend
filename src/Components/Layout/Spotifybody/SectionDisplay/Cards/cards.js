import './cards.css';

const Cards = ({photo,genre,title,releaseDate,duration}) => {

    return(
    
    <div className="cards-container">
    <img src={photo} alt={genre} />
    <h3>{genre}</h3>
    <h5>{title}</h5>
    <h6>{duration}</h6>
    <h7>{ releaseDate}</h7>
    </div>






)}

export default Cards;
