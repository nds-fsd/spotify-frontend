import './PlayListsShow.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCards } from '../../Api/utils';
import usePlayer from '../../Hooks/use-player';

const PlayListsShow = () => {
  const { id } = useParams();
  const { playSong, isPlaying } = usePlayer();
  const getOne = async () => {
    const response = await fetch(`http://localhost:8080/playlist/${id}`);
    return response.json();
  };

  const [listOne, setListOne] = useState([]);
  useEffect(() => {
    getOne().then((data) => setListOne(data));
  }, []);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCards().then((data) => setCards(data));
  }, []);

  return (
    <>
      <div className="conteiner-layout-list">
        Playlist
        <div className="banner-conteiner">
          <img
            className="banner-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD04MUE2mAfjQ0js3AnK3ncH1el7DcuRiKiA&usqp=CAU"
          />

          <p>
            <h2 className="banner">{listOne.name}</h2> lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem{' '}
          </p>
        </div>
        <div className="List-names">
          {cards.map((objeto) => (
            <div className="conteiner-name">
              {' '}
              <>
                <div>
                  <img src={objeto.photo} />
                </div>
                <button
                  className="btn-play"
                  type="button"
                  onClick={() => {
                    playSong(objeto.soundUrl);
                    isPlaying();
                  }}
                >
                  Play
                </button>
                <h3>{objeto.title}</h3>
                <h3>{objeto.genre}</h3>
                <h3>{objeto.releaseDate}</h3>
              </>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayListsShow;
