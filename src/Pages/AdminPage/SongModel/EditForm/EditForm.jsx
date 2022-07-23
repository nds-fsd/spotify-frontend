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
    <>
      <div className={`modalsongedit ${isOpenEdit && 'isopentoedit'}`}>
        <form className="editInputContainer" onSubmit={handleSubmit(onSubmit)}>
          <div className="editFormInput">
            <label>Title</label>
            &nbsp;
            <input
              {...register('title', {
                required: true,
              })}
              type="text"
            />
            {/* <label>Artist</label>
            &nbsp; */}
            {/* <input
              {...register('artist', {
                required: true,
              })}
             value="Artist">{editSong?.artist?.name}
            /> */}
            <label>Artist</label>
            &nbsp;
            <input
              {...register('artist', {
                required: true,
              })}
              type="text"
            />
            <label>Photo</label>
            &nbsp;
            <input
              {...register('photo', {
                required: false,
              })}
              type="text"
              alt="song photo"
            />
            <label>Duration</label>
            &nbsp;
            <input
              {...register('duration', {
                required: true,
              })}
              type="number"
            />
            <label>Genre</label>
            &nbsp;
            <input
              {...register('genre', {
                required: true,
              })}
              type="text"
            />
            <label>Release Date</label>
            &nbsp;
            <input
              {...register('releaseDate', {
                required: true,
              })}
              type="date"
            />
            <input className="editButton" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditForm;
