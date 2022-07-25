import { useEffect } from 'react';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './SongCategory.css';
import CreateForm from '../CreateFormModal/CreateForm';
import EditForm from '../EditForm/EditForm';

const SongCategory = () => {
  const {
    songs,
    setSongs,
    createItemInput,
    editItemInput,
    refresh,
    setRefresh,
    setCreateItem,
    createItem,
    editItem,
    setEditItem,
  } = useListContext();

  const [editData, setEditData] = [{}];

  useEffect(() => {
    if (refresh) {
      api('GET', 'songs', {}, {}).then((data) => {
        setSongs(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `songs/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  return (
    // <div className="categoryContainer">
    <div>
      <span className="songCategoryTitle">SONGS</span>
      <button
        onClick={() => {
          if (!createItem ? setCreateItem(true) : setCreateItem(false)) createItemInput.current.focus();
        }}
        className="addSongButton"
        type="button">
        ADD NEW +
      </button>
      {createItem && <CreateForm />}
      {editItem && <EditForm editData={editData} />}

      {songs?.map((song) => {
        console.log(song);
        return (
          <>
            <div className="songCategoryContainer">
              <img className="songPhoto" src={song.photo} alt="song picture" />

              <h3 className="songHeaders">{song.title}</h3>
              <h3>{song?.artist?.name || 'No artist'}</h3>
              {/* {s?.artist?.map((artistname) => (
                <h3>{artistname.name}</h3>
              ))} */}
              <h3>{song.duration}</h3>
              <h3>{song.genre}</h3>
              <div className="releaseDate">{song.releaseDate}</div>

              <button
                onClick={() => {
                  if (!editItem ? setEditItem(true) : setEditItem(false)) editItemInput.current.focus();
                  setEditData(song);
                }}
                className="songAdminButton"
                type="button">
                Update
              </button>

              <button onClick={() => handleDeleteItem(song._id)} className="songAdminButton" type="button">
                Delete
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SongCategory;
