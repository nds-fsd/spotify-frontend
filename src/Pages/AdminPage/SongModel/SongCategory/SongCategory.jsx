import { useEffect, useState } from 'react';
import CreateForm from '../CreateFormModal/CreateForm';
import { useModal, useModalEdit } from '../../../../Components/Modals/cardModal/useModal';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './SongCategory.css';
import EditForm from '../EditForm/EditForm';

const SongCategory = ({ photo, genre, title, releaseDate, duration, artist }) => {
  const { songs, setSongs, refresh, setRefresh } = useListContext();
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenEdit, openModalEdit, closeModalEdit] = useModalEdit(false);
  const [editSong, setEditSong] = useState({});

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

  console.log('editSong', editSong);
  console.log(songs);

  return (
    // <div className="categoryContainer">
    <div>
      <span className="songCategoryTitle">SONGS</span>
      <button onClick={openModal} className="addSongButton" type="button">
        ADD NEW +
        <CreateForm
          isOpen={isOpen}
          closeModal={closeModal}
          title={title}
          artist={artist}
          genre={genre}
          duration={`${duration}` + `seg`}
          releaseDate={releaseDate}
          photo={photo}
        />
      </button>
      {/* </div> */}

      {songs?.map((s) => {
        console.log(s);
        return (
          <>
            <div className="songCategoryContainer">
              <img className="songPhoto" src={s.photo} alt="song picture" />

              <h3 className="songHeaders">{s.title}</h3>
              <h3>{s?.artist?.name || 'No artist'}</h3>
              {/* {s?.artist?.map((artistname) => (
                <h3>{artistname.name}</h3>
              ))} */}
              <h3>{s.duration}</h3>
              <h3>{s.genre}</h3>
              <div className="releaseDate">{s.releaseDate}</div>
              <button
                onClick={() => {
                  setEditSong(s);
                  openModalEdit();
                }}
                className="songAdminButton"
                type="button">
                Update
              </button>
              <button onClick={() => handleDeleteItem(s._id)} className="songAdminButton" type="button">
                Delete
              </button>
            </div>
          </>
        );
      })}
      {isOpenEdit && <EditForm isOpenEdit={isOpenEdit} closeModalEdit={closeModalEdit} editSong={editSong} />}
    </div>
  );
};

export default SongCategory;
