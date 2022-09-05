import { useState, useEffect } from 'react';
import api from '../../../../Utils/api';
import Genre from '../../../../Components/Layout/Spotifybody/SectionDisplay/Genre/genre';

const GenrePage = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    api('GET', 'genre', {}, {}).then((data) => {
      setGenre(data);
    });
  }, []);

  return (
    <>
      {' '}
      {genre.length > 0 ? genre.map((c) => <Genre name={c.name} description={c.description} photo={c.photo} />) : <></>}
    </>
  );
};

export default GenrePage;
