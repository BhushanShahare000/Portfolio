import React from "react";
import "./App.css";
import Header from "./components/header";
import { useContext } from "react";
import { ThemeContext } from "./components/themeContext";
import Home from "./components/home";
import About from "./components/about";
import Social from "./components/social";
import Skill from "./components/skill";
import Projects from "./components/projects";
import Achivement from "./components/achivement";
import Contact from "./components/contact";
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen  ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <Social />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Achivement />
      <Contact />
    </div>
  );
}

export default App;
