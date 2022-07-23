import { Outlet, useNavigate } from 'react-router-dom';
import { ListContextProvider } from '../context';
import UserMenu from '../../../Components/Layout/Spotifybody/Navbar/UserMenu/userMenu';
import './AdminPage.css';

const AdminPage = () => {
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
            <h3 className="dashboardTitle">CATEGORIES</h3>
            <button className="buttonCategory" type="submit">
              Song
            </button>
            <button className="buttonCategory" type="submit">
              Artist
            </button>
            <button className="buttonCategory" type="submit">
              Album
            </button>
            <button className="buttonCategory" type="submit">
              Genre
            </button>
            <button className="buttonCategory" type="submit">
              Playlist
            </button>
            <button className="buttonCategory" type="submit">
              User
            </button>
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
