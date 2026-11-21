import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { content, projects } from "../../data/portfolio";
import SectionHeading from "../SectionHeading";

const projectColumnClasses = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
];

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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`glass-panel spotlight-card rounded-3xl p-4 ${projectColumnClasses[index]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.48, delay: (index % 3) * 0.08 }}
              onMouseMove={updateSpotlight}
              onMouseLeave={resetSpotlight}
            >
              <div className="overflow-hidden rounded-2xl bg-[var(--page-raised)]">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="aspect-[1.62] w-full object-cover transition-transform duration-500 hover:scale-[1.035]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-1 pb-1 pt-5">
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
                  className="mt-3 text-xs font-semibold text-[var(--accent-strong)] transition hover:opacity-75"
                  onClick={() => onProjectSelect(project)}
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
                <div className="mt-5 flex gap-4 border-t border-[var(--line)] pt-4 text-xs font-medium text-[var(--muted)]">
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 transition hover:text-[var(--accent-strong)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub aria-hidden="true" /> {content.projects.sourceLabel}
                    </a>
                  )}
                  {project.webapp && (
                    <a
                      href={project.webapp}
                      className="inline-flex items-center gap-2 transition hover:text-[var(--accent-strong)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt aria-hidden="true" /> {content.projects.liveLabel}
                    </a>
                  )}
                  {project.backendGithub && (
                    <a
                      href={project.backendGithub}
                      className="inline-flex items-center gap-2 transition hover:text-[var(--accent-strong)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub aria-hidden="true" /> {content.projects.backendLabel}
                    </a>
                  )}
                  {project.backendUrl && (
                    <a
                      href={project.backendUrl}
                      className="inline-flex items-center gap-2 transition hover:text-[var(--accent-strong)]"
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
        </div>
      </div>
    </section>
  );
}
