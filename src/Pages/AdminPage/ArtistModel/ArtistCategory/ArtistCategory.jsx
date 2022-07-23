import { useEffect, useState } from 'react';
import { useModal, useModalEdit } from '../../../../Components/Modals/cardModal/useModal';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './ArtistCategory.css';
import CreateArtistForm from '../CreateArtistForm/CreateArtistForm';
import EditArtistForm from '../EditArtistForm/EditArtistForm';

const ArtistCategory = ({ name, bio, monthlyUsers, albums }) => {
  const { artist, setArtist, refresh, setRefresh } = useListContext();
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenEdit, openModalEdit, closeModalEdit] = useModalEdit(false);
  const [editArtist, setEditArtist] = useState({});

  useEffect(() => {
    if (refresh) {
      api('GET', 'artist', {}, {}).then((data) => {
        console.log(data);
        setArtist(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `artist/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  console.log('editArtist', artist);

  return (
    <div className="categoryContainer">
      <div>
        <span className="categoryTitle">ARTISTS</span>
        <button onClick={openModal} className="addButton" type="button">
          +
          <CreateArtistForm
            isOpen={isOpen}
            closeModal={closeModal}
            name={name}
            bio={bio}
            monthlyUsers={monthlyUsers}
            albums={albums}
          />
        </button>
      </div>

      {artist?.map((a) => (
        <>
          <div className="artistCategoryContainer">
            <h3>{a.name}</h3>
            <h3 className="bio">{a.bio}</h3>
            <h3>{a.monthlyUsers}</h3>
            {a.albums.map((album) => (
              <h3>{album.name}</h3>
            ))}

            <button
              onClick={() => {
                setEditArtist(a);
                openModalEdit();
              }}
              className="adminButton"
              type="button">
              Edit
            </button>
            <button onClick={() => handleDeleteItem(a._id)} className="adminButton" type="button">
              Delete
            </button>
          </div>
        </>
      ))}
      {isOpenEdit && <EditArtistForm isOpenEdit={isOpenEdit} closeModalEdit={closeModalEdit} editArtist={editArtist} />}
    </div>
  );
};

export default ArtistCategory;
