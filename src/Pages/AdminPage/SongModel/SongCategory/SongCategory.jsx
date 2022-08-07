import { useEffect } from 'react';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import styles from './SongCategory.module.css';
import CreateForm from '../CreateFormModal/CreateForm';
import EditForm from '../EditForm/EditForm';

const SongCategory = () => {
  const {
    artist,
    setArtist,
    searchText,
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
    editData,
    setEditData,
  } = useListContext();

  useEffect(() => {
    if (refresh) {
      const query = {};
      if (searchText !== '') {
        query.search = searchText;
      }
      api('GET', 'songs', {}, query).then((data) => {
        setSongs(data);
        setRefresh(false);
      });
    }
  }, [refresh, searchText]);

  useEffect(() => {
    if (refresh) {
      api('GET', 'artist', {}, {}).then((data) => {
        console.log('data', data);
        setArtist(data);
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
    <>
      <div>
        <span className="playlistCategoryTitle">SONGS</span>
        <button
          onClick={() => {
            if (!createItem ? setCreateItem(true) : setCreateItem(false)) createItemInput.current.focus();
          }}
          className={styles.addSongButton}
          type="button"
        >
          ADD NEW +
        </button>
        {createItem && <CreateForm artist={artist} />}
        {editItem && <EditForm editData={editData} artist={artist} />}

        {songs?.map((song) => {
          console.log(song);
          return (
            <>
              <div className={styles.container}>
                <img className={styles.songPhoto} src={song.photo} alt="song picture" />

                <h3 className={styles.songHeaders}>{song.title}</h3>
                <h3>{song?.artist?.name || 'No artist'}</h3>
                <h3>{song.duration}</h3>
                <h3>{song.genre}</h3>
                <h3 className={styles.songUrl}>{song.soundUrl}</h3>
                <div className={styles.releaseYear}>{song.releaseYear}</div>

                <button
                  onClick={() => {
                    if (!editItem ? setEditItem(true) : setEditItem(false)) editItemInput.current.focus();
                    setEditData(song);
                  }}
                  className={styles.songAdminButton}
                  type="button"
                >
                  Update
                </button>

                <button onClick={() => handleDeleteItem(song._id)} className={styles.songAdminButton} type="button">
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SongCategory;
