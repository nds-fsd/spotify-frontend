import './cards.css';
import { useModal } from '../../../../Modals/cardModal/useModal';
import Modal from '../../../../Modals/cardModal/Modal';

const Cards = ({ photo, genre, title, releaseDate, duration, artist }) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  console.log(artist);

  return (
    <button className="cards-container" onClick={openModal} type="button">
      <h3 className="card-info">{title}</h3>
      <h3 className="card-info">{artist?.name}</h3>
      <img src={photo} alt={genre} />
      <h4 className="card-info">{genre}</h4>
      {/* <h6>{duration}</h6>
      <h7>{releaseDate}</h7> */}
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}
        artist={artist}
        genre={genre}
        duration={`${duration}` + `seg`}
        releaseDate={releaseDate}
        photo={photo}
      />
    </button>
  );
};

export default Cards;
