import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Plugins from "./pages/Plugins";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";

const ABOUT_URL = "/about-me";
const PLUGINS_URL = "/jquery-plugins";
const FRONTEND_URL = "/frontend-showcase";
const BACKEND_URL = "/backend-showcase";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path={FRONTEND_URL} element={<Frontend />} />
        <Route path={BACKEND_URL} element={<Backend />} />
        <Route path={PLUGINS_URL} element={<Plugins />} />
        <Route path={ABOUT_URL} element={<About />} />
        <Route path="*" element={<div>Page Does Not Exist</div>} />
      </Routes>
    </BrowserRouter>
  );
}

function NavBar() {
  return (
    <nav>
      <Link className="navbar-button" to="/">
        Home
      </Link>
      <Link className="navbar-button" to={FRONTEND_URL}>
        Front-End Showcase
      </Link>
      <Link className="navbar-button" to={BACKEND_URL}>
        Back-End Showcase
      </Link>
      <Link className="navbar-button" to={PLUGINS_URL}>
        jQuery Plugins
      </Link>
      <Link className="navbar-button" to={ABOUT_URL}>
        About Me
      </Link>
    </nav>
  );
}

export default App;
