import './CreateAlbumForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const CreateAlbumForm = ({ isOpen, closeModal, refresh, artist, setArtist, setRefresh }) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (refresh) {
      api('GET', `artist/${artist._id}`, {}, {}).then((data) => {
        setArtist(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const onSubmit = async (data) => {
    console.log(data);
    await api('POST', 'album', {
      body: {
        name: data.name,
        photo: data.photo,
        releaseYear: data.releaseYear,
        artist: data.artist,
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
          <label>Photo</label>
          &nbsp;
          <input
            {...register('photo', {
              required: true,
            })}
            type="text"
          />
          <label>Release Year</label>
          &nbsp;
          <input
            {...register('releaseYear', {
              required: true,
            })}
            type="number"
          />
          &nbsp;
          <label>Artist</label>
          <input
            {...register('artist', {
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

export default CreateAlbumForm;
