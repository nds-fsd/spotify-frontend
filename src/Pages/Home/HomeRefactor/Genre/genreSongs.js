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
  //     setGenre(data)
  //   });
  // }, []);

  const fetchSongs = () => {
    api('GET', `genre/${id}`, {}, {}).then((data) => {
      setGenre(data);
    });
  };

  return (
    <>
      {genre.map((g) => (
        <button type="button" value={g.id}>
          <div>
            <h3 className="genre-info">{g?.song.title}</h3>

            <h3 className="genre-info">{g?.song.artist}</h3>
            <img src={g?.song?.photo} />
          </div>
        </button>
      ))}
    </>
  );
};

export default GenreSongs;
