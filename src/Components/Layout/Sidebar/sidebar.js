import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
// import { useNavigate } from "react-router";
import SidebarMenu from "./sidebarmenu/Sidebarmenu/sibebarmenu";

const Sidebar = ({ onClick }) => {
  // const navigate = useNavigate();

  // const handleHomeClick = () => {
  //   navigate("/login", { replace: true });
  // };

  return (
    <div className="Sidebar-container">
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png"
        alt="logo"
      /> */}
      <div className="logo">NUCLIFY</div>
      <br />
      <br />
      <SidebarMenu
        // onClick={(e) => handleHomeClick()}
        title="Home"
        Icon={HomeIcon}
      />
      <SidebarMenu title="Search" Icon={SearchIcon} />
      <SidebarMenu title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <div className="Playlist-container">Playlist</div>
      <hr />
      <SidebarMenu title="THE BEST" />
      <SidebarMenu title="NUCLIO DIGITAL" />
    </div>
  );
};

export default Sidebar;
