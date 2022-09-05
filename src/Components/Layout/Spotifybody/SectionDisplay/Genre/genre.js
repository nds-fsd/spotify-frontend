import './genre.css';
import { useModal } from '../../../../Modals/cardModal/useModal';
import Modal from '../../../../Modals/cardModal/Modal';

const Genre = ({ name, description, photo }) => {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <button className="genre-container" onClick={openModal} type="button">
      <h3 className="genre-info">{name}</h3>
      <img src={photo} />
      <h4 className="genre-info">{description}</h4>
      {/* <h6>{duration}</h6>
      <h7>{releaseDate}</h7> */}
      {/* <Modal isOpen={isOpen} closeModal={closeModal} name={name} description={description} phot={photo} /> */}
    </button>
  );
};

export default Genre;
