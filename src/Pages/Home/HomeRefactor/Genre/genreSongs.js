import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../../Utils/api';

const GenreSongs = ({ song, artist, _id, photo }) => {
  const [viewSongs, setViewSongs] = useState(false);
  const [genre, setGenre] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   api('GET', `genre/${id}`, {}, {}).then((data) => {
  //     setGenre(data);
  //     console.log('genre id', data);
  //   });
  // }, []);

  useEffect(() => {
    api('GET', `genre/${id}`, {}, {}).then((data) => {
      setGenre(data.song);
    });
  }, []);
  console.log(genre);
  return (
    <>
      {genre.map((g) => (
        <div>
          <h3 className="genre-info">{g?.title}</h3>

          <h3 className="genre-info">{g?.artist}</h3>
          <img src={g?.photo} />
        </div>
      ))}
    </>
  );
};

export default GenreSongs;
