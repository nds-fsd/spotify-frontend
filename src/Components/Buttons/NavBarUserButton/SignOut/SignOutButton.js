import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUserSession } from '../../../../Utils/session';

const LogOutButton = () => {
  const navigate = useNavigate();

  const deleteLocalStorage = () => {
    removeUserSession();
    navigate('/login', { replace: false });
  };

  <button onClick={deleteLocalStorage} type="button" />;
};

export default LogOutButton;
