import "./sidebarmenu.css";

const SidebarMenu = ({ title, Icon, link}) => {
  return (
    <div className="Sidemenu-container">
      <button className="sidebar-button">
        {Icon && <Icon className="iconoS" />}
      </button>
      <button className="sidebar-button obligado">
        {Icon ? <a href={`${link}`}><h3>{title}</h3></a>: <p>{title}</p>}

      </button>
    </div>
  );
};

export default SidebarMenu;
