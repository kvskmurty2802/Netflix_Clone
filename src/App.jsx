import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./pages/Player/Player";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player/>} />
      </Routes>
    </div>
  );
}

export default App;
