import './GenreEditForm.css';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const GenreEditForm = ({ isOpenEdit, closeModalEdit, editGenre }) => {
  // console.log('artist', artist);
  // console.log(editAlbum);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editGenre?.name,
      photo: editGenre?.photo,
      description: editGenre.description,
    },
  });

  //   traigo editGenres del genreCategory, esto me extra todas los eleementos y sus valores dentro del map que hice

  const onSubmit = (updateData) => {
    console.log('updateData', updateData, editGenre?._id);
    api('PATCH', `genre/${editGenre?._id}`, { body: updateData }, {}).then(() => {
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
            <label>Description</label>
            &nbsp;
            <input
              {...register('description', {
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

export default GenreEditForm;
