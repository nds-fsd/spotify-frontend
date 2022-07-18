import './footermenuprincipal.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const FooterMenuPrincipal = () => (
  <div className="FooterMenuPrincipal-container">
    <ShuffleIcon />
    <SkipPreviousIcon />
    <playIcon />
    <PlayCircleOutlineIcon />
    <SkipNextIcon />
    <RepeatIcon />
  </div>
);

export default FooterMenuPrincipal;
