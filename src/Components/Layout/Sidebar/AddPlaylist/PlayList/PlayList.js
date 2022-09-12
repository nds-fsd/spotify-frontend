import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../../../Utils/api';
import './PlayList.css';
import usePlayer from '../../../../../Hooks/use-player';

const PlayListName = () => {
  const { newNamePlaylist } = usePlayer();

  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api('GET', 'playlist', {}, {}).then((data) => {
      setList(data);
    });
  }, [newNamePlaylist]);

  const handleClickLink = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };
  return (
    <div className="Conteiner-Playlist">
      {list.map((objeto) => (
        <div className="list">
          <div onClick={() => handleClickLink(objeto._id)}>{objeto.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PlayListName;
