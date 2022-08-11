import './footermenuprincipal.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import { getAllCards } from '../../../../Api/utils';

import usePlayer from '../../../../Hooks/use-player';

const FooterMenuPrincipal = () => {
  const { playingSong, isPlaying, setPlaying, valueVol, playingQueue, index, setIndex, playSong } = usePlayer();

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (playingQueue.length - 1 > index) {
      setIndex(index + 1);
      playSong(playingQueue[index + 1]);
    }
  };

  const handlePre = () => {
    if (index > 0) {
      setIndex(index - 1);
      playSong(playingQueue[index - 1]);
    }
  };

  console.log(index);

  return (
    <div className="FooterMenuPrincipal-container">
      <ReactPlayer url={playingSong} playing={isPlaying} volume={valueVol / 100} width={400} height={200} />
      <ShuffleIcon />
      <SkipPreviousIcon onClick={handlePre} />
      <playIcon />
      {!isPlaying ? (
        <PlayCircleOutlineIcon onClick={handlePlayPause} />
      ) : (
        <PauseCircleOutlineIcon onClick={handlePlayPause} />
      )}
      <SkipNextIcon onClick={handleNext} />
      <RepeatIcon />
    </div>
  );
};
export default FooterMenuPrincipal;
