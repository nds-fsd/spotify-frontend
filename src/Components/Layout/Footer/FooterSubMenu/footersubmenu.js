import './footersubmenu.css';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

import { Slider, Grid } from '@material-ui/core';

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
