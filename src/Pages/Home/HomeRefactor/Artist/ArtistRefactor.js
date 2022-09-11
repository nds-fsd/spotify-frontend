import { useState, useEffect } from 'react';
import api from '../../../../Utils/api';
import Artists from '../../../../Components/Layout/Spotifybody/SectionDisplay/Artists/artists';
import { useHomeContext } from '../HomeRefactorBody/homeRefactor.context';

const RefactorArtist = () => {
  const { search } = useHomeContext();
  const [refactorArtist, setRefactorArtist] = useState([]);

  useEffect(() => {
    const query = {};
    if (search !== '') {
      query.search = search;
    }
    query.limit = 4;

    if (search.length >= 3 || search.length === 0) {
      api('GET', 'artist', {}, query).then((data) => {
        setRefactorArtist(data);
      });
    }
  }, [search]);

  return (
    <>
      {' '}
      {refactorArtist.length > 0 ? (
        refactorArtist.map((c) => <Artists name={c.name} photo={c.photo} lin={c._id} />)
      ) : (
        <></>
      )}
    </>
  );
};

export default RefactorArtist;
