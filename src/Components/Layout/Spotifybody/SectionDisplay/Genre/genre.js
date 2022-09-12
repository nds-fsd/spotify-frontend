import './genre.css';
import { useNavigate } from 'react-router-dom';

const Genre = ({ name, description, photo, lin }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/genre/${lin}`);
  };
  return (
    <div onClick={handleRedirect}>
      <button className="genre-container" type="button">
        <h3 className="genre-info">{name}</h3>
        <img src={photo} />
        <h4 className="genre-description">{description}</h4>
      </button>
    </div>
  );
};

export default Genre;
