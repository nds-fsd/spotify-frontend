import './EditForm.css';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const EditForm = ({ editData, artist }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: editData?.title,
      artist: editData?.artist?.name,
      photo: editData?.photo,
      duration: editData?.duration,
      genre: editData?.genre,
      songUrl: editData?.songUrl,
      releaseYear: editData?.releaseYear,
    },
  });
  console.log('editData', editData);

  const onSubmit = (updateData) => {
    api('PATCH', `songs/${editData?._id}`, { body: updateData }, {}).then(() => {});

    // setRefresh(true);
  };

  return (
    <div className="mainEditContainer">
      <form className="songCreateInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="songCreateFormInput">
          <label className="songLabel">Title</label>
          &nbsp;
          <input
            className="songInput"
            {...register('title', {
              required: true,
            })}
            type="text"
          />
          <label className="songLabel">Artist</label>
          <select
            {...register('artist', {
              required: true,
            })}
          >
            {artist?.map((a) => (
              <option value={a?._id}>{a?.name}</option>
            ))}
            {console.log('artistas', artist)}
          </select>
          <label className="songLabel">Photo</label>
          &nbsp;
          <input
            className="songInput"
            {...register('photo', {
              required: false,
            })}
            type="text"
            alt="song photo"
          />
          <label className="songLabel">Duration</label>
          &nbsp;
          <input
            className="songInput"
            {...register('duration', {
              required: true,
            })}
            type="number"
          />
          <label className="songLabel">Genre</label>
          &nbsp;
          <input
            className="songInput"
            {...register('genre', {
              required: true,
            })}
            type="text"
          />
          <label className="songLabel">Url</label>
          &nbsp;
          <input
            className="songInput"
            {...register('photo', {
              required: false,
            })}
            type="text"
            alt="song photo"
          />
          <label className="songLabel">Release Year</label>
          &nbsp;
          <input
            className="releaseDateInput"
            {...register('releaseYear', {
              required: true,
            })}
            type="number"
          />
          <input className="songCreateButton" type="submit" value="Update" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default EditForm;
