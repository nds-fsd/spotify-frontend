import './userMenu.css';
import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { removeUserSession, hasUserSession } from '../../../../../Utils/session';

const UserMenu = ({}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userRole, setUserRole] = useState();
  const [userName, setUserName] = useState();
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

  // const handleClickAlbums = () => {
  //   navigate('/albums', { replace: false });
  // };

  // const handleClickGenre = () => {
  //   navigate('/genre', { replace: false });
  // };

  // const handleClickArtists = () => {
  //   navigate('/artist', { replace: false });
  // };

  const handleAdminSession = (data) => {
    if (userRole === 'ADMIN') {
      console.log('entra');
      hasUserSession(data);
      navigate('/adminpage/songs', { replace: true });
      console.log('adminuser');
    }
  };

  useEffect(() => {
    setUserRole(JSON.parse(window.localStorage.getItem('userSession'))?.user?.role);
  }, []);

  useEffect(() => {
    setUserName(JSON.parse(window.localStorage.getItem('userSession'))?.user?.name);
  }, []);

  return (
    <div className="HeaderUsuario-container">
      {userRole === 'ADMIN' || userRole === 'USER' ? <p className="userName">Welcome {userName}!</p> : <> </>}
      <Avatar onClick={handleClick} />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClickProfile}>Profile</MenuItem>
        {/* <MenuItem onClick={handleClickAlbums}>Albums</MenuItem>
        <MenuItem onClick={handleClickGenre}>Genre</MenuItem>
        <MenuItem onClick={handleClickArtists}>Artist</MenuItem> */}
        {userRole === 'ADMIN' ? <MenuItem onClick={handleAdminSession}>Dashboard</MenuItem> : <> </>}
        <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
