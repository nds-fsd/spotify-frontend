import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { getAllCards } from '../../../Api/utils';
import { useListContext } from '../context';
import api from '../../../Utils/api';
import './SongCategory.css';

const SongCategory = () => {
  const { song, setSong } = useListContext();
  const navigate = useNavigate();

  useEffect(() => {
    getAllCards().then((data) => setSong(data));
  }, []);

  const handleDeleteItem = (id) => {
    console.log('paso por aqui');
    api('DELETE', `songs/${id}`, {}, {}).then(() => {
      navigate('/adminpage/songs', { replace: true });
    });
    console.log('ok delete song');
  };

  return (
    <div className="categoryContainer">
      <div>
        <span className="categoryTitle">SONGS</span>
        <Button className="addButton" variant="text">
          +
        </Button>
      </div>

      {song.map((s) => (
        <>
          <div className="songCategoryContainer">
            <img className="songPhoto" src={s.photo} alt="song picture" />

            <h3>{s.title}</h3>
            <h3>{s.artist}</h3>
            <h3>{s.duration}</h3>
            <h3>{s.genre}</h3>
            <h3>{s.releaseDate}</h3>
            <Button className="adminButton" variant="contained">
              Edit
            </Button>
            <Button onClick={() => handleDeleteItem()} className="adminButton" variant="contained">
              Delete
            </Button>
          </div>
        </>
      ))}
    </div>
  );
};

export default SongCategory;
