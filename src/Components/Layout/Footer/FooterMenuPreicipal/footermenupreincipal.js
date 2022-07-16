import './footermenuprincipal.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

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
