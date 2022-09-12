import './PlayListsShow.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SubscriptionsOutlined } from '@mui/icons-material';
import usePlayer from '../../Hooks/use-player';
import api from '../../Utils/api';

const PlayListsShow = () => {
  const { id } = useParams();
  const {
    isPlaying,
    setIndex,
    indexSongs,
    setCountSongs,
    setPlayListSongs,
    playListSongs,
    setPlaying,
    footImg,
    setFootImg,
    footTitle,
    setFootTitle,
  } = usePlayer();

  const [listOne, setListOne] = useState([]);
  const [footWait, setFootWait] = useState([]);

  useEffect(() => {
    api('GET', `playlist/${id}`, {}, {}).then((data) => {
      setPlaying(false);
      setListOne(data.song);
      setFootWait(data.song);
    });
  }, []);

  useEffect(() => {
    setPlayListSongs(listOne);
  }, [listOne, playListSongs]);

  useEffect(() => {
    api('GET', `playlist/${id}`, {}, {}).then((data) => {
      setCountSongs(playListSongs[indexSongs].soundUrl);
      setFootImg(playListSongs[indexSongs].photo);
      setFootTitle(playListSongs[indexSongs].name);

      setPlaying(false);
    });
  }, [indexSongs, playListSongs]);
  return (
    <>
      <div className="conteiner-layout-list">
        <span className="playlistTitle">PLAYLIST</span>
        <div className="banner-conteiner">
          <img
            className="banner-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD04MUE2mAfjQ0js3AnK3ncH1el7DcuRiKiA&usqp=CAU"
          />

          <p>
            <h2 className="banner">{listOne.name}</h2>{' '}
          </p>
        </div>
        <div className="List-name">
          {listOne.map((objeto, index) => (
            <div className="conteiner-name btn-playy">
              {' '}
              <>
                <div>
                  <img src={objeto.photo} />
                  <button
                    className="btn-play"
                    type="button"
                    onClick={() => {
                      setIndex(index);
                      setPlaying(true);
                    }}
                  >
                    <span>Play</span>
                  </button>
                </div>

                <h3>{objeto.title}</h3>
              </>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayListsShow;
