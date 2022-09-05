import { useState, useEffect } from 'react';
import api from '../../../../../Utils/api';
import './PlayList.css';

const PlayListName = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api('GET', 'playlist/', {}, {}).then((data) => {
      setList(data);
    });
  }, [list]);
  return (
    <div className="Conteiner-Playlist">
      {list.map((objeto) => (
        <div className="list">
          <a href={`http://localhost:3000/playlist/${objeto._id}`}>{objeto.name}</a>
        </div>
      ))}
    </div>
  );
};

export default PlayListName;
