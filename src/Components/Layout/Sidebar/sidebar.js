import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarMenu from './Sidebarmenu/sibebarmenu';
import AddNamePlaylist from './AddPlaylist/AddPlaylist';
import PlayListName from './AddPlaylist/PlayList/PlayList';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="Sidebar-container">
      <div className="logo" onClick={() => navigate('/', { replace: true })}>
        NUCLIFY
      </div>
      <br />
      <br />
      <SidebarMenu title="Home" Icon={HomeIcon} onClick={() => navigate('/', { replace: true })} />
      {/* <SidebarMenu title="Your Library" Icon={LibraryMusicIcon} link="#" /> */}
      <br />
      <hr />
      <AddNamePlaylist />
      <PlayListName />
    </div>
  );
};

export default Sidebar;
