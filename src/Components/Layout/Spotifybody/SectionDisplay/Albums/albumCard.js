import './albums.css';
import { useModal } from '../../../../Modals/cardModal/useModal';
import Modal from '../../../../Modals/cardModal/Modal';

const AlbumCards = ({ name, photo, artist }) => {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <button className="cards-container" onClick={openModal} type="button">
      <h3 className="card-info">{name}</h3>

      <img src={photo} alt={photo} />
      {/* <h4 className="card-info">{artist}</h4> */}
    </button>
  );
};

export default AlbumCards;
