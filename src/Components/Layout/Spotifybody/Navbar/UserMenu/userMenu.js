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
    navigate('/', { replace: true });
  };

  const handleClickLogout = () => {
    removeUserSession();
    navigate('/login', { replace: false });
  };

  const handleAdminSession = (data) => {
    if (userRole === 'ADMIN') {
      hasUserSession(data);
      navigate('/adminpage/songs', { replace: true });
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
      {userRole === 'USER' && <p className="userName">Welcome {userName}!</p>}
      {userRole === 'ADMIN' && <p className="userName">Welcome {userName}!</p>}

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

        {userRole === 'ADMIN' && <MenuItem onClick={handleAdminSession}>Dashboard</MenuItem>}
        <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
