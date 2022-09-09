import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../../Utils/api';

const AlbumSongs = ({ song, artist, _id, photo }) => {
  const [viewSongs, setViewSongs] = useState(false);
  const [album, setAlbum] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   api('GET', `genre/${id}`, {}, {}).then((data) => {
  //     setGenre(data)
  //   });
  // }, []);

  useEffect(() => {
    api('GET', `album/${id}`, {}, {}).then((data) => {
      setAlbum(data.song);
    });
  }, []);
  return (
    <>
      {album.map((a) => (
        <div>
          <h3 className="genre-info">{a?.title}</h3>

          <h3 className="genre-info">{a?.artist}</h3>
          <img src={a?.photo} />
        </div>
      ))}
    </>
  );
};

export default AlbumSongs;
