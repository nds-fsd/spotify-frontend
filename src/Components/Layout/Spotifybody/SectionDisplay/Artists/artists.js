import './artists.css';
import { useModal } from '../../../../Modals/cardModal/useModal';
import Modal from '../../../../Modals/cardModal/Modal';

const Artists = ({ name, bio, monthlyUsers, albums }) => {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <button className="artist-container" onClick={openModal} type="button">
      <h3 className="artist-info">{name}</h3>
      <h4 className="artist-info">{bio}</h4>
      {/* <h6>{duration}</h6>
      <h7>{releaseDate}</h7> */}
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        name={name}
        bio={bio}
        monthlyUsers={monthlyUsers}
        albums={albums}
      />
    </button>
  );
};

export default Artists;
