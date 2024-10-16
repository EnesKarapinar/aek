import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Api from "../../../api/api.json";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="api" element={<Api />} />
    </Routes>
  );
}

export default App;
