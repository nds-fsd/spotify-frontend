import './CreateAlbumForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const CreateAlbumForm = ({ artist, setCreateItem, setAlbums }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await api('POST', 'album', {
      body: {
        name: data.name,
        photo: data.photo,
        releaseYear: data.releaseYear,
        artist: data.artist,
        songs: data.songs,
      },
    });
    setAlbums((albumList) => [...albumList, data]);
    setCreateItem(false);
    reset();
  };

  return (
    <div className="mainContainer">
      <form className="albumCreateInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="albumCreateFormInput">
          <label className="albumLabel">Name</label>
          &nbsp;
          <input
            className="albumInput"
            {...register('name', {
              required: true,
            })}
            type="text"
          />
          <label className="albumLabel">Photo</label>
          &nbsp;
          <input
            className="albumInput"
            {...register('photo', {
              required: true,
            })}
            type="text"
          />
          <label className="releaseYearLabel">Year</label>
          &nbsp;
          <input
            className="albumreleaseYearInput"
            {...register('releaseYear', {
              required: true,
            })}
            type="number"
          />
          &nbsp;
          <label className="albumLabel">Artist</label>
          <select
            {...register('artist', {
              required: true,
            })}
          >
            {artist?.map((a) => (
              <option value={a?._id}>{a?.name}</option>
            ))}
          </select>
          <input className="albumCreateButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default CreateAlbumForm;
