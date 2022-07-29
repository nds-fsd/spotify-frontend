import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import LoginPage from './Pages/Login/LoginPage';
import Register from './Pages/Register/Register';
import ArtistPage from './Pages/Artist/ArtistHome';
import PlayListsShow from './Pages/PlaylistShow/PlayListShow';
import AdminPage from './Pages/AdminPage/AdminPage/AdminPage';
import SongCategory from './Pages/AdminPage/SongModel/SongCategory/SongCategory';
import ArtistCategory from './Pages/AdminPage/ArtistModel/ArtistCategory/ArtistCategory';
import AlbumCategory from './Pages/AdminPage/AlbumModel/AlbumCategory/AlbumCategory';
import GenreCategory from './Pages/AdminPage/GenreModel/GenreCategory/GenreCategory';
import PlaylistCategory from './Pages/AdminPage/PlaylistModel/PlaylistCategory/PlaylistCategory';
import UserCategory from './Pages/AdminPage/UserModel/UserCategory/UserCategory';
import GenrePage from './Pages/Genre/GenreHome';
import Home from './Pages/Home/Home';
import Albums from './Pages/Albums/Albums';
import PlayerProvider from './Providers/player-provider';
import HomeRefactor from './Pages/Home/HomeRefactor/homeRefactor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PlayerProvider>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/adminpage" element={<AdminPage />}>
              <Route path="/adminpage/songs" element={<SongCategory />} />
              <Route path="/adminpage/artists" element={<ArtistCategory />} />
              <Route path="/adminpage/albums" element={<AlbumCategory />} />
              <Route path="/adminpage/genres" element={<GenreCategory />} />
              <Route path="/adminpage/playlists" element={<PlaylistCategory />} />
              <Route path="/adminpage/users" element={<UserCategory />} />
            </Route>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomeRefactor />} />
              <Route path="/artist" element={<ArtistPage />} />
              <Route path="/genre" element={<GenrePage />} />
              <Route path="/playlist/:id" element={<PlayListsShow />} />
              <Route path="/albums" element={<Albums />} />
            </Route>
          </Routes>
        </PlayerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
