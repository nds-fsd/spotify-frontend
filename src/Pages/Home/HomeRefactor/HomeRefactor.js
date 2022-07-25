import { getAlbum, getAllCards, getGenre } from '../../../Api/utils';
import Home from '../Home';
import './HomeRefactor.css';

const Refactor = () => (
  <div>
    <Home title="album" fetchData={getAllCards} />
    <Home title="artistas" fetchData={getAlbum} />
    <Home title="genero" fetchData={getGenre} />
  </div>
);

export default Refactor;
