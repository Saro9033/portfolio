import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { content, projects } from "../../data/portfolio";
import SectionHeading from "../SectionHeading";

function updateSpotlight(event) {
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const tiltX = ((y / bounds.height) * 2 - 1) * -1;
  const tiltY = ((x / bounds.width) * 2 - 1) * 1;
  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
  card.style.setProperty("--tilt-x", `${tiltX}deg`);
  card.style.setProperty("--tilt-y", `${tiltY}deg`);
  card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-2px)`;
}

function resetSpotlight(event) {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
  event.currentTarget.style.transform = "";
}

export default function Projects({ onProjectSelect }) {
  const [filter, setFilter] = useState("all");
  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="section-pad section-tint">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={content.projects.eyebrow}
          title={content.projects.title}
          description={content.projects.description}
        />
        <div
          className="mb-6 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects"
        >
          {content.projects.filters.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                filter === value
                  ? "filter-active"
                  : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)]"
              }`}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
            >
              {label}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              data-cursor-view
              className={`glass-panel spotlight-card rounded-3xl p-4 ${
                index === 0 ? "lg:col-span-12" : "lg:col-span-6"
              } ${index === 0 ? "lg:grid lg:grid-cols-[1.35fr_0.65fr] lg:gap-5" : ""}`}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.38, delay: (index % 4) * 0.05 }}
              onMouseMove={updateSpotlight}
              onMouseLeave={resetSpotlight}
              onClick={() => onProjectSelect(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onProjectSelect(project);
                }
              }}
              role="link"
              tabIndex={0}
            >
              <div className="group/project relative overflow-hidden rounded-2xl bg-[var(--page-raised)]">
                {project.thumbnail === "ai-bot" ? (
                  <div
                    className="ai-bot-preview aspect-video"
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
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover/project:scale-[1.055]"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/55 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover/project:opacity-100">
                  <span className="rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    Open preview
                  </span>
                </div>
              </div>
              <div className="px-1 pb-1 pt-5 lg:flex lg:flex-col lg:justify-center">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.62rem] uppercase tracking-wider text-[var(--subtle)]">
                    {project.category}
                  </span>
                </div>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-[var(--muted)]">
                  {project.description}
                </p>
                <button
                  type="button"
                  className="project-pill mt-3"
                  onClick={(event) => {
                    event.stopPropagation();
                    onProjectSelect(project);
                  }}
                >
                  {content.projects.detailsLabel}
                </button>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-[var(--page-raised)] px-2.5 py-1 text-[0.66rem] text-[var(--muted)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--line)] pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-pill"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub aria-hidden="true" /> {content.projects.sourceLabel}
                    </a>
                  )}
                  {project.webapp && (
                    <a
                      href={project.webapp}
                      className="project-pill"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt aria-hidden="true" /> {content.projects.liveLabel}
                    </a>
                  )}
                  {project.backendGithub && (
                    <a
                      href={project.backendGithub}
                      className="project-pill"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub aria-hidden="true" /> {content.projects.backendLabel}
                    </a>
                  )}
                  {project.backendUrl && (
                    <a
                      href={project.backendUrl}
                      className="project-pill"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt aria-hidden="true" />{" "}
                      {content.projects.backendLiveLabel}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
