import "./cards.css";
import { useModal } from "../../../../../Utils/cardModals/useModal";
import Modal from "../../../../../Utils/cardModals/Modal";

const Cards = ({ photo, genre, title, releaseDate, duration, onClick }) => {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <button className="cards-container" onClick={openModal}>
      <h4>{title}</h4>
      <img src={photo} alt={genre} />
      <h5>{genre}</h5>
      {/* <h6>{duration}</h6>
      <h7>{releaseDate}</h7> */}
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}
        genre={genre}
        duration={duration}
        releaseDate={releaseDate}
        photo={photo}
      ></Modal>
    </button>
  );
};

export default Cards;
