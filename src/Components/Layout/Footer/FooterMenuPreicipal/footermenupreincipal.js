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
  const {
    playingSong,
    isPlaying,
    setPlaying,
    valueVol,
    playingQueue,
    indexSongs,
    setIndex,
    playSong,
    setProgress,
    progress,
    countSongs,
  } = usePlayer();

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const handleNext = () => {
    setIndex(indexSongs + 1);
    console.log(indexSongs);
  };

  const handlePre = () => {
    if (indexSongs > 0) {
      setIndex(indexSongs - 1);
      playSong(playingQueue);

      console.log(indexSongs);
    }
  };
  console.log(playingSong);

  const handleProgress = (event, newProgress) => {
    setProgress(newProgress);
  };
  return (
    <div className="FooterMenuPrincipal-container">
      <ReactPlayer
        url={playingSong}
        playing={isPlaying}
        volume={valueVol / 100}
        width={400}
        height={200}
        onEnded={() => handleNext()}
        onReady={(reactPlayer) => console.log('onReady', reactPlayer.getDuration() / 60)}
        onProgress={() => handleProgress()}
      />
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
