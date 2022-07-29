import './GenreEditForm.css';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const GenreEditForm = ({ editData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editData?.name,
      photo: editData?.photo,
      description: editData.description,
    },
  });

  //   traigo editGenres del genreCategory, esto me extra todas los eleementos y sus valores dentro del map que hice

  const onSubmit = (updateData) => {
    console.log('updateData', updateData, editData?._id);
    api('PATCH', `genre/${editData?._id}`, { body: updateData }, {}).then(() => {});

    // setRefresh(true);
  };

  return (
    <div className="mainContainer">
      <form className="genreCreateInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="genreCreateFormInput">
          <label className="genreLabel">Name</label>
          &nbsp;
          <input
            className="genreInput"
            {...register('name', {
              required: true,
            })}
            type="text"
          />
          <label className="genreLabel">Photo</label>
          &nbsp;
          <input
            className="genreInput"
            {...register('photo', {
              required: true,
            })}
            type="text"
          />
          <label className="descriptionLabel">Description</label>
          &nbsp;
          <textarea
            className="descriptionInput"
            {...register('description', {
              required: true,
            })}
            type="text"
          />
          <input className="genreCreateButton" type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default GenreEditForm;
