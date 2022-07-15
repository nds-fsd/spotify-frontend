import "./header.css";

import HeaderDisplay from "./HeaderDisplay/headerdisplay";
import HeaderUsuario from "./HeaderUsuario/headerusuario";
const Header = () => {
  return (
    <div className="Header-container">
      <HeaderDisplay />
      <HeaderUsuario></HeaderUsuario>
    </div>
  );
};

export default Header;
