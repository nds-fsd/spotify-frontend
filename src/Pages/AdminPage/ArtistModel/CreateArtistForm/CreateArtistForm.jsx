import './CreateArtistForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const CreateArtistForm = ({ albums }) => {
  const { register, handleSubmit } = useForm();

  // useEffect(() => {
  //   if (refresh) {
  //     api('GET', `album/${album._id}`, {}, {}).then((data) => {
  //       setAlbum(data);
  //       setRefresh(false);
  //     });
  //   }
  // }, [refresh]);

  const onSubmit = async (data) => {
    console.log(data);
    await api('POST', 'artist', {
      body: {
        name: data.name,
        bio: data.bio,
        monthlyUsers: data.monthlyUsers,
        albums: data.albums,
      },
    });
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
          <input
            className="artistInput"
            {...register('bio', {
              required: true,
            })}
            type="text"
          />
          <label className="artistLabel">Monthly Users</label>
          &nbsp;
          <input
            className="artistInput"
            {...register('monthlyUsers', {
              required: true,
            })}
            type="number"
          />
          &nbsp;
          {/* <label className="artistLabel">Albums</label>
          <input
            className="artistInput"
            {...register('albums', {
              required: true,
            })}
            type="text"
          /> */}
          <label className="artistLabel">Albums</label>
          <select
            {...register('album', {
              required: true,
            })}
          >
            {albums?.map((albumName) => (
              <option value={albumName?._id}>{albumName?.name}</option>
            ))}
            {console.log('albums', albums)}
          </select>
          <input className="createButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

// y si son varios albums??

export default CreateArtistForm;
