import './artists.css';

const Artists = ({ name, bio, photo, lin }) => (
  <a href={`http://localhost:3000/artist/${lin}`}>
    <button className="artist-container" type="button">
      <h3 className="artist-info">{name}</h3>
      <img src={photo} alt={photo} />
      <h4 className="artist-bio">{bio}</h4>
    </button>
  </a>
);

export default Artists;
