import { useEffect, useState } from 'react';
import { useModal, useModalEdit } from '../../../../Components/Modals/cardModal/useModal';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './PlaylistCategory.css';
import PlaylistEditForm from '../PlaylistEditForm/PlaylistEditForm';
import PlaylistCreateForm from '../PlaylistCreateForm/PlaylistCreateForm';

const PlaylistCategory = ({ name, song, photo, description, user }) => {
  const { playlists, setPlaylists, refresh, setRefresh } = useListContext();
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenEdit, openModalEdit, closeModalEdit] = useModalEdit(false);
  const [editPlaylist, setEditPlaylist] = useState({});

  useEffect(() => {
    if (refresh) {
      api('GET', 'playlist', {}, {}).then((data) => {
        console.log(data);
        setPlaylists(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `playlist/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  console.log('playlist', playlists);

  return (
    // <div className="categoryContainer">
    <div>
      <span className="playlistCategoryTitle">PLAYLISTS</span>
      <button onClick={openModal} className="addPlaylistButton" type="button">
        ADD NEW +
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
      {/* </div> */}

      {playlists?.map((playlist) => (
        <>
          <div className="playlistCategoryContainer">
            <img className="playlistPhoto" src={playlist.photo} alt="album picture" />
            <h3>{playlist.name}</h3>
            <div className="playlistDescription">{playlist.description}</div>
            {playlist.song?.map((songName) => (
              <h3>{songName.title}</h3>
            ))}
            <h3>{playlist?.user?.name || 'No user'}</h3>

            <button
              onClick={() => {
                setEditPlaylist(playlist);
                openModalEdit();
              }}
              className="adminPlaylistButton"
              type="button">
              Update
            </button>
            <button onClick={() => handleDeleteItem(playlist._id)} className="adminPlaylistButton" type="button">
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
