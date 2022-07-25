import './EditForm.css';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const EditForm = ({ editData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: editData?.title,
      artist: editData?.artist?.name,
      photo: editData?.photo,
      duration: editData?.duration,
      genre: editData?.genre,
      releaseDate: editData?.releaseDate,
    },
  });
  console.log('songs', editData);

  // useEffect(() => {
  //   if (refresh) {
  //     api('GET', `artist/`, {}, {}).then((data) => {
  //       setArtist(data);
  //       setRefresh(false);
  //       console.log(artist);
  //     });
  //   }
  // }, [refresh]);

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
          {/* <select
            name="Artist"
            {...register('artist', {
              required: true,
            })}>
            {editSong.artist.map((a) => (
              <option value="Album">{a.name}</option>
            ))}
          </select> */}
          <label className="songLabel">Artist</label>
          &nbsp;
          <input
            className="songInput"
            {...register('artist', {
              required: true,
            })}
            type="text"
          />
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
          <label className="songLabel">Release Date</label>
          &nbsp;
          <input
            className="releaseDateInput"
            {...register('releaseDate', {
              required: true,
            })}
            type="date"
          />
          <input className="songCreateButton" type="submit" value="Update" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default EditForm;
