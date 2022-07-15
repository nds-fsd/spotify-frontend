import "./sectiondisplay.css";
import { Outlet } from "react-router-dom";

const SectionDisplay = () => {


  return (
    <div className="SectionDisplay-container">
     <Outlet/> 

     
    </div>
  );
};

export default SectionDisplay;
