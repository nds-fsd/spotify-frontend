import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/layout";
import LoginPage from "./Pages/Login/LoginPage";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
