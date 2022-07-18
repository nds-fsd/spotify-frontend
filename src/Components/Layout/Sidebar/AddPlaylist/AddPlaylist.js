import './AddPlaylist.css';
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import { useRef, useState } from 'react';
import { createList } from '../../../../Api/utils';

const AddNamePlaylist = () => {
  const addPlaylistInput = useRef(null);
  const [addPlayist, setAddPlaylist] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setAddPlaylist(false);
    createList(data);
    reset();
  };

  return (
    <>
      <div className="container-Icon">
        <AddIcon />
        <button
          type="button"
          onClick={() => {
            if (!addPlayist ? setAddPlaylist(true) : setAddPlaylist(false)) addPlaylistInput.current.focus();
          }}
          className="button-daown">
          Add Playlist
        </button>
      </div>
      {addPlayist && (
        <div className="container-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              ref={addPlaylistInput}
              type="text"
              {...register('name')}
              placeholder="Add the name of the playlist"
              className="playlist-add"
            />
            <button type="submit" className="button-add">
              Crear
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddNamePlaylist;
