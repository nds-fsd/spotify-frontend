import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import LoginPage from './Pages/Login/LoginPage';
import Register from './Pages/Register/Register';
import ArtistPage from './Pages/Home/HomeRefactor/Artist/ArtistHome';
import PlayListsShow from './Pages/PlaylistShow/PlayListShow';
import AdminPage from './Pages/AdminPage/AdminPage/AdminPage';
import SongCategory from './Pages/AdminPage/SongModel/SongCategory/SongCategory';
import ArtistCategory from './Pages/AdminPage/ArtistModel/ArtistCategory/ArtistCategory';
import AlbumCategory from './Pages/AdminPage/AlbumModel/AlbumCategory/AlbumCategory';
import GenreCategory from './Pages/AdminPage/GenreModel/GenreCategory/GenreCategory';
import PlaylistCategory from './Pages/AdminPage/PlaylistModel/PlaylistCategory/PlaylistCategory';
import UserCategory from './Pages/AdminPage/UserModel/UserCategory/UserCategory';
import GenrePage from './Pages/Home/HomeRefactor/Genre/GenreHome';
import GenreSongs from './Pages/Home/HomeRefactor/Genre/genreSongs';
import Albums from './Pages/Home/HomeRefactor/Albums/Albums';
import PlayerProvider from './Providers/player-provider';
import HomeRefactorBody from './Pages/Home/HomeRefactor/HomeRefactorBody/homeRefactorBody';
import AllSongs from './Pages/Home/HomeRefactor/Songs/AllSongs';
import ArtistSongs from './Pages/Home/HomeRefactor/Artist/ArtistSongs';
import AlbumSongs from './Pages/Home/HomeRefactor/Albums/AlbumSongs';

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
            {/* <Route path="/" element={<SidebarMenu />}>
              <Route path="/songs" element={<AllSongs />} />
            </Route> */}

            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomeRefactorBody />} />
              <Route path="/songs" element={<AllSongs />} />
              <Route path="/artist" element={<ArtistPage />} />
              <Route path="/artist/:id" element={<ArtistSongs />} />
              <Route path="/genre" element={<GenrePage />} />
              <Route path="/genre/:id" element={<GenreSongs />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/album/:id" element={<AlbumSongs />} />
              <Route path="/playlist/:id" element={<PlayListsShow />} />
            </Route>
          </Routes>
        </PlayerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
