import './header.css';
import { Avatar } from '@material-ui/core';
import HeaderDisplay from './HeaderDisplay/headerdisplay';
import HeaderUsuario from './HeaderUsuario/headerusuario';
const Header = () => {
    return (
        <div className="Header-container"> 
            <HeaderDisplay/>
            <HeaderUsuario>
              <Avatar/>
                <h3>
                    Nucleo Digital
                 </h3>
                

            </HeaderUsuario>
            

        </div>
    )
};

export default Header;