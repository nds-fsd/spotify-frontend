import './footer.css';
import FooterLeft from './FooterLeft/footerleft';
import FooterMenuPrincipal from './FooterMenuPreicipal/footermenupreincipal';
import FooterSubMenu from './FooterSubMenu/footersubmenu';

const Footer = ( ) => {
    return (
        <div className="Footer-container">
            <FooterLeft/>
            <FooterMenuPrincipal/>
            <FooterSubMenu/>
        
        
        </div>


    )
}

export default Footer;