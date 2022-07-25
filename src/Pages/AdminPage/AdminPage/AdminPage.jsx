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

        <nav>
          <div className="fixedSearchContainer">
            <form>
              <label className="searchlabel">
                Search
                <input className="searchInput" type="text" name="search" />
              </label>
            </form>
          </div>
        </nav>

        <aside className="dashboard">
          <div className="dashboardContainer">
            <h3 className="dashboardTitle">DASHBOARD</h3>
            <CategorySelect />
          </div>
        </aside>

        <section className="categoriesContent">
          <div className="modelsContainer">
            <Outlet />
          </div>
        </section>
      </div>
    </ListContextProvider>
  );
};

export default AdminPage;
