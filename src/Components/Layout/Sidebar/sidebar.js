import './sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
// import AddIcon from '@material-ui/icons/Add';
// import { useNavigate } from "react-router";
import SidebarMenu from './Sidebarmenu/sibebarmenu';
import AddNamePlaylist from './AddPlaylist/AddPlaylist';
import PlayListName from './AddPlaylist/PlayList/PlayList';

const Sidebar = ({ onClick }) => (
  // const navigate = useNavigate();

  // const handleHomeClick = () => {
  //   navigate("/login", { replace: false });
  // };

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
      link="http://localhost:3000/"
    />
    <SidebarMenu title="Search" Icon={SearchIcon} link="#" />
    <SidebarMenu title="Your Library" Icon={LibraryMusicIcon} link="#" />
    <br />
    <div className="Playlist-container">Playlist</div>
    <hr />
    <AddNamePlaylist />
    <PlayListName />
  </div>
);
export default Sidebar;
