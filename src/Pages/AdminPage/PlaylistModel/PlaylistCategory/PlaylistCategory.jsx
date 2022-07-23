import { useEffect, useState } from 'react';
import { useModal, useModalEdit } from '../../../../Components/Modals/cardModal/useModal';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './PlaylistCategory.css';
import PlaylistEditForm from '../PlaylistEditForm/PlaylistEditForm';
import PlaylistCreateForm from '../PlaylistCreateForm/PlaylistCreateForm';

const PlaylistCategory = ({ name, song, photo, description, user }) => {
  const { playlist, setPlaylist, refresh, setRefresh } = useListContext();
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenEdit, openModalEdit, closeModalEdit] = useModalEdit(false);
  const [editPlaylist, setEditPlaylist] = useState({});

  useEffect(() => {
    if (refresh) {
      api('GET', 'playlist', {}, {}).then((data) => {
        console.log(data);
        setPlaylist(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `playlist/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  console.log('playlist', playlist);

  return (
    <div className="categoryContainer">
      <div>
        <span className="categoryTitle">PLAYLISTS</span>
        <button onClick={openModal} className="addButton" type="button">
          +
          <PlaylistCreateForm
            isOpen={isOpen}
            closeModal={closeModal}
            name={name}
            song={song}
            photo={photo}
            description={description}
            user={user}
          />
        </button>
      </div>

      {playlist.map((playlistName) => (
        <>
          <div className="artistCategoryContainer">
            <img className="playlistPhoto" src={playlistName.photo} alt="album picture" />

            <h3>{playlistName.name}</h3>
            <h3>{playlistName.description}</h3>
            {playlistName.song.map((songName) => (
              <h3>{songName.title}</h3>
            ))}
            {playlistName.user.map((users) => (
              <h3>{users.name}</h3>
            ))}

            <button
              onClick={() => {
                setEditPlaylist(playlistName);
                openModalEdit();
              }}
              className="adminButton"
              type="button">
              Edit
            </button>
            <button onClick={() => handleDeleteItem(playlistName._id)} className="adminButton" type="button">
              Delete
            </button>
          </div>
        </>
      ))}
      {isOpenEdit && (
        <PlaylistEditForm isOpenEdit={isOpenEdit} closeModalEdit={closeModalEdit} editPlaylist={editPlaylist} />
      )}
    </div>
  );
};

export default PlaylistCategory;
