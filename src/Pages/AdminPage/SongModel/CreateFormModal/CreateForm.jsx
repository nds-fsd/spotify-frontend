import './CreateForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const CreateForm = ({ refresh, setRefresh, artist, setArtist }) => {
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
        soundUrl: data.soundUrl,
        releaseDate: data.releaseDate,
      },
    });
  };

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
          {/* <label className="songLabel">Artist</label> */}
          {/* <select
            name="Artist"
            {...register('artist', {
              required: true,
            })}>
            {artist.map((a) => (
              <option value="Album">{a?.name}</option>
            ))}
          </select> */}
          <label className="songLabel">Artist</label>
          &nbsp;
          <input
            className="songInput"
            {...register('artist', {
              required: true,
            })}
            type="text"
          />
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
          <label className="songLabel">Release Date</label>
          &nbsp;
          <input
            className="releaseDateInput"
            {...register('releaseDate', {
              required: true,
            })}
            type="date"
          />
          <input className="songCreateButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default CreateForm;
