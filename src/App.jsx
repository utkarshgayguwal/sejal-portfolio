import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Achievements from "./components/Achievements.jsx";
import Education from "./components/Education.jsx";
import Quote from "./components/Quote.jsx";
import Contact from "./components/Contact.jsx";
import { theme, profile } from "./data.jsx";
import { ScrollTrigger } from "./hooks/useGsap.js";

export default function App() {
  // Push theme colours from data.jsx into CSS variables used by Tailwind
  useEffect(() => {
    const root = document.documentElement.style;
    const rgb = (hex) => {
      const n = parseInt(hex.replace("#", ""), 16);
      return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
    };
    root.setProperty("--navy", rgb(theme.navy));
    root.setProperty("--navy-light", rgb(theme.navyLight));
    root.setProperty("--peach", rgb(theme.peach));
    root.setProperty("--peach-dark", rgb(theme.peachDark));
    root.setProperty("--cream", rgb(theme.cream));
    root.setProperty("--gold", rgb(theme.gold));
    document.title = profile.siteTitle;

    // Re-measure scroll positions once fonts/images have loaded
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Education />
        <Quote />
      </main>
      <Contact />
    </div>
  );
}
