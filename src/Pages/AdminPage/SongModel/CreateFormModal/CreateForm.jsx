import './CreateForm.css';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import api from '../../../../Utils/api';

const CreateForm = ({ artist }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await api('POST', 'songs', {
      body: {
        title: data.title,
        artist: data.artist,
        photo: data.photo,
        duration: data.duration,
        genre: data.genre,
        soundUrl: data.soundUrl,
        releaseYear: data.releaseYear,
      },
    });
    reset();
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="mainContainer">
      <form className="songCreateInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="songCreateFormInput">
          <label className="songLabel">Title</label>
          &nbsp;
          <input
            className="songInput"
            {...register('title', {
              required: true,
            })}
            type="text"
          />
          <label className="songLabel">Artist</label>
          <select
            {...register('artist', {
              required: true,
            })}
          >
            {/* {songs.map((s) => (
              <option value={s?._id}>{s?.artist?.name}</option>
            ))}
          </select> */}
            {artist?.map((a) => (
              <option value={a?._id}>{a?.name}</option>
            ))}
            {console.log('artistas', artist)}
          </select>
          {/* <label className="songLabel">Artist</label>
          &nbsp;
          <input
            className="songInput"
            {...register('artist', {
              required: true,
            })}
            type="text"
          /> */}
          <label className="songLabel">Photo</label>
          &nbsp;
          <input
            className="songInput"
            {...register('photo', {
              required: false,
            })}
            type="text"
            alt="song photo"
          />
          <label className="songLabel">Duration</label>
          &nbsp;
          <input
            className="songInput"
            {...register('duration', {
              required: true,
            })}
            type="number"
          />
          <label className="songLabel">Genre</label>
          &nbsp;
          <input
            className="songInput"
            {...register('genre', {
              required: true,
            })}
            type="text"
          />
          <label className="songLabel">Url</label>
          &nbsp;
          <input
            className="songInput"
            {...register('photo', {
              required: false,
            })}
            type="text"
            alt="song photo"
          />
          <label className="songLabel">Release Year</label>
          &nbsp;
          <input
            className="releaseDateInput"
            {...register('releaseYear', {
              required: true,
            })}
            type="number"
          />
          <input className="songCreateButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default CreateForm;
