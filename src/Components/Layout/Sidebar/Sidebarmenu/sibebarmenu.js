import './sidebarmenu.css';

const SidebarMenu = ({ title, Icon, link }) => (
  <button className="sidebar-button" type="button">
    <span className="sidebar-icon">{Icon && <Icon className="iconoS" />}</span>
    <span className="sidebar-name">
      {Icon ? (
        <a href={`${link}`}>
          <h3>{title}</h3>
        </a>
      ) : (
        <p>{title}</p>
      )}
    </span>
  </button>
);

export default SidebarMenu;
