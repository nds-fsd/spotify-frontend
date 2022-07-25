import './EditForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const EditForm = ({ isOpenEdit, closeModalEdit, song, editSong }) => {
  console.log('song', editSong.title);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: editSong?.title,
      artist: editSong.artist?.name,
      photo: editSong?.photo,
      duration: editSong.duration,
      genre: editSong.genre,
      releaseDate: editSong.releaseDate,
    },
  });

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
    console.log('aaa', updateData, editSong?._id);
    api('PATCH', `songs/${editSong?._id}`, { body: updateData }, {}).then(() => {});
    closeModalEdit();
    // setRefresh(true);
  };

  return (
    <div className={`modalsong ${isOpenEdit && 'isopen'}`} onClick={closeModalEdit}>
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
