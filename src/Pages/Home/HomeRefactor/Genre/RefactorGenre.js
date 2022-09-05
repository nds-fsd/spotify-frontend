import { useState, useEffect } from 'react';
import api from '../../../../Utils/api';
import Genre from '../../../../Components/Layout/Spotifybody/SectionDisplay/Genre/genre';

const RefactorGenre = () => {
  const [refactorGender, setRefactorGenre] = useState([]);

  useEffect(() => {
    api('GET', 'genre', {}, {}).then((data) => {
      const fewGenres = data.slice(0, 4);
      setRefactorGenre(fewGenres);
    });
  }, []);

  return <> {refactorGender.length > 0 ? refactorGender.map((c) => <Genre name={c.name} photo={c.photo} />) : <></>}</>;
};

export default RefactorGenre;
