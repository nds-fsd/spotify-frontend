import './AddPlaylist.css';
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import { useRef, useState } from 'react';
import { createList } from '../../../../Api/utils';
import api from '../../../../Utils/api';

const AddNamePlaylist = () => {
  const addPlaylistInput = useRef(null);
  const [addPlayist, setAddPlaylist] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    api('POST', 'playlist', {
      body: {
        name: data.name,
      },
    });
    reset();
    setAddPlaylist(false);
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
          className="button-daown"
        >
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
              placeholder="Name your playlist"
              className="playlist-add"
            />
            <button type="submit" className="button-add">
              Add
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddNamePlaylist;
