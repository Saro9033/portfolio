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
  const [hoverType, setHoverType] = useState("");
  const [pressed, setPressed] = useState(false);
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
      const target = event.target.closest(
        "a, button, [role='button'], input, textarea, [data-cursor-view]"
      );
      setHoverType(
        target?.matches("[data-cursor-view]")
          ? "view"
          : target
          ? "interactive"
          : ""
      );
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{ x, y }}
        aria-hidden="true"
      />
      <motion.div
        className={`custom-cursor-ring${hoverType ? ` cursor-${hoverType}` : ""}${pressed ? " cursor-pressed" : ""}`}
        style={{ x: smoothX, y: smoothY }}
        aria-hidden="true"
      >
        {hoverType === "view" && <span>View</span>}
      </motion.div>
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [darkMode]);

  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setShowBackToTop(window.scrollY > 700));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);

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
          <motion.button
            type="button"
            className="back-to-top"
            aria-label="Back to top"
            initial={false}
            animate={{
              opacity: showBackToTop ? 1 : 0,
              y: showBackToTop ? 0 : 12,
              pointerEvents: showBackToTop ? "auto" : "none",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span aria-hidden="true">↑</span>
          </motion.button>
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;
