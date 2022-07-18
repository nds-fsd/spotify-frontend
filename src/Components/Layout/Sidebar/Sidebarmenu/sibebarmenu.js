import './sidebarmenu.css';

const SidebarMenu = ({ title, Icon, link }) => (
  <div className="Sidemenu-container">
    <button className="sidebar-button" type="button">
      {Icon && <Icon className="iconoS" />}
    </button>
    <button className="sidebar-button obligado" type="button">
      {Icon ? (
        <a href={`${link}`}>
          <h3>{title}</h3>
        </a>
      ) : (
        <p>{title}</p>
      )}
    </button>
  </div>
);

export default SidebarMenu;
