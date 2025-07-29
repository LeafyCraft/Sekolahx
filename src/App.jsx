import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Profil from "./components/Profil";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: Get from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Profil />
      <About />
      <Gallery />
      <Footer />
      <ScrollToTopButton />
      <AudioPlayer/>
    </>
  );
}

export default App;
