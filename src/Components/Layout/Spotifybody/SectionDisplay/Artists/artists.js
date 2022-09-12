import './artists.css';
import { useNavigate } from 'react-router-dom';

const Artists = ({ name, bio, photo, lin }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/artist/${lin}`);
  };
  return (
    <div onClick={handleRedirect}>
      <button className="artist-container" type="button">
        <h3 className="artist-info">{name}</h3>
        <img src={photo} alt={photo} />
        <h4 className="artist-bio">{bio}</h4>
      </button>
    </div>
  );
};

export default Artists;
