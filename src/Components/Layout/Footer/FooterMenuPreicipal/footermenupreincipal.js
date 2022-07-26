import './footermenuprincipal.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const FooterMenuPrincipal = () => {
  const [playPause, setPlayPause] = useState(false);
  const [url, setUrl] = useState();
  const Url =
    'https://gfsopfaepyoticvbyeev.supabase.co/storage/v1/object/sign/spofy/Enanitos Verdes - Lamento Boliviano HD.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzcG9meS9FbmFuaXRvcyBWZXJkZXMgLSBMYW1lbnRvIEJvbGl2aWFubyBIRC5tcDMiLCJpYXQiOjE2NTg4NjU2MzYsImV4cCI6MTk3NDIyNTYzNn0.Rq7F_QauxNk6EYX3qkixPkMSL-a6u6QN_Prnr_mLGM8';

  const handlePlayPause = () => {
    !playPause ? setPlayPause(true) : setPlayPause(false);
  };
  return (
    <div className="FooterMenuPrincipal-container">
      <ReactPlayer url={Url} playing={playPause} />
      <ShuffleIcon />
      <SkipPreviousIcon />
      <playIcon />
      <PlayCircleOutlineIcon onClick={handlePlayPause} />
      <SkipNextIcon />
      <RepeatIcon />
    </div>
  );
};
export default FooterMenuPrincipal;
