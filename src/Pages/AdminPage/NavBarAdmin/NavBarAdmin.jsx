import SearchIcon from '@mui/icons-material/Search';
import { useListContext } from '../context';
import styles from './NavBarAdmin.module.css';

const NavBarAdmin = () => {
  const { searchText, setSearchText } = useListContext();

  return (
    <nav>
      <div className={styles.fixedSearchContainer}>
        <form>
          <label className={styles.searchlabel}>
            <SearchIcon className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              type="text"
              name="search"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>
        </form>
      </div>
    </nav>
  );
};

export default NavBarAdmin;
