import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { BsSun, BsSunFill, BsMoon, BsMoonFill } from "react-icons/bs";

function App() {
  const currentDate = new Date().toLocaleDateString();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      id="App"
      className={`moving-gradient flex justify-center ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <div className="m-10">
        <div className="border-1 border-black h-full">
          <Router>
            <Routes>
              <Route path="/" element={<Home darkMode={isDarkMode} />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Router>
          <div className="date">
            <h1 className="text-white">{currentDate}</h1>
          </div>
          <div className="modes flex text-start">
            <button
              className={`text-white flex ${
                isDarkMode ? "sun-icon active" : "moon-icon active"
              }`}
              onClick={toggleMode}
            >
              {isDarkMode ? (
                <BsSunFill className="icon text-xl text-black hover:text-white animate-pulse" />
              ) : (
                <BsMoonFill className="icon text-xl text-white hover:text-black animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
