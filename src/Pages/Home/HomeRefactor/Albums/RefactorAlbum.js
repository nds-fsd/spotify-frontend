import { useState, useEffect } from 'react';
import api from '../../../../Utils/api';
import AlbumCards from '../../../../Components/Layout/Spotifybody/SectionDisplay/Albums/albumCard';
import { useHomeContext } from '../HomeRefactorBody/homeRefactor.context';

const RefactorAlbum = () => {
  const [refactorAlbum, setRefactorAlbum] = useState([]);

  const { search } = useHomeContext();

  useEffect(() => {
    const query = {};
    if (search !== '') {
      query.search = search;
    }

    query.limit = 4;

    if (search.length >= 3 || search.length === 0) {
      api('GET', 'album', {}, query).then((data) => {
        setRefactorAlbum(data);
      });
    }
  }, [search]);

  return (
    <>
      {' '}
      {refactorAlbum.length > 0 ? (
        refactorAlbum.map((c) => <AlbumCards name={c.name} artist={c.artist.name} photo={c.photo} lin={c._id} />)
      ) : (
        <></>
      )}
    </>
  );
};

export default RefactorAlbum;
