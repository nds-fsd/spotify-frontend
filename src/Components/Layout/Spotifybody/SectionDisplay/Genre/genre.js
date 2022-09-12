import './genre.css';

const Genre = ({ name, description, photo, lin }) => (
  <a href={`https://nuclify.netlify.app/genre/${lin}`}>
    <button className="genre-container" type="button">
      <h3 className="genre-info">{name}</h3>
      <img src={photo} />
      <h4 className="genre-description">{description}</h4>
    </button>
  </a>
);

export default Genre;
