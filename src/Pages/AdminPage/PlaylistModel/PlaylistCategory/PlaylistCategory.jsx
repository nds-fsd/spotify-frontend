import { useEffect } from 'react';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './PlaylistCategory.css';
import PlaylistEditForm from '../PlaylistEditForm/PlaylistEditForm';
import PlaylistCreateForm from '../PlaylistCreateForm/PlaylistCreateForm';

const PlaylistCategory = () => {
  const {
    songs,
    setSongs,
    users,
    setUsers,
    playlists,
    setPlaylists,
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
      api('GET', 'playlist', {}, {}).then((data) => {
        console.log(data);
        setPlaylists(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  useEffect(() => {
    if (refresh) {
      api('GET', 'songs', {}, {}).then((data) => {
        console.log(data);
        setSongs(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  useEffect(() => {
    if (refresh) {
      api('GET', 'user', {}, {}).then((data) => {
        console.log(data);
        setUsers(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `playlist/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  return (
    <div>
      <span className="playlistCategoryTitle">PLAYLISTS</span>

      <button
        onClick={() => {
          if (!createItem ? setCreateItem(true) : setCreateItem(false)) createItemInput.current.focus();
        }}
        className="addPlaylistButton"
        type="button"
      >
        ADD NEW +
      </button>
      {createItem && (
        <PlaylistCreateForm songs={songs} users={users} setPlaylists={setPlaylists} setCreateItem={setCreateItem} />
      )}
      {editItem && <PlaylistEditForm editData={editData} songs={songs} users={users} />}

      {playlists?.map((playlist) => (
        <>
          {console.log('playlists', playlist)}
          <div className="playlistCategoryContainer">
            <img className="playlistPhoto" src={playlist.photo} alt="album picture" />
            <h3>{playlist.name}</h3>
            <div className="playlistDescription">{playlist.description}</div>
            {playlist?.song?.map((songName) => (
              <h3>{songName.title}</h3>
            ))}
            <h3>{playlist?.user?.name || 'No user'}</h3>

            <button
              onClick={() => {
                if (!editItem ? setEditItem(true) : setEditItem(false)) editItemInput.current.focus();
                setEditData(playlist);
              }}
              className="adminPlaylistButton"
              type="button"
            >
              Update
            </button>
            <button onClick={() => handleDeleteItem(playlist._id)} className="adminPlaylistButton" type="button">
              Delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default PlaylistCategory;
