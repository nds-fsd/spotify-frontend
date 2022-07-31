import './EditArtistForm.css';
import { useForm } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import api from '../../../../Utils/api';

const EditArtistForm = ({ editData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editData?.name,
      bio: editData?.bio,
      monthlyUsers: editData?.monthlyUsers,
      albums: editData.albums,
    },
  });

  const onSubmit = (updateData) => {
    console.log('aaa', updateData, editData?._id);
    api('PATCH', `artist/${editData?._id}`, { body: updateData }, {}).then(() => {});
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
          <select
            className="artistAlbumSelect"
            value="Albums"
            {...register('albums', {
              required: true,
            })}
          >
            {editData.albums.map((a) => (
              <option value="Album">{a.name}</option>
            ))}
          </select>
          <input className="artistCreateButton" type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default EditArtistForm;
