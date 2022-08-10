import './footermenuprincipal.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import usePlayer from '../../../../Hooks/use-player';

const FooterMenuPrincipal = () => {
  const { playingSong, isPlaying, setPlaying, valueVol } = usePlayer();

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };
  return (
    <div className="FooterMenuPrincipal-container">
      <ReactPlayer url={playingSong} playing={isPlaying} volume={valueVol / 100} />
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
