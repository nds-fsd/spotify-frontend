import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
// import AddIcon from '@mui/icons-material/Add';

import SidebarMenu from './Sidebarmenu/sibebarmenu';
import AddNamePlaylist from './AddPlaylist/AddPlaylist';
import PlayListName from './AddPlaylist/PlayList/PlayList';

const Sidebar = ({ onClick }) => {
  const navigate = useNavigate();

  const seeAllSongs = () => {
    navigate('/songs', { replace: false });
  };

  return (
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
      {/* <SidebarMenu title="Search" Icon={SearchIcon} onClick={seeAllSongs} /> */}
      <SearchIcon className="searchIcon" />
      <button type="button" className="searchLabel" onClick={seeAllSongs}>
        {' '}
        Search{' '}
      </button>
      <SidebarMenu title="Your Library" Icon={LibraryMusicIcon} link="#" />
      <br />

      <hr />
      <AddNamePlaylist />
      <PlayListName />
    </div>
  );
};

export default Sidebar;
