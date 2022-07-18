import UserMenu from '../../../Components/Layout/Spotifybody/Navbar/UserMenu/userMenu';
import './MainAdminPage.css';
import SongCategory from '../SongCategory/SongCategory';

const MainAdminPage = () => (
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
      <SongCategory />
    </section>
  </div>
);

export default MainAdminPage;
