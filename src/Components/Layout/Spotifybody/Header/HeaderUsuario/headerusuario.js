import "./headerusuario.css";
import { Avatar } from "@material-ui/core";
import SignInButton from "../../../../Buttons/SignInButton/SignInButton";

const HeaderUsuario = () => {
  return (
    <div className="HeaderUsuario-container">
      <Avatar />
      <SignInButton />
    </div>
  );
};

export default HeaderUsuario;
