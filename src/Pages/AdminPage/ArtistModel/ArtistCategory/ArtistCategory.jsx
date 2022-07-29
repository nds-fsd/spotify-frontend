import { useEffect } from 'react';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './ArtistCategory.css';
import CreateArtistForm from '../CreateArtistForm/CreateArtistForm';
import EditArtistForm from '../EditArtistForm/EditArtistForm';

const ArtistCategory = () => {
  const {
    artist,
    setArtist,
    refresh,
    setRefresh,
    createItemInput,
    editItemInput,
    setCreateItem,
    createItem,
    editItem,
    setEditItem,
    editData,
    setEditData,
  } = useListContext();

  useEffect(() => {
    if (refresh) {
      api('GET', 'artist', {}, {}).then((data) => {
        console.log(data);
        setArtist(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `artist/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  return (
    <div>
      <span className="artistsCategoryTitle">ARTISTS</span>
      <button
        onClick={() => {
          if (!createItem ? setCreateItem(true) : setCreateItem(false)) createItemInput.current.focus();
        }}
        className="addArtistButton"
        type="button"
      >
        ADD NEW +
      </button>
      {createItem && <CreateArtistForm />}
      {editItem && <EditArtistForm editData={editData} />}

      {artist?.map((a) => (
        <>
          <div className="artistCategoryContainer">
            <h3>{a.name}</h3>
            <h3 className="bio">{a.bio}</h3>
            <h3>{a.monthlyUsers}</h3>

            <div className="albumList">
              {a.albums.map((album) => (
                <li className="artistAlbums">{album.name || 'No albums'}</li>
              ))}
            </div>

            <button
              onClick={() => {
                if (!editItem ? setEditItem(true) : setEditItem(false)) editItemInput.current.focus();
                setEditData(a);
              }}
              className="artistAdminButton"
              type="button"
            >
              Update
            </button>
            <button onClick={() => handleDeleteItem(a._id)} className="artistAdminButton" type="button">
              Delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default ArtistCategory;
