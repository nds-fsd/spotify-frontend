import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const EditAlbumForm = ({ editData, artist, setEditItem }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: editData?.name,
      photo: editData?.photo,
      releaseYear: editData?.releaseYear,
      artist: editData?.artist,
    },
  });

  const onSubmit = (updateData) => {
    api('PATCH', `album/${editData?._id}`, { body: updateData }, {}).then(() => {});
    reset();
    setEditItem(false);
  };

  return (
    <>
      <div className="mainContainer">
        <form className="albumCreateInputContainer" onSubmit={handleSubmit(onSubmit)}>
          <div className="albumCreateFormInput">
            <label className="albumLabel">Name</label>
            &nbsp;
            <input
              className="albumInput"
              {...register('name', {
                required: true,
              })}
              type="text"
            />
            <label className="albumLabel">Photo</label>
            &nbsp;
            <input
              className="albumInput"
              {...register('photo', {
                required: true,
              })}
              type="text"
            />
            <label className="releaseYear">Release Year</label>
            &nbsp;
            <input
              className="albumreleaseYearInput"
              {...register('releaseYear', {
                required: true,
              })}
              type="number"
            />
            &nbsp;
            <label className="albumLabel">Artist</label>
            <select
              {...register('artist', {
                required: true,
              })}
            >
              {artist?.map((a) => (
                <option value={a?._id}>{a?.name}</option>
              ))}
            </select>
            <input className="albumCreateButton" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditAlbumForm;
