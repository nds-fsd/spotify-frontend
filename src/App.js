import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import LoginPage from './Pages/Login/LoginPage';
import Register from './Pages/Register/Register';
import PlayListsShow from './Pages/PlaylistShow/PlayListShow';
import AdminPage from './Pages/AdminPage/AdminPage/AdminPage';
import SongCategory from './Pages/AdminPage/SongModel/SongCategory/SongCategory';
import ArtistCategory from './Pages/AdminPage/ArtistModel/ArtistCategory/ArtistCategory';
import AlbumCategory from './Pages/AdminPage/AlbumModel/AlbumCategory/AlbumCategory';
import GenreCategory from './Pages/AdminPage/GenreModel/GenreCategory/GenreCategory';
import PlaylistCategory from './Pages/AdminPage/PlaylistModel/PlaylistCategory/PlaylistCategory';
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
            <Route path="/adminpage/artists" element={<ArtistCategory />} />
            <Route path="/adminpage/albums" element={<AlbumCategory />} />
            <Route path="/adminpage/genres" element={<GenreCategory />} />
            <Route path="/adminpage/playlists" element={<PlaylistCategory />} />
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
