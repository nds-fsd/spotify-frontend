import './CreateArtistForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const CreateArtistForm = ({ isOpen, closeModal, refresh, album, setAlbum, setRefresh }) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (refresh) {
      api('GET', `album/${album._id}`, {}, {}).then((data) => {
        setAlbum(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const onSubmit = async (data) => {
    console.log(data);
    await api('POST', 'artist', {
      body: {
        name: data.name,
        bio: data.bio,
        monthlyUsers: data.monthlyUsers,
        albums: data.albums,
      },
    });
    closeModal();
  };

  return (
    <div className={`modalsong ${isOpen && 'isopen'}`} onClick={closeModal}>
      <form className="createInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="createFormInput">
          <label>Name</label>
          &nbsp;
          <input
            {...register('name', {
              required: true,
            })}
            type="text"
          />
          <label>Biography</label>
          &nbsp;
          <input
            {...register('bio', {
              required: true,
            })}
            type="text"
          />
          <label>Monthly Users</label>
          &nbsp;
          <input
            {...register('monthlyUsers', {
              required: true,
            })}
            type="number"
          />
          &nbsp;
          <label>Albums</label>
          <input
            {...register('albums', {
              required: true,
            })}
            type="text"
          />
          <input className="createButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

// y si son varios albums??

export default CreateArtistForm;
