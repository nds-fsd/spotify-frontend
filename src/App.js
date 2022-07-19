import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import LoginPage from './Pages/Login/LoginPage';
import Register from './Pages/Register/Register';
import PlayListsShow from './Pages/PlaylistShow/PlayListShow';
import AdminPage from './Pages/AdminPage/AdminPage/AdminPage';
import SongCategory from './Pages/AdminPage/SongCategory/SongCategory';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adminpage" element={<AdminPage />}>
            <Route path="/adminpage/songs" element={<SongCategory />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/playlist/:id" element={<PlayListsShow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
