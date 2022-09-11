import './cards.css';
import { useEffect, useState } from 'react';
import { useModal } from '../../../../Modals/cardModal/useModal';
import api from '../../../../../Utils/api';
import usePlayer from '../../../../../Hooks/use-player';

// import Modal from '../../../../Modals/cardModal/Modal';
// import AddNamePlaylist from '../../../Sidebar/AddPlaylist/AddPlaylist';
// import PlayListName from '../../../Sidebar/AddPlaylist/PlayList/PlayList';

const Cards = ({ photo, genre, title, releaseDate, duration, artist, indexUrl, lin }) => {
  const {
    isPlaying,
    setIndex,
    indexSongs,
    setCountSongs,
    setPlayListSongs,
    playListSongs,
    setPlaying,
    countSongs,
    setFootImg,
    setFootTitle,
  } = usePlayer();

  useEffect(() => {
    setCountSongs(playListSongs[indexSongs].soundUrl);
    setFootImg(playListSongs[indexSongs].photo);
    setFootTitle(playListSongs[indexSongs].title);
    setPlaying(false);
  }, [indexSongs, playListSongs]);
  const [list, setList] = useState([]);
  const [addplaylistIndex, setAddplaylistIndex] = useState();
  const [addplaylist, setAddplaylist] = useState();
  const [idS, setIdPlay] = useState({});
  // const [arraYsong, setArraYsong] = useState([]);
  // const [newarraYsong, setnewArraYsong] = useState([]);
  const [cierto, setCierto] = useState(false);
  const [cierto1, setCierto1] = useState(false);

  useEffect(() => {
    api('GET', 'playlist/', {}, {}).then((data) => {
      setList(data);
    });
  }, []);

  useEffect(() => {
    setAddplaylist(list[addplaylistIndex]);
  }, [addplaylistIndex]);
  console.log('ide playlis', idS);
  console.log('ide musica', lin);

  const listVeiw = () => {};

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    cierto &&
      (api('PATCH', `playlist/${idS}/add-song`, { body: { songId: lin } }, {}).then(() => {}), setCierto(false));
  }, [cierto]);

  return (
    <button className="cards-container" type="button">
      <h3 className="card-info">{title}</h3>
      <h3 className="card-info">{artist?.name}</h3>
      {/* <h4 className="card-info">{genre?.name}</h4> */}
      <img src={photo} alt={genre} />

      <div className="btn-container">
        <button
          className="btnPlay"
          type="button"
          onClick={() => {
            setIndex(indexUrl);
            setPlaying(true);
          }}
        >
          <span>Play</span>
        </button>
        <button
          className="btnAdd"
          type="button"
          onClick={() => {
            if (!cierto1 ? setCierto1(true) : setCierto1(false));
          }}
        >
          ...
        </button>
      </div>
      {cierto1 && (
        <div className="list-veiW">
          <span className="addToPlaylistBtn">Add to playlist</span>
          {list.map((listU, index) => (
            <button
              type="button"
              className="list-playlist"
              onClick={() => {
                setAddplaylistIndex(index);
                setIdPlay(listU._id);
                setCierto(true);
                setCierto1(false);
              }}
            >
              {listU.name}
            </button>
          ))}
        </div>
      )}

      {/* <button type="submit">
        ...
        <AddNamePlaylist />
        <PlayListName />
      </button> */}

      {/* <h6>{duration}</h6>
      <h7>{releaseDate}</h7> */}
      {/* <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}
        artist={artist}
        genre={genre}
        duration={`${duration}` + `seg`}
        releaseDate={releaseDate}
        photo={photo}
      /> */}
    </button>
  );
};

export default Cards;
