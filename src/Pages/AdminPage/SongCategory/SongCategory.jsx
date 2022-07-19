import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { getAllCards } from '../../../Api/utils';
import { useListContext } from '../context';
import api from '../../../Utils/api';
import './SongCategory.css';

const SongCategory = () => {
  const { songs, setSongs } = useListContext();
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    if (refresh) {
      getAllCards().then((data) => {
        setSongs(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `songs/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  return (
    <div className="categoryContainer">
      <div>
        <span className="categoryTitle">SONGS</span>
        <Button className="addButton" variant="text">
          +
        </Button>
      </div>

      {songs.map((s) => (
        <>
          <div className="songCategoryContainer">
            <img className="songPhoto" src={s.photo} alt="song picture" />

            <h3>{s.title}</h3>
            <h3>{s.artist?.name}</h3>
            <h3>{s.duration}</h3>
            <h3>{s.genre}</h3>
            <h3>{s.releaseDate}</h3>
            <Button className="adminButton" variant="contained">
              Edit
            </Button>
            <Button onClick={() => handleDeleteItem(s._id)} className="adminButton" variant="contained">
              Delete
            </Button>
          </div>
        </>
      ))}
    </div>
  );
};

export default SongCategory;
