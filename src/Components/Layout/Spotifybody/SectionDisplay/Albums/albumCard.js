import './albums.css';

const AlbumCards = ({ name, photo, artist, lin }) => (
  <a href={`http://localhost:3000/album/${lin}`}>
    <button className="cards-container" type="button">
      <h3 className="card-info">{name}</h3>
      <h3 className="card-info">{artist}</h3>
      <img src={photo} alt={photo} />
    </button>
  </a>
);

export default AlbumCards;
