import './sidebarmenu.css';

const SidebarMenu = ({ title, Icon, link }) => (
  <button className="sidebar-button obligado" type="button">
    <span className="sidebar-button">{Icon && <Icon className="iconoS" />}</span>
    <span className="">
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
