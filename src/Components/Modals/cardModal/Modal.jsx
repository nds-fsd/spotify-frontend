import './Modal.css';

const Modal = ({ title, duration, releaseDate, genre, photo, children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <div className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal} type="button">
          x
        </button>
        {children}
        <h2 className="songModal-header2">{title}</h2>
        <img src={photo} alt={genre} />
        <h3 className="songModal-header3">{genre}</h3>
        <h3 className="songModal-header3">{duration}</h3>
        <h3 className="songModal-header3">{releaseDate}</h3>
      </div>
    </div>
  );
};

export default Modal;
