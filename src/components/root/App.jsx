import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Navigation from "../navigation/Navigation";
import ScrollTop from "../scroll_top/ScrollTop";
import About from "../pages/About";
import NotFound from "../not_found/NotFound";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollTop />
    </div>
  );
}

export default App;
