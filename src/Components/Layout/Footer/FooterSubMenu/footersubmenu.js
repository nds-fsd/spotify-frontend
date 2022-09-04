import './footersubmenu.css';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import usePlayer from '../../../../Hooks/use-player';

const FooterSubMenu = () => {
  const { SetValueVol, valueVol } = usePlayer();

  const handleChange = (event, newValueVol) => {
    SetValueVol(newValueVol);
  };

  return (
    <div className="FooterSubMenu-container">
      <Grid item>
        <VolumeDownIcon />{' '}
      </Grid>
      <Grid item xs>
        <Slider
          min={0}
          max={100}
          defaultValue={80}
          step={1}
          valueLabelDisplay="on"
          value={valueVol}
          onChange={handleChange}
        />{' '}
      </Grid>
    </div>
  );
};

export default FooterSubMenu;
