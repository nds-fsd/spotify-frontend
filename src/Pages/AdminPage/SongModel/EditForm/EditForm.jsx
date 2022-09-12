import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const EditForm = ({ editData, artist, genres, setEditItem, setRefresh }) => {
  const { register, handleSubmit, reset } = useForm({
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

  const onSubmit = (updateData) => {
    api('PATCH', `songs/${editData?._id}`, { body: updateData }, {}).then(() => {});
    reset();
    setEditItem(false);
    setRefresh(true);
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
          <select
            {...register('genre', {
              required: true,
            })}
          >
            {genres?.map((genre) => (
              <option value={genre?._id}>{genre?.name}</option>
            ))}
          </select>
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
