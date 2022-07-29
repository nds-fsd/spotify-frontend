import './PlaylistCreateForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const PlaylistCreateForm = ({ refresh, song, setSong, setRefresh, user, setUser }) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (refresh) {
      api('GET', `playlist/${song._id}`, {}, {}).then((data) => {
        setSong(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  useEffect(() => {
    if (refresh) {
      api('GET', `playlist/${user._id}`, {}, {}).then((data) => {
        setUser(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const onSubmit = async (data) => {
    console.log(data);
    await api('POST', 'playlist', {
      body: {
        name: data.name,
        photo: data.photo,
        description: data.description,
        song: data.song,
        user: data.user,
      },
    });
  };

  return (
    <div className="mainContainer">
      <form className="playlistCreateInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="playlistCreateFormInput">
          <label className="playlistLabel">Name</label>
          &nbsp;
          <input
            className="playlistInput"
            {...register('name', {
              required: true,
            })}
            type="text"
          />
          <label className="playlistLabel">Photo</label>
          &nbsp;
          <input
            className="playlistInput"
            {...register('bio', {
              required: true,
            })}
            type="text"
          />
          <label className="descriptionPlaylistLabel">Description</label>
          &nbsp;
          <textarea
            className="playlistInput"
            {...register('description', {
              required: true,
            })}
            type="text"
          />
          &nbsp;
          <label className="playlistLabel">Songs</label>
          <input
            className="playlistInput"
            {...register('song', {
              required: true,
            })}
            type="text"
          />
          <label className="playlistLabel">Users</label>
          &nbsp;
          <input
            className="playlistInput"
            {...register('user', {
              required: true,
            })}
            type="text"
          />
          <input className="playlistCreateButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

// y si son varios albums??

export default PlaylistCreateForm;
