import { useEffect } from 'react';
import CreateAlbumForm from '../CreateAlbumForm/CreateAlbumForm';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './AlbumCategory.css';
import EditAlbumForm from '../EditAlbumForm/EditAlbumForm';

const AlbumCategory = () => {
  const {
    searchText,
    songs,
    setSongs,
    artist,
    setArtist,
    albums,
    setAlbums,
    refresh,
    setRefresh,
    createItemInput,
    editItemInput,
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
    api('GET', 'album', {}, query).then((data) => {
      setAlbums(data);
      setRefresh(false);
    });
  }, [refresh, searchText]);

  useEffect(() => {
    if (refresh) {
      api('GET', 'artist', {}, {}).then((data) => {
        setArtist(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  useEffect(() => {
    if (refresh) {
      api('GET', 'songs', {}, {}).then((data) => {
        setSongs(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `album/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  return (
    <div>
      <span className="albumCategoryTitle">ALBUMS</span>
      <button
        onClick={() => {
          if (!createItem ? setCreateItem(true) : setCreateItem(false)) createItemInput.current.focus();
          setEditItem(false);
        }}
        className="addAlbumButton"
        type="button"
      >
        ADD NEW +
      </button>
      {createItem && (
        <CreateAlbumForm artist={artist} songs={songs} setAlbums={setAlbums} setCreateItem={setCreateItem} />
      )}
      {editItem && <EditAlbumForm editData={editData} artist={artist} songs={songs} setEditItem={setEditItem} />}

      {albums.map((albumName) => (
        <>
          <div className="albumCategoryContainer">
            <img className="albumPhoto" src={albumName.photo} alt="album picture" />

            <h3 className="albumHeaders">{albumName.name}</h3>
            <div className="releaseYear">{albumName.releaseYear}</div>
            <h3 className="albumHeaders">{albumName.artist?.name || 'No Artist'}</h3>
            <div className="songList">
              {albums?.songs?.map((songName) => (
                <li className="albumSongs">{songName?.title || 'No Songs'}</li>
              ))}
            </div>
            <button
              onClick={() => {
                if (!editItem ? setEditItem(true) : setEditItem(false)) editItemInput.current.focus();
                setEditData(albumName);
                setCreateItem(false);
              }}
              className="adminAlbumButton"
              type="button"
            >
              Update
            </button>
            <button onClick={() => handleDeleteItem(albumName._id)} className="adminAlbumButton" type="button">
              Delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default AlbumCategory;
