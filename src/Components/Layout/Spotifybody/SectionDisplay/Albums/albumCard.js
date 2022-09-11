import './albums.css';

const AlbumCards = ({ name, photo, artist, lin }) => (
  <a href={`http://localhost:3000/album/${lin}`}>
    <button className="album-container" type="button">
      <h3 className="album-info">{artist}</h3>
      <h3 className="album-info">{name}</h3>
      <img className="album-pic" src={photo} alt={photo} />
    </button>
  </a>
);

export default AlbumCards;
