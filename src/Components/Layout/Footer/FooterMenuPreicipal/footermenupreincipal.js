import './footermenuprincipal.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';

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
    playListSong,
    setPlayListSongs,
    playListSongs,
    setCountSongs,
    setPlayingQueue,
  } = usePlayer();

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (playListSongs.length - 1 > indexSongs) {
      setIndex(indexSongs + 1);
    }
  };

  const handlePre = () => {
    if (indexSongs > 0) {
      setIndex(indexSongs);
      setIndex(indexSongs - 1);
    }
  };

  const handleProgress = (event, newProgress) => {
    setProgress(newProgress);
  };
  const [loopset, setLoop] = useState(false);

  useEffect(() => {
    setPlayingQueue(countSongs);
  }, [countSongs, loopset]);

  const loop = () => {
    if (!loopset) {
      setLoop(true);
    } else {
      setLoop(false);
    }
  };

  return (
    <div className="FooterMenuPrincipal-container">
      <ReactPlayer
        url={playingSong}
        playing={!!isPlaying}
        volume={valueVol / 100}
        width={400}
        height={200}
        onEnded={() => handleNext()}
        onReady={(reactPlayer) => console.log('onReady', reactPlayer.getDuration() / 60)}
        onProgress={() => handleProgress()}
        loop={loopset}
      />
      <SkipPreviousIcon onClick={handlePre} />
      {!isPlaying ? (
        <PlayCircleOutlineIcon onClick={handlePlayPause} />
      ) : (
        <PauseCircleOutlineIcon onClick={handlePlayPause} />
      )}
      <SkipNextIcon onClick={handleNext} />
      <RepeatIcon onClick={loop} />
    </div>
  );
};
export default FooterMenuPrincipal;
