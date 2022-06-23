import "./headerusuario.css";
import { Avatar } from "@material-ui/core";
import LoginbuttonHomepage from "../../../../Buttons/LoginbuttonHomepage/LoginbuttonHomepage";
const HeaderUsuario = () => {
  return (
    <div className="HeaderUsuario-container">
      <Avatar />
      <LoginbuttonHomepage />
    </div>
  );
};

export default HeaderUsuario;
