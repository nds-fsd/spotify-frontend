import './sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';


import SidebarMenu from './Sidebarmenu/sibebarmenu';

const Sidebar = () =>{

    return(
        <div className="Sidebar-container">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png' alt="logo" />
            <br/>
            <br/>
            <SidebarMenu title="Home" Icon={HomeIcon}/>
            <SidebarMenu title="Search" Icon={SearchIcon}/>
            <SidebarMenu title="Your Library" Icon={LibraryMusicIcon}/>
            <br/>
            <div className='Playlist-container'>
                Playlist
            </div>
            <hr/>
            <SidebarMenu title="THE BEST"/>
            <SidebarMenu title="NUCLEO DIGITAL"/>
            
            

        </div>

    )
}

export default Sidebar;