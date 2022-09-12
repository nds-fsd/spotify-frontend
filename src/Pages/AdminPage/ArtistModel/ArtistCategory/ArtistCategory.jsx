import { useEffect } from 'react';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import './ArtistCategory.css';
import CreateArtistForm from '../CreateArtistForm/CreateArtistForm';
import EditArtistForm from '../EditArtistForm/EditArtistForm';

const ArtistCategory = () => {
  const {
    searchText,
    albums,
    setAlbums,
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
    const query = {};
    if (searchText !== '') {
      query.search = searchText;
    }
    api('GET', 'artist', {}, query).then((data) => {
      setArtist(data);
      setRefresh(false);
    });
  }, [refresh, searchText]);

  useEffect(() => {
    if (refresh) {
      api('GET', 'album', {}, {}).then((data) => {
        setAlbums(data);
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
          setEditItem(false);
        }}
        className="addArtistButton"
        type="button"
      >
        ADD NEW +
      </button>
      {createItem && <CreateArtistForm albums={albums} setCreateItem={setCreateItem} setArtist={setArtist} />}
      {editItem && <EditArtistForm editData={editData} albums={albums} setEditItem={setEditItem} />}

      {artist?.map((a) => (
        <div className="artistCategoryContainer">
          <h3 className="header">{a.name}</h3>
          <img className="artistPhoto" src={a?.photo} alt="artist picture" />
          <h3 className="bio">{a.bio}</h3>
          <h3 className="header">{a.monthlyUsers}</h3>

          <div className="albumList">
            {a?.albums?.map((albumName) => (
              <li className="artistAlbums">{albumName?.name || 'No albums'}</li>
            ))}
          </div>

          <button
            onClick={() => {
              if (!editItem ? setEditItem(true) : setEditItem(false)) editItemInput.current.focus();
              setCreateItem(false);
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
      ))}
    </div>
  );
};

export default ArtistCategory;
