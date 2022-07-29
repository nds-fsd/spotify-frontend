import './CreateAlbumForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const CreateAlbumForm = ({ refresh, artist, setArtist, setRefresh }) => {
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
          <label className="releaseYear">Release Year</label>
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
          &nbsp;
          <input
            className="albumInput"
            {...register('artist', {
              required: true,
            })}
            type="text"
          />
          <input className="albumCreateButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default CreateAlbumForm;
