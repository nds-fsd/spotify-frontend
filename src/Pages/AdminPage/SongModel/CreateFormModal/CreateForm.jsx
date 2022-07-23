import './CreateForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const CreateForm = ({ isOpen, closeModal, refresh, setRefresh, artist, setArtist, editSong }) => {
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
    await api('POST', 'songs', {
      body: {
        title: data.title,
        artist: data.artist,
        photo: data.photo,
        duration: data.duration,
        genre: data.genre,
        releaseDate: data.releaseDate,
      },
    });
    closeModal();
  };

  return (
    <div className={`modalsong ${isOpen && 'isopen'}`} onClick={closeModal}>
      <form className="createInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="createFormInput">
          <label>Title</label>
          &nbsp;
          <input
            {...register('title', {
              required: true,
            })}
            type="text"
          />
          {/* <select
            name="Artist"
            {...register('artist', {
              required: true,
            })}>
            {editSong.artist.map((a) => (
              <option value="Album">{a.name}</option>
            ))}
          </select> */}
          <label>Artist</label>
          &nbsp;
          <input
            {...register('artist', {
              required: true,
            })}
            type="text"
          />
          <label>Photo</label>
          &nbsp;
          <input
            {...register('photo', {
              required: false,
            })}
            type="text"
            alt="song photo"
          />
          <label>Duration</label>
          &nbsp;
          <input
            {...register('duration', {
              required: true,
            })}
            type="number"
          />
          <label>Genre</label>
          &nbsp;
          <input
            {...register('genre', {
              required: true,
            })}
            type="text"
          />
          <label>Release Date</label>
          &nbsp;
          <input
            {...register('releaseDate', {
              required: true,
            })}
            type="date"
          />
          <input className="createButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default CreateForm;
