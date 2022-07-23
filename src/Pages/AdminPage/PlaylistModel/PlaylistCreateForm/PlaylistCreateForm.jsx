import './PlaylistCreateForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const PlaylistCreateForm = ({ isOpen, closeModal, refresh, song, setSong, setRefresh, user, setUser }) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (refresh) {
      api('GET', `playlist/${song._id}`, {}, {}).then((data) => {
        setSong(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  useEffect(() => {
    if (refresh) {
      api('GET', `playlist/${user._id}`, {}, {}).then((data) => {
        setUser(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const onSubmit = async (data) => {
    console.log(data);
    await api('POST', 'playlist', {
      body: {
        name: data.name,
        photo: data.photo,
        description: data.description,
        song: data.song,
        user: data.user,
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
          <label>Songs</label>
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
          />
          <input className="createButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

// y si son varios albums??

export default PlaylistCreateForm;
