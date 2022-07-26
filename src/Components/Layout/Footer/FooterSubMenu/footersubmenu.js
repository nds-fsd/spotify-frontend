import './footersubmenu.css';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

const FooterSubMenu = () => (
  <div className="FooterSubMenu-container">
    <Grid item>
      <PlaylistPlayIcon />{' '}
    </Grid>
    <Grid item>
      <VolumeDownIcon />{' '}
    </Grid>
    <Grid item xs>
      <Slider />{' '}
    </Grid>
  </div>
);

export default FooterSubMenu;
