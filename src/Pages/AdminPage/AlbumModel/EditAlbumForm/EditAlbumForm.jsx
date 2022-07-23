import './EditAlbumForm.css';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const EditAlbumForm = ({ isOpenEdit, closeModalEdit, editAlbum }) => {
  // console.log('artist', artist);
  // console.log(editAlbum);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editAlbum?.name,
      photo: editAlbum?.photo,
      releaseYear: editAlbum?.releaseYear,
      artist: editAlbum?.artist,
    },
  });

  const onSubmit = (updateData) => {
    console.log('updateData', updateData, editAlbum?._id);
    api('PATCH', `album/${editAlbum?._id}`, { body: updateData }, {}).then(() => {
      closeModalEdit();
    });

    // setRefresh(true);
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
            <label>Photo</label>
            &nbsp;
            <input
              {...register('photo', {
                required: true,
              })}
              type="text"
            />
            <label>Release Year</label>
            &nbsp;
            <input
              {...register('releaseYear', {
                required: true,
              })}
              type="number"
            />
            &nbsp;
            <label>Artist</label>
            &nbsp;
            <input
              {...register('artist', {
                required: true,
              })}
              type="text"
            />
            <input className="editButton" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditAlbumForm;
