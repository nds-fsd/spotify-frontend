import './PlaylistCreateForm.css';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const PlaylistCreateForm = ({ songs, users, setPlaylists, setCreateItem }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await api('POST', 'playlist', {
      body: {
        name: data.name,
        photo: data.photo,
        description: data.description,
        song: data.song,
        user: data.user,
      },
    });
    setPlaylists((playList) => [...playList, data]);
    reset();
    setCreateItem(false);
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
            {...register('photo', {
              required: true,
            })}
            type="text"
          />
          <label className="playlistLabel">Description</label>
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
          <select
            {...register('song', {
              required: true,
            })}
          >
            {songs?.map((s) => (
              <option value={s?._id}>{s?.title}</option>
            ))}
          </select>
          <label className="playlistLabel">Users</label>
          <select
            className="selectUser"
            {...register('user', {
              required: true,
            })}
          >
            {users?.map((user) => (
              <option value={user?._id}>{user?.name}</option>
            ))}
          </select>
          <input className="playlistCreateButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default PlaylistCreateForm;
