import { useState, useEffect } from 'react';
import api from '../../../../Utils/api';
import Genre from '../../../../Components/Layout/Spotifybody/SectionDisplay/Genre/genre';
import { useHomeContext } from '../HomeRefactorBody/homeRefactor.context';

const RefactorGenre = () => {
  const { search } = useHomeContext();
  const [refactorGender, setRefactorGenre] = useState([]);

  useEffect(() => {
    const query = {};
    if (search !== '') {
      query.search = search;
    }
    query.limit = 4;
    if (search.length >= 3 || search.length === 0) {
      api('GET', 'genre', {}, query).then((data) => {
        setRefactorGenre(data);
      });
    }
  }, [search]);

  return <> {refactorGender.length > 0 ? refactorGender.map((c) => <Genre name={c.name} photo={c.photo} />) : <></>}</>;
};

export default RefactorGenre;
