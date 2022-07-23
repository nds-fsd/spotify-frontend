import './EditArtistForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const EditArtistForm = ({ isOpenEdit, closeModalEdit, artist, albums, editArtist }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editArtist?.name,
      bio: editArtist?.bio,
      monthlyUsers: editArtist?.monthlyUsers,
      albums: editArtist.albums,
    },
  });

  const onSubmit = (updateData) => {
    console.log('aaa', updateData, editArtist?._id);
    api('PATCH', `artist/${editArtist?._id}`, { body: updateData }, {}).then(() => {
      closeModalEdit();
    });
  };

  return (
    <>
      <div className={`modalsongedit ${isOpenEdit && 'isopentoedit'}`}>
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
            <label>Biography</label>
            &nbsp;
            <input
              {...register('bio', {
                required: true,
              })}
              type="text"
            />
            <label>Monthly Users</label>
            &nbsp;
            <input
              {...register('monthlyUsers', {
                required: true,
              })}
              type="number"
            />
            &nbsp;
            <select
              name="Albums"
              {...register('albums', {
                required: true,
              })}>
              {editArtist.albums.map((a) => (
                <option value="Album">{a.name}</option>
              ))}
            </select>
            <input className="editButton" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditArtistForm;
