import { useEffect, useState } from 'react';
import GenreCreateForm from '../GenreCreateForm/GenreCreateForm';
import { useModal, useModalEdit } from '../../../../Components/Modals/cardModal/useModal';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './GenreCategory.css';
import GenreEditForm from '../GenreEditForm/GenreEditForm';

const GenreCategory = ({ name, photo, description }) => {
  const { genres, setGenres, refresh, setRefresh } = useListContext();
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenEdit, openModalEdit, closeModalEdit] = useModalEdit(false);
  const [editGenre, setEditGenre] = useState({});

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

  //   console.log('editAlbum', editAlbum);
  //   console.log(albums);

  return (
    // <div className="categoryContainer">
    <div>
      <span className="genreCategoryTitle">GENRES</span>
      <button onClick={openModal} className="addGenreButton" type="button">
        ADD NEW +
        <GenreCreateForm isOpen={isOpen} closeModal={closeModal} name={name} photo={photo} description={description} />
      </button>
      {/* </div> */}

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
                  setEditGenre(genre);
                  openModalEdit();
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
      {isOpenEdit && <GenreEditForm isOpenEdit={isOpenEdit} closeModalEdit={closeModalEdit} editGenre={editGenre} />}
    </div>
  );
};

export default GenreCategory;
