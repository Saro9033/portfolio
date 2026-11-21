import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { navigation, Bio } from "../../data/portfolio";

export default function Navbar({ darkMode, onThemeToggle }) {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-glass sticky top-0 z-50 border-b border-[var(--line)] backdrop-blur-2xl">
      <nav
        className="section-wrap flex h-[72px] items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        <Link
          to="about"
          smooth
          duration={500}
          offset={-72}
          className="flex shrink-0 cursor-pointer items-center gap-2 text-sm font-bold tracking-[0.12em]"
          aria-label="Back to top"
          onClick={closeMenu}
        >
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] text-sm text-[#10121a]">
            S
          </span>
          <span>{Bio.name.toUpperCase()}</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map(({ label, id }) => (
            <Link
              key={id}
              to={id}
              smooth
              duration={500}
              offset={-72}
              className={`relative cursor-pointer py-2 text-xs font-medium transition-colors ${
                activeSection === id
                  ? "text-[var(--text)]"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
              {activeSection === id && (
                <motion.span
                  className="nav-underline"
                  layoutId="active-nav"
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
            onClick={onThemeToggle}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
          >
            {darkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--line)] bg-[var(--page)]/95 px-5 pb-5 pt-3 backdrop-blur-2xl lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {navigation.map(({ label, id }) => (
              <Link
                key={id}
                to={id}
                smooth
                duration={500}
                offset={-72}
                onClick={closeMenu}
                className={`cursor-pointer border-b border-[var(--line)] py-3 text-sm ${
                  activeSection === id
                    ? "text-[var(--accent-strong)]"
                    : "text-[var(--muted)]"
                }`}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
