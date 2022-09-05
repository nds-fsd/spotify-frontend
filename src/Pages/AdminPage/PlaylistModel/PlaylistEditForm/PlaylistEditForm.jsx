import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const PlaylistEditForm = ({ editData, songs, users, setEditItem }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: editData?.name,
      photo: editData?.photo,
      description: editData?.description,
      song: editData?.song,
      user: editData?.user,
    },
  });

  const onSubmit = (updateData) => {
    api('PATCH', `playlist/${editData?._id}`, { body: updateData }, {}).then(() => {});
    reset();
    setEditItem(false);
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
          <input className="playlistCreateButton" type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default PlaylistEditForm;
