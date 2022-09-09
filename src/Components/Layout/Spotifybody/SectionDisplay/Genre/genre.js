import './genre.css';

const Genre = ({ name, description, photo, _id }) => (
  <button className="genre-container" type="button">
    <h3 className="genre-info">{name}</h3>
    <img src={photo} />
    <h4 className="genre-info">{description}</h4>
  </button>
);

export default Genre;
