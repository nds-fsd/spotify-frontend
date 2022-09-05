import { useEffect } from 'react';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './PlaylistCategory.css';
import PlaylistEditForm from '../PlaylistEditForm/PlaylistEditForm';
import PlaylistCreateForm from '../PlaylistCreateForm/PlaylistCreateForm';

const PlaylistCategory = () => {
  const {
    searchText,
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
    const query = {};
    if (searchText !== '') {
      query.search = searchText;
    }
    api('GET', 'playlist', {}, query).then((data) => {
      console.log(data);
      setPlaylists(data);
      setRefresh(false);
    });
  }, [refresh, searchText]);

  useEffect(() => {
    if (refresh) {
      api('GET', 'songs', {}, {}).then((data) => {
        setSongs(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  useEffect(() => {
    if (refresh) {
      api('GET', 'user', {}, {}).then((data) => {
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
          setEditItem(false);
        }}
        className="addPlaylistButton"
        type="button"
      >
        ADD NEW +
      </button>
      {createItem && (
        <PlaylistCreateForm songs={songs} users={users} setPlaylists={setPlaylists} setCreateItem={setCreateItem} />
      )}
      {editItem && <PlaylistEditForm editData={editData} songs={songs} users={users} setEditItem={setEditItem} />}

      {playlists?.map((playlist) => (
        <>
          <div className="playlistCategoryContainer">
            <img className="playlistPhoto" src={playlist?.photo} alt="album picture" />
            <h3 className="playlistHeaders">{playlist?.name}</h3>
            <div className="playlistDescription">{playlist?.description}</div>
            <div className="songList">
              {playlist?.songs?.map((songName) => (
                <li className="playlistSongs">{songName?.title || 'No Songs'}</li>
              ))}
            </div>

            <h3 className="playlistHeaders">{playlist?.user?.name || 'No user'}</h3>

            <button
              onClick={() => {
                if (!editItem ? setEditItem(true) : setEditItem(false)) editItemInput.current.focus();
                setEditData(playlist);
                setCreateItem(false);
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
