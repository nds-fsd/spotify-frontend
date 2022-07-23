import './GenreCreateForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const GenreCreateForm = ({ isOpen, closeModal, refresh, setRefresh }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await api('POST', 'genre', {
      body: {
        name: data.name,
        photo: data.photo,
        description: data.description,
      },
    });
    closeModal();
  };

  return (
    <div className={`modalsong ${isOpen && 'isopen'}`} onClick={closeModal}>
      <form className="createInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="createFormInput">
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
          <input className="createButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default GenreCreateForm;
