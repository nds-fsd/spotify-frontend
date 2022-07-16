import { Navigate } from 'react-router-dom';
import Footer from './Footer/footer';
import './layout.css';
import Sidebar from './Sidebar/sidebar';
import SpotifyBody from './Spotifybody/spotifybody';
import { hasUserSession } from '../../Utils/session';

const Layout = () => (
  <>
    {!hasUserSession() && <Navigate to="/login" replace />}
    {hasUserSession() && (
      <>
        <div className="conteiner-layout">
          <Sidebar />
          <SpotifyBody />
        </div>
        <Footer />
      </>
    )}
  </>
);

export default Layout;
