import { Outlet } from 'react-router-dom';

import { ListContextProvider } from '../context';
import UserMenu from '../../../Components/Layout/Spotifybody/Navbar/UserMenu/userMenu';
import '../MainAdminPage/MainAdminPage.css';

const AdminPage = () => (
  <ListContextProvider>
    <div className="adminPage">
      <header className="logoContainer">
        <h1>NUCLIFY</h1>
        <UserMenu className="userMenuDropdown" />"
      </header>

      <nav className="searchContainer">
        <form>
          <label>
            Search
            <input type="text" name="search" />
          </label>
        </form>
      </nav>

      <aside className="dashboard">
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

        {/* probar select */}
      </aside>

      <section className="categoriesContent">
        <Outlet />
      </section>
    </div>
  </ListContextProvider>
);

export default AdminPage;
