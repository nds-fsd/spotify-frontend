import './userMenu.css';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { removeUserSession } from '../../../../../Utils/session';

const UserMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
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
        <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
