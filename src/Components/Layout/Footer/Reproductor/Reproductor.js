import './  Reproductor.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const PlayAudio = (pushUrl) => {
  const [playPause, setPlayPause] = useState(true);
  const [url, setUrl] = useState();

  !playPause ? setPlayPause(true) : setPlayPause(false);
  return (
    <div className="FooterMenuPrincipal-container">
      <ReactPlayer url={pushUrl} playing />
    </div>
  );
};

export default PlayAudio;
