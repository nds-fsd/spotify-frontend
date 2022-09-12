import './GenreCreateForm.css';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const GenreCreateForm = ({ setCreateItem, setGenres }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await api('POST', 'genre', {
      body: {
        name: data.name,
        photo: data.photo,
        description: data.description,
      },
    });
    setGenres((genreList) => [...genreList, data]);
    setCreateItem(false);
    reset();
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
          <input className="genreCreateButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default GenreCreateForm;
