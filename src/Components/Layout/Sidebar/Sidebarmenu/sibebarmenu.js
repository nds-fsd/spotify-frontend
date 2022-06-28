import "./sidebarmenu.css";

const SidebarMenu = ({ title, Icon, onClick }) => {
  return (
    <div className="Sidemenu-container">
      <button className="sidebar-button">
        {Icon && <Icon classname="iconoS" />}
      </button>
      <button className="sidebar-button">
        {Icon ? <h3>{title}</h3> : <p>{title}</p>}
      </button>
    </div>
  );
};

export default SidebarMenu;
