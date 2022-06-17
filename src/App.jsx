import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SeriesHome from "./Routes/SeriesHome/SeriesHome";
import Video from "./Routes/Video/Video";
import Teams from "./components/Teams/Teams";
import Score from "./components/NavbarLive/score";
import Feature from "./components/Features/Feature";
import Newshome from "./components/Features/Newshome";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div>
        <div className="container">
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/livescore" element={<Score />}></Route>
          <Route path="/series" element={<SeriesHome />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
          <Route path="/news" element={<Newshome />}></Route>
          <Route path="/features" element={<Feature />}></Route>
          <Route path="/videos" element={<Video />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
