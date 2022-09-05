import './PlayListsShow.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SubscriptionsOutlined } from '@mui/icons-material';
import usePlayer from '../../Hooks/use-player';
import api from '../../Utils/api';

const PlayListsShow = () => {
  const { id } = useParams();
  const { isPlaying, setIndex, indexSongs, setCountSongs, setPlayListSongs, playListSongs, setPlaying } = usePlayer();

  const [listOne, setListOne] = useState([]);

  useEffect(() => {
    api('GET', `playlist/${id}`, {}, {}).then((data) => {
      setListOne(data.song);
    });
  }, []);
  console.log(listOne);

  useEffect(() => {
    setPlayListSongs(listOne);
  }, [listOne]);

  useEffect(() => {
    api('GET', `playlist/${id}`, {}, {}).then((data) => {
      setCountSongs(playListSongs[indexSongs].soundUrl);
      setPlaying(false);
    });
  }, [indexSongs, playListSongs]);
  console.log(isPlaying);

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
        <div className="List-name">
          {listOne.map((objeto, index) => (
            <div className="conteiner-name btn-playy">
              {' '}
              <>
                <div>
                  <img src={objeto.photo} />
                </div>
                <button
                  className="btn-play"
                  type="button"
                  onClick={() => {
                    setIndex(index);
                    setPlaying(true);
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
