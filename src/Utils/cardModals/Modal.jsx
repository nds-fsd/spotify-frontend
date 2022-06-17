import "./Modal.css";

const Modal = ({
  title,
  duration,
  releaseDate,
  genre,
  photo,
  children,
  isOpen,
  closeModal,
}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
        <h2>{title}</h2>
        <img src={photo} alt={genre} />
        <h2>{genre}</h2>
        <h4>{duration}</h4>
        <h4>{releaseDate}</h4>
      </div>
    </div>
  );
};

export default Modal;
