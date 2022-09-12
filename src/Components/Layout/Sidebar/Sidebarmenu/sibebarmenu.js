import './sidebarmenu.css';
import { useNavigate } from 'react-router-dom';

const SidebarMenu = ({ title, Icon, path }) => {
  const navigate = useNavigate();
  return (
    <button className="sidebar-button" type="button" onClick={() => navigate(path)}>
      <span className="sidebar-icon">{Icon && <Icon className="iconoS" />}</span>
      <span className="sidebar-name">
        {Icon ? (
          <div>
            <h3>{title}</h3>
          </div>
        ) : (
          <p>{title}</p>
        )}
      </span>
    </button>
  );
};

export default SidebarMenu;
