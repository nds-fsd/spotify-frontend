import { useEffect } from 'react';
import CreateAlbumForm from '../CreateAlbumForm/CreateAlbumForm';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './AlbumCategory.css';
import EditAlbumForm from '../EditAlbumForm/EditAlbumForm';

const AlbumCategory = () => {
  const {
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

  return (
    <div>
      <span className="albumCategoryTitle">ALBUMS</span>
      <button
        onClick={() => {
          if (!createItem ? setCreateItem(true) : setCreateItem(false)) createItemInput.current.focus();
        }}
        className="addAlbumButton"
        type="button"
      >
        ADD NEW +
      </button>
      {createItem && <CreateAlbumForm />}
      {editItem && <EditAlbumForm editData={editData} />}

      {albums.map((albumName) => {
        console.log('albumName', albumName);

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
                  if (!editItem ? setEditItem(true) : setEditItem(false)) editItemInput.current.focus();
                  setEditData(albumName);
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
        );
      })}
    </div>
  );
};

export default AlbumCategory;
