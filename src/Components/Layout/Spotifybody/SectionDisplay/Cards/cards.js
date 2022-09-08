import './cards.css';
import { useEffect, useState } from 'react';
import { useModal } from '../../../../Modals/cardModal/useModal';
import api from '../../../../../Utils/api';
import usePlayer from '../../../../../Hooks/use-player';

// import Modal from '../../../../Modals/cardModal/Modal';
// import AddNamePlaylist from '../../../Sidebar/AddPlaylist/AddPlaylist';
// import PlayListName from '../../../Sidebar/AddPlaylist/PlayList/PlayList';

const Cards = ({ photo, genre, title, releaseDate, duration, artist, indexUrl }) => {
  const { isPlaying, setIndex, indexSongs, setCountSongs, setPlayListSongs, playListSongs, setPlaying, countSongs } =
    usePlayer();

  const [isOpen, openModal, closeModal] = useModal(false);
  useEffect(() => {
    setCountSongs(playListSongs[indexSongs].soundUrl);
    setPlaying(false);
  }, [indexSongs, playListSongs]);
  const [list, setList] = useState([]);
  const [addplaylistIndex, setAddplaylistIndex] = useState();
  const [addplaylist, setAddplaylist] = useState();
  const [_id, setIdPlay] = useState({});
  const [arraYsong, setArraYsong] = useState([]);
  const [newarraYsong, setnewArraYsong] = useState([]);
  const [cierto, setCierto] = useState(true);

  useEffect(() => {
    api('GET', 'playlist/', {}, {}).then((data) => {
      setList(data);
    });
  }, []);

  useEffect(() => {
    setAddplaylist(list[addplaylistIndex]);
  }, [addplaylistIndex]);

  const listVeiw = () => {};

  return (
    <button className="cards-container" onClick={openModal} type="button">
      <h3 className="card-info">{title}</h3>
      <h3 className="card-info">{artist?.name}</h3>
      <img src={photo} alt={genre} />
      <h4 className="card-info">{genre?.name}</h4>

      <button
        className="btnPlay"
        type="button"
        onClick={() => {
          setIndex(indexUrl);
          setPlaying(true);
          setCierto(true);
        }}
      >
        play
      </button>
      <button type="button" onClick={listVeiw()}>
        add
      </button>
      <div className="list-veiW">
        <ul>
          {list.map((listU, index) => (
            <button
              type="button"
              onClick={() => {
                setAddplaylistIndex(index);
                setIdPlay(listU._id);
                setArraYsong(addplaylist.song);
                setnewArraYsong(listU._id, arraYsong);
              }}
            >
              {listU.name}
            </button>
          ))}
        </ul>
      </div>

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
