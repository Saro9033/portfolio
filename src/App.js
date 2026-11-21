import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  motion,
  MotionConfig,
  useScroll,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LazySection from "./components/LazySection";
import "./App.css";

const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { damping: 26, stiffness: 350, mass: 0.35 });
  const smoothY = useSpring(y, { damping: 26, stiffness: 350, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    setEnabled(media.matches);
    if (!media.matches) return undefined;

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="custom-cursor"
      style={{ x: smoothX, y: smoothY }}
      aria-hidden="true"
    />
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [darkMode]);

  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <div className="site-shell" data-theme={darkMode ? "dark" : "light"}>
          <motion.div
            className="scroll-progress"
            style={{ scaleX: scrollYProgress }}
            aria-hidden="true"
          />
          <CustomCursor />
          <Navbar
            darkMode={darkMode}
            onThemeToggle={() => setDarkMode((value) => !value)}
          />
          <main>
            <HeroSection />
            <LazySection id="skills" minHeight="500px">
              <Skills />
            </LazySection>
            <LazySection id="experience" minHeight="640px">
              <Experience />
            </LazySection>
            <LazySection id="projects" minHeight="520px">
              <Projects onProjectSelect={setSelectedProject} />
            </LazySection>
            <LazySection id="education" minHeight="360px">
              <Education />
            </LazySection>
            <LazySection id="contact" minHeight="520px">
              <Contact />
            </LazySection>
            <LazySection minHeight="220px">
              <Footer />
            </LazySection>
          </main>
          {selectedProject && (
            <Suspense fallback={null}>
              <ProjectDetails
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </Suspense>
          )}
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;
