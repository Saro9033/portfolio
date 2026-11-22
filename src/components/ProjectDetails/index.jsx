import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { content } from "../../data/portfolio";

export default function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  const links = [
    { href: project.github, label: content.projects.sourceLabel, Icon: FaGithub },
    { href: project.webapp, label: content.projects.liveLabel, Icon: FaExternalLinkAlt },
    {
      href: project.backendGithub,
      label: content.projects.backendLabel,
      Icon: FaGithub,
    },
    {
      href: project.backendUrl,
      label: content.projects.backendLiveLabel,
      Icon: FaExternalLinkAlt,
    },
  ].filter((link) => link.href);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="presentation"
      >
        <motion.div
          ref={dialogRef}
          className="glass-panel relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-5 shadow-2xl sm:p-8"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.24 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          tabIndex="-1"
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel-solid)] text-[var(--muted)] transition hover:text-[var(--text)]"
            onClick={onClose}
            aria-label={content.projects.dialogCloseLabel}
          >
            <FaTimes aria-hidden="true" />
          </button>
          {project.thumbnail === "ai-bot" ? (
            <div
              className="ai-bot-preview mb-6 aspect-[1.8]"
              role="img"
              aria-label="AI Mail Bot dashboard preview"
            >
              <div className="ai-bot-orb" aria-hidden="true" />
              <div className="ai-bot-window">
                <span className="ai-bot-dot ai-bot-dot-red" />
                <span className="ai-bot-dot ai-bot-dot-yellow" />
                <span className="ai-bot-dot ai-bot-dot-green" />
                <div className="ai-bot-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          ) : (
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="mb-6 aspect-[1.8] w-full rounded-2xl object-fill"
            />
          )}
          <p className="section-eyebrow">{project.category}</p>
          <h2
            id="project-dialog-title"
            className="pr-10 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {project.title}
          </h2>
          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[var(--muted)] sm:text-base">
            {project.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project technologies">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[var(--line)] bg-[var(--page-raised)] px-3 py-1.5 text-xs text-[var(--muted)]"
              >
                {tag}
              </li>
            ))}
          </ul>
          {links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3 border-t border-[var(--line)] pt-5">
              {links.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button !min-h-10 !px-4 !text-xs"
                >
                  <Icon aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
