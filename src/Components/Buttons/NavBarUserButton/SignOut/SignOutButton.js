import React from "react";
import { useNavigate } from "react-router";

const deleteLocalStorage = () => {
  localStorage.clear();
};

const LogOutButton = () => {
  const navigate = useNavigate();

  <button onClick={deleteLocalStorage}></button>;
  navigate("/login", { replace: true });
};

export default LogOutButton;
