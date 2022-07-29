import { useEffect } from 'react';
import GenreCreateForm from '../GenreCreateForm/GenreCreateForm';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './GenreCategory.css';
import GenreEditForm from '../GenreEditForm/GenreEditForm';

const GenreCategory = () => {
  const {
    genres,
    setGenres,
    createItemInput,
    editItemInput,
    refresh,
    setRefresh,
    setCreateItem,
    createItem,
    editItem,
    setEditItem,
    editData,
    setEditData,
  } = useListContext();

  useEffect(() => {
    if (refresh) {
      api('GET', 'genre', {}, {}).then((data) => {
        console.log('data', data);
        setGenres(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `genre/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  return (
    <div>
      <span className="genreCategoryTitle">GENRES</span>

      <button
        onClick={() => {
          if (!createItem ? setCreateItem(true) : setCreateItem(false)) createItemInput.current.focus();
        }}
        className="addGenreButton"
        type="button">
        ADD NEW +
      </button>
      {createItem && <GenreCreateForm />}
      {editItem && <GenreEditForm editData={editData} />}

      {genres.map((genre) => {
        console.log('genre', genre);

        return (
          <>
            <div className="genreCategoryContainer">
              <img className="genrePhoto" src={genre.photo} alt="genre picture" />

              <h3>{genre.name}</h3>
              <div className="genreDescription">{genre.description}</div>

              <button
                onClick={() => {
                  if (!editItem ? setEditItem(true) : setEditItem(false)) editItemInput.current.focus();
                  setEditData(genre);
                }}
                className="adminGenreButton"
                type="button">
                Update
              </button>
              <button onClick={() => handleDeleteItem(genre._id)} className="adminGenreButton" type="button">
                Delete
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default GenreCategory;
