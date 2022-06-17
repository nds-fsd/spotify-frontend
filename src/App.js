import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/layout";
import Register from "./Pages/Register/Register";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter> */}
      <Layout />
    </div>
  );
}

export default App;
