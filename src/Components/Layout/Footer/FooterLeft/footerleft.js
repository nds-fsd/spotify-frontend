import './footerleft.css';
import { useEffect, useState } from 'react';
import usePlayer from '../../../../Hooks/use-player';

const FooterLeft = () => {
  const { playListSongs, indexSongs } = usePlayer();
  const [titleSong, setTiltesong] = useState();
  useEffect(() => {
    setTiltesong(playListSongs[indexSongs]);
    console.log(playListSongs);
  }, [playListSongs]);
  console.log(playListSongs);

  return (
    <div className="FooterLeft-container">
      <img
        src="https://www.lahiguera.net/musicalia/artistas/varios/disco/0/tema/11279/king_of_everything-portada.jpg"
        alt="albun"
      />
      <div>
        <h5>title</h5>
        <p>Fffgf</p>
      </div>
    </div>
  );
};

export default FooterLeft;
