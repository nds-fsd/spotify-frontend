import './PlaylistCreateForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const PlaylistCreateForm = ({ songs, users }) => {
  const { register, handleSubmit } = useForm();

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
          <label className="songLabel">Songs</label>
          <select
            {...register('song', {
              required: true,
            })}
          >
            {songs?.map((s) => (
              <option value={s?._id}>{s?.title}</option>
            ))}
            {console.log('artistas', songs)}
          </select>
          <label className="songLabel">Users</label>
          <select
            {...register('song', {
              required: true,
            })}
          >
            {users?.map((user) => (
              <option value={user?._id}>{user?.name}</option>
            ))}
            {console.log('artistas', songs)}
          </select>
          <input className="playlistCreateButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

// y si son varios albums??

export default PlaylistCreateForm;
