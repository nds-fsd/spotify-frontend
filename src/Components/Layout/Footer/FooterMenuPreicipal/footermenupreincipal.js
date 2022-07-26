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
  const audioUrl =
    'https://gfsopfaepyoticvbyeev.supabase.co/storage/v1/object/sign/spofy/BAD BUNNY - YO PERREO SOLA YHLQMDLG (Video Oficial).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzcG9meS9CQUQgQlVOTlkgLSBZTyBQRVJSRU8gU09MQSBZSExRTURMRyAoVmlkZW8gT2ZpY2lhbCkubXAzIiwiaWF0IjoxNjU4NjcyNDQ5LCJleHAiOjE5NzQwMzI0NDl9.Rc-JaTf9ty47i4zBBGmfNin8nxq50-x06XjhyGah4uQ';

  const handlePlayPause = () => {
    !playPause ? setPlayPause(true) : setPlayPause(false);
  };
  return (
    <div className="FooterMenuPrincipal-container">
      <ReactPlayer url={audioUrl} playing={playPause} />
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
