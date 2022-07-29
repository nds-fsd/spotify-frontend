import './userMenu.css';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { removeUserSession, hasUserSession } from '../../../../../Utils/session';

const UserMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [adminSession, setAdminSession] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickProfile = () => {
    alert('Click Profile');
    handleClose();
  };

  const handleClickLogout = () => {
    removeUserSession();
    navigate('/login', { replace: false });
  };

  const handleAdminSession = (data) => {
    if (data.user.role === 'ADMIN') {
      console.log('entra');
      hasUserSession(data);
      navigate('/adminpage/songs', { replace: true });
      console.log('adminuser');
    }
  };
  const handleClickAlbums = () => {
    removeUserSession();
    navigate('/albums', { replace: false });
  };

  const handleClickGenre = () => {
    removeUserSession();
    navigate('/genre', { replace: false });
  };

  const handleClickArtists = () => {
    removeUserSession();
    navigate('/artist', { replace: false });
  };

  return (
    <div className="HeaderUsuario-container">
      <Avatar onClick={handleClick} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={handleClickProfile}>Profile</MenuItem>
        <MenuItem onClick={handleClickAlbums}>Albums</MenuItem>
        <MenuItem onClick={handleClickGenre}>Genre</MenuItem>
        <MenuItem onClick={handleClickArtists}>Artist</MenuItem>
        <MenuItem onClick={handleClickLogout}>Logout</MenuItem>

        <MenuItem onClick={handleAdminSession}>Dashboard</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
