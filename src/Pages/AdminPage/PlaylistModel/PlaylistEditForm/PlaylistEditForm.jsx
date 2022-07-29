import './PlaylistEditForm.css';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const PlaylistEditForm = ({ editData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editData?.name,
      photo: editData?.photo,
      description: editData?.description,
      song: editData?.song,
      user: editData?.user,
    },
  });

  const onSubmit = (updateData) => {
    console.log('aaa', updateData, editData?._id);
    api('PATCH', `playlist/${editData?._id}`, { body: updateData }, {}).then(() => {});
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
          <select
            className="playlistLabel"
            name="Songs"
            {...register('song', {
              required: true,
            })}>
            {editData?.song?.map((songName) => (
              <option value="Songs">{songName.title}</option>
            ))}
          </select>
          <select
            className="playlistLabel"
            name="Users"
            {...register('user', {
              required: true,
            })}>
            {editData?.user?.map((userName) => (
              <option value="Songs">{userName.name}</option>
            ))}
          </select>
          {/* <label>Songs</label>
          <input
            {...register('song', {
              required: true,
            })}
            type="text"
          />
          <label>Users</label>
          &nbsp;
          <input
            {...register('user', {
              required: true,
            })}
            type="text"
          /> */}
          <input className="playlistCreateButton" type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default PlaylistEditForm;
