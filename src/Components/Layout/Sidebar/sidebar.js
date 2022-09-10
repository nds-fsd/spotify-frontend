import './sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarMenu from './Sidebarmenu/sibebarmenu';
import AddNamePlaylist from './AddPlaylist/AddPlaylist';
import PlayListName from './AddPlaylist/PlayList/PlayList';

const Sidebar = ({ onClick }) => (
  <div className="Sidebar-container">
    <div className="logo">NUCLIFY</div>
    <br />
    <br />
    <SidebarMenu
      // onClick={(e) => handleHomeClick()}
      title="Home"
      Icon={HomeIcon}
      link="http://localhost:3000/"
    />
    {/* <SidebarMenu title="Search" Icon={SearchIcon} /> */}
    <SidebarMenu title="Your Library" Icon={LibraryMusicIcon} link="#" />
    <br />
    <hr />
    <AddNamePlaylist />
    <PlayListName />
  </div>
);

export default Sidebar;
