import Home from '../Home';
import Albums from '../../Albums/Albums';
import GenrePage from '../../Genre/GenreHome';
import ArtistPage from '../../Artist/ArtistHome';

const HomeRefactor = () => (
  <>
    <div>
      <h3>Genero </h3>
      <GenrePage />
      <h2>see all</h2>
    </div>
    <div>
      <h3>Albums </h3>
      <Albums />
      <h2>see all</h2>
    </div>
    <div>
      <h3>Artista</h3>
      <ArtistPage />
      <h2>see all</h2>
    </div>
  </>
);
export default HomeRefactor;
