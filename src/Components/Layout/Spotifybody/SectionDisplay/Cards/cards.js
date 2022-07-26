import './cards.css';
import { useModal } from '../../../../Modals/cardModal/useModal';
import Modal from '../../../../Modals/cardModal/Modal';

const Cards = ({ photo, genre, title, releaseDate, duration, onClick }) => {
  const [isOpen, openModal, closeModal] = useModal(false);

  // const secondsToMinutes = ({ duration }) => {
  //   let seconds = Math.floor(({ duration } / 60) % 60);
  //   let minutes = Math.floor(({ duration } / (1000 * 60)) % 60);

  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;

  //   return minutes + ":" + seconds;
  // };
  // console.log(secondsToMinutes({ duration }));

  return (
    <>
      <button className="cards-container" onClick={openModal} type="button">
        <h3 className="card-info">{title}</h3>
        <img src={photo} alt={genre} />
        <h4 className="card-info">{genre}</h4>
        {/* <h6>{duration}</h6>
      <h7>{releaseDate}</h7> */}
        <button type="submit" className="button-play">
          dale play
        </button>
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title={title}
          genre={genre}
          duration={`${duration}` + `seg`}
          releaseDate={releaseDate}
          photo={photo}
        />
      </button>
    </>
  );
};

export default Cards;
