import { ListContextProvider } from '../context';
import MainAdminPage from '../MainAdminPage/MainAdminPage';

const AdminPage = () => (
  <ListContextProvider>
    <MainAdminPage />
  </ListContextProvider>
);

export default AdminPage;
