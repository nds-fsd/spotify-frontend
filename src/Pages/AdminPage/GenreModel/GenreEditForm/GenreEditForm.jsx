import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const GenreEditForm = ({ editData, setEditItem }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: editData?.name,
      photo: editData?.photo,
      description: editData.description,
    },
  });

  const onSubmit = (updateData) => {
    console.log('updateData', updateData, editData?._id);
    api('PATCH', `genre/${editData?._id}`, { body: updateData }, {}).then(() => {});
    reset();
    setEditItem(false);
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
