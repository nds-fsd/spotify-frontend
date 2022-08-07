import './EditAlbumForm.css';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const EditAlbumForm = ({ editData, artist }) => {
  // console.log('artist', artist);
  // console.log(editAlbum);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editData?.name,
      photo: editData?.photo,
      releaseYear: editData?.releaseYear,
      artist: editData?.artist,
    },
  });

  const onSubmit = (updateData) => {
    console.log('updateData', updateData, editData?._id);
    api('PATCH', `album/${editData?._id}`, { body: updateData }, {}).then(() => {});

    // setRefresh(true);
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
            <input className="albumCreateButton" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditAlbumForm;
