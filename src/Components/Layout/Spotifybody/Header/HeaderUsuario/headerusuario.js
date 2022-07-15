import "./headerusuario.css";
import { useState } from "react";
import UserNavigationMenu from "./menuItem/menuItem";
import SignInButton from "../../../../Buttons/SignInButton/SignInButton";
import { Avatar } from "@material-ui/core";

const options = [
  { label: "Account", value: "Account" },
  { label: "Profile", value: "Profile" },
  { label: "Sign Out", value: "signOut" },
];

const HeaderUsuario = () => {
  const [displayUserNavigationMenu, setdisplayUserNavigationMenu] =
    useState(false);

  const handleChange = () => {
    setdisplayUserNavigationMenu(!displayUserNavigationMenu);
  };

  return (
    <div className="HeaderUsuario-container">
      <div onClick={handleChange}>
        <Avatar />
      </div>
      {displayUserNavigationMenu && (
        <UserNavigationMenu options={options}></UserNavigationMenu>
      )}
      <button onClick={handleChange}></button>
      <SignInButton />
    </div>
  );
};

export default HeaderUsuario;
