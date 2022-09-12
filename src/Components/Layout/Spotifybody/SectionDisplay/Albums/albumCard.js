import './albums.css';
import { useNavigate } from 'react-router-dom';

const AlbumCards = ({ name, photo, artist, lin }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/album/${lin}`);
  };
  return (
    <div onClick={handleRedirect}>
      <button className="album-container" type="button">
        <h3 className="album-info">{artist}</h3>
        <h3 className="album-info">{name}</h3>
        <img className="album-pic" src={photo} alt={photo} />
      </button>
    </div>
  );
};

export default AlbumCards;
