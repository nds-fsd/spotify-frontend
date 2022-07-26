import './albums.css';
import { useModal } from '../../../../Modals/cardModal/useModal';
import Modal from '../../../../Modals/cardModal/Modal';

const AlbumCards = ({ name, photo, artist, onClick }) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  /* const secondsToMinutes = ({ duration }) => {
  //   let seconds = Math.floor(({ duration } / 60) % 60);
  //   let minutes = Math.floor(({ duration } / (1000 * 60)) % 60);

  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;

  //   return minutes + ":" + seconds;
  // };
  // console.log(secondsToMinutes({ duration })); */

  return (
    <button className="cards-container" onClick={openModal} type="button">
      <h3 className="card-info">{name}</h3>
      <img src={photo} alt={photo} />
      <h4 className="card-info">{artist}</h4>
      {/* <h6>{duration}</h6>
      <h7>{releaseDate}</h7> */}
      <Modal isOpen={isOpen} closeModal={closeModal} name={name} photo={photo} artist={artist} />
    </button>
  );
};

export default AlbumCards;
