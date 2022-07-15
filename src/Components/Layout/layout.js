import Footer from './Footer/footer';
import './layout.css'
import Sidebar from './Sidebar/sidebar';
import SpotifyBody from './Spotifybody/spotifybody';



const Layout = () => {
 return (
     <>
     <div className="conteiner-layout">
      <Sidebar/>
      <SpotifyBody/>
     </div>
     <Footer/>
     </>

)
};

export default Layout;