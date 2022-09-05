import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const EditArtistForm = ({ editData, albums, setEditItem }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: editData?.name,
      photo: editData?.photo,
      bio: editData?.bio,
      monthlyUsers: editData?.monthlyUsers,
      albums: editData.albums,
    },
  });

  const onSubmit = (updateData) => {
    api('PATCH', `artist/${editData?._id}`, { body: updateData }, {}).then(() => {});
    reset();
    setEditItem(false);
  };

  return (
    <div className="mainContainer">
      <form className="artistCreateInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="artistCreateFormInput">
          <label className="artistLabel">Name</label>
          &nbsp;
          <input
            className="artistInput"
            {...register('name', {
              required: true,
            })}
            type="text"
          />
          <label className="artistLabel">Photo</label>
          &nbsp;
          <input
            className="artistInput"
            {...register('photo', {
              required: true,
            })}
            type="text"
            alt="artist photo"
          />
          <label className="artistLabel">Biography</label>
          &nbsp;
          <textarea
            className="artistInput"
            {...register('bio', {
              required: true,
            })}
            type="text"
          />
          <label className="monthlyUserLabel">Monthly Users</label>
          &nbsp;
          <input
            className="artistInput"
            {...register('monthlyUsers', {
              required: true,
            })}
            type="number"
          />
          &nbsp;
          <label className="artistLabel">Albums</label>
          <select
            className="artistAlbumSelect"
            {...register('albums', {
              required: true,
            })}
          >
            {albums?.map((albumName) => (
              <option value={albumName?._id}>{albumName?.name}</option>
            ))}
          </select>
          <input className="artistCreateButton" type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default EditArtistForm;
