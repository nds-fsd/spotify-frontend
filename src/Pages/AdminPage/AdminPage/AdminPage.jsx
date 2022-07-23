import { Outlet, useNavigate } from 'react-router-dom';
import { ListContextProvider } from '../context';
import UserMenu from '../../../Components/Layout/Spotifybody/Navbar/UserMenu/userMenu';
import './AdminPage.css';
import CategorySelect from './CategorySelect';

const AdminPage = ({ refresh, setRefresh }) => {
  const navigate = useNavigate();

  return (
    <ListContextProvider>
      <div className="adminPage">
        <header className="logoContainer">
          <h1>NUCLIFY</h1>
          <p>Admin</p>
          <UserMenu className="userMenuDropdown" />"
        </header>

        <nav className="searchContainer">
          <div className="fixedSearchContainer">
            <form>
              <label className="searchlabel">
                Search
                <input type="text" name="search" />
              </label>
            </form>
          </div>
        </nav>

        <aside className="dashboard">
          <div className="dashboardContainer">
            <h3 className="dashboardTitle">DASHBOARD</h3>
            <CategorySelect />
            {/* <button onClick={() => navigate('songs')} className="buttonCategory" type="submit">
              Songs
            </button>
            <button onClick={() => navigate('artists')} className="buttonCategory" type="submit">
              Artists
            </button>
            <button onClick={() => navigate('albums')} className="buttonCategory" type="submit">
              Albums
            </button>
            <button onClick={() => navigate('genres')} className="buttonCategory" type="submit">
              Genres
            </button>
            <button onClick={() => navigate('playlists')} className="buttonCategory" type="submit">
              Playlists
            </button>
            <button onClick={() => navigate('users')} className="buttonCategory" type="submit">
              Users
            </button> */}
          </div>
          {/* probar select */}
        </aside>

        <section className="categoriesContent">
          <Outlet />
        </section>
      </div>
    </ListContextProvider>
  );
};

export default AdminPage;
