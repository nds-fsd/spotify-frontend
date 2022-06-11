import './sidebarmenu.css';
const SidebarMenu = ({ title, Icon}) => {

    return(

     <div className="Sidemenu-container">

         {Icon && <Icon classname='iconoS'/>}
         {Icon ? <h2>{title}</h2> : <p>{title}</p>}

     </div>

      
      
        
    
)
}


export default SidebarMenu;