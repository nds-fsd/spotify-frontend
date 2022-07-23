import './PlaylistEditForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const PlaylistEditForm = ({ isOpenEdit, closeModalEdit, editPlaylist }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editPlaylist?.name,
      photo: editPlaylist?.photo,
      description: editPlaylist?.description,
      song: editPlaylist.song,
      user: editPlaylist.user,
    },
  });

  const onSubmit = (updateData) => {
    console.log('aaa', updateData, editPlaylist?._id);
    api('PATCH', `playlist/${editPlaylist?._id}`, { body: updateData }, {}).then(() => {
      closeModalEdit();
    });
  };

  return (
    <div className={`modalsongedit ${isOpenEdit && 'isopentoedit'}`} onClick={closeModalEdit}>
      <form className="editInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="editFormInput">
          <label>Name</label>
          &nbsp;
          <input
            {...register('name', {
              required: true,
            })}
            type="text"
          />
          <label>Photo</label>
          &nbsp;
          <input
            {...register('bio', {
              required: true,
            })}
            type="text"
          />
          <label>Description</label>
          &nbsp;
          <input
            {...register('description', {
              required: true,
            })}
            type="text"
          />
          &nbsp;
          <select
            name="Songs"
            {...register('song', {
              required: true,
            })}>
            {editPlaylist.song.map((songName) => (
              <option value="Songs">{songName.title}</option>
            ))}
          </select>
          <select
            name="Users"
            {...register('user', {
              required: true,
            })}>
            {editPlaylist.user.map((userName) => (
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
          <input className="createButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default PlaylistEditForm;
