import './sectiondisplay.css';
import { Outlet } from 'react-router-dom';

const SectionDisplay = () => (
  <div className="SectionDisplay-container">
    <Outlet />
  </div>
);

export default SectionDisplay;
