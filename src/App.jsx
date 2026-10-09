import { useEffect } from "react";
import Navbar from "./components/Navbar";
import BackgroundEffects from "./components/BackgroundEffects";
import CustomCursor from "./components/CustomCursor";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-motion");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll("main section, main article, footer > div > div");
    targets.forEach((element, index) => {
      element.setAttribute("data-reveal", element.matches("article") ? "scale" : (index % 3 === 1 ? "right" : "up"));
      if (element.matches("article")) element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    });
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return () => root.classList.remove("js-motion");
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach((element) => observer.observe(element));
    return () => { observer.disconnect(); root.classList.remove("js-motion"); };
  }, []);

  return (
    <>
      <BackgroundEffects />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
