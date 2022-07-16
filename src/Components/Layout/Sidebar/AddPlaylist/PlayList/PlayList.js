import { useState, useEffect } from 'react';
import { getAlllist } from '../../../../../Api/utils';
import './PlayList.css';

const PlayListName = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getAlllist().then((data) => setList(data));
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
