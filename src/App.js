import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import LoginPage from './Pages/Login/LoginPage';
import Register from './Pages/Register/Register';
import PlayListsShow from './Pages/PlaylistShow/PlayListShow';
import Refactor from './Pages/Home/HomeRefactor/HomeRefactor';
import PlayAudio from './Components/Layout/Footer/Reproductor/Reproductor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Refactor />} />
            <Route path="/playlist/:id" element={<PlayListsShow />} />
            <Route path="/audio" element={<PlayAudio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
