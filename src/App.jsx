import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Deneme from "./components/pages/Deneme";
import Homepage from "./components/pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="deneme" element={<Deneme />} />
    </Routes>
  );
}

export default App;
