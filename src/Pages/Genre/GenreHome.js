import { useState, useEffect } from 'react';
import Genre from '../../Components/Layout/Spotifybody/SectionDisplay/Genre/genre';
import { getAllGenres } from '../../Utils/genreUtils';

const GenrePage = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    getAllGenres().then((data) => setGenre(data));
  }, []);

  return (
    <>
      {' '}
      {genre.length > 0 ? (
        genre.map((c) => <Genre name={c.name} description={c.description} photo={c.photo} />)
      ) : (
        <div>No genres receive from server!</div>
      )}
    </>
  );
};

export default GenrePage;
