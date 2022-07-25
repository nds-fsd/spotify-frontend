import { useEffect, useState } from 'react';
import CreateAlbumForm from '../CreateAlbumForm/CreateAlbumForm';
import { useModal, useModalEdit } from '../../../../Components/Modals/cardModal/useModal';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './AlbumCategory.css';
import EditAlbumForm from '../EditAlbumForm/EditAlbumForm';

const AlbumCategory = ({ name, photo, releaseYear, artist }) => {
  const { albums, setAlbums, refresh, setRefresh } = useListContext();
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenEdit, openModalEdit, closeModalEdit] = useModalEdit(false);
  const [editAlbum, setEditAlbum] = useState({});

  useEffect(() => {
    if (refresh) {
      api('GET', 'album', {}, {}).then((data) => {
        console.log('data', data);
        setAlbums(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `album/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  //   console.log('editAlbum', editAlbum);
  //   console.log(albums);

  return (
    // <div className="categoryContainer">
    <div>
      <span className="albumCategoryTitle">ALBUMS</span>
      <button onClick={openModal} className="addAlbumButton" type="button">
        ADD NEW +
        <CreateAlbumForm
          isOpen={isOpen}
          closeModal={closeModal}
          name={name}
          photo={photo}
          releaseYear={releaseYear}
          artist={artist}
          // songs={songs}
        />
      </button>
      {/* </div> */}

      {albums.map((albumName) => {
        console.log('albumName', albumName);
        console.log('photo', photo);
        return (
          <>
            <div className="albumCategoryContainer">
              <img className="albumPhoto" src={albumName.photo} alt="album picture" />

              <h3 className="albumHeaders">{albumName.name}</h3>
              <div className="releaseYear">{albumName.releaseYear}</div>
              <h3>{albumName.artist?.name || 'No Artist'}</h3>
              {/* <h3>{albums.songs?.title}</h3> */}

              <button
                onClick={() => {
                  setEditAlbum(albumName);
                  openModalEdit();
                }}
                className="adminAlbumButton"
                type="button">
                Update
              </button>
              <button onClick={() => handleDeleteItem(albumName._id)} className="adminAlbumButton" type="button">
                Delete
              </button>
            </div>
          </>
        );
      })}
      {isOpenEdit && <EditAlbumForm isOpenEdit={isOpenEdit} closeModalEdit={closeModalEdit} editAlbum={editAlbum} />}
    </div>
  );
};

export default AlbumCategory;
