import { motion } from "framer-motion";
import {
  FaBolt,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaFlask,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLightbulb,
  FaNodeJs,
  FaPaintBrush,
  FaReact,
  FaSearch,
  FaServer,
} from "react-icons/fa";
import { content, skillGroups } from "../../data/portfolio";
import SectionHeading from "../SectionHeading";

const skillIcons = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  typescript: FaCode,
  tailwind: FaPaintBrush,
  react: FaReact,
  next: FaCode,
  node: FaNodeJs,
  express: FaServer,
  database: FaDatabase,
  webhook: FaBolt,
  realtime: FaBolt,
  git: FaGitAlt,
  github: FaGithub,
  research: FaSearch,
  poc: FaLightbulb,
};

function SkillCard({ group, index }) {
  return (
    <motion.article
      className="glass-panel spotlight-card rounded-3xl p-6 sm:p-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--mouse-x",
          `${event.clientX - bounds.left}px`
        );
        event.currentTarget.style.setProperty(
          "--mouse-y",
          `${event.clientY - bounds.top}px`
        );
      }}
    >
      <div className="mb-6 flex items-start justify-between gap-5">
        <div>
          <p className="section-eyebrow mb-2">0{index + 1}</p>
          <h3 className="text-xl font-semibold tracking-tight">{group.title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
            {group.description}
          </p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[var(--line)] bg-[var(--page-raised)] text-[var(--accent-strong)]">
          {index === 0 ? <FaCode /> : index === 1 ? <FaDatabase /> : <FaFlask />}
        </span>
      </div>
      <ul className="flex flex-wrap gap-2.5">
        {group.skills.map((skill) => {
          const Icon = skillIcons[skill.icon] || FaCode;
          return (
            <li
              key={skill.name}
              className="skill-chip inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium sm:text-sm"
            >
              <Icon className="skill-chip-icon" aria-hidden="true" />
              {skill.name}
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
}

export default function Skills() {
  return (
    <section className="section-pad">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={content.skills.eyebrow}
          title={content.skills.title}
          description={content.skills.description}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={index === 2 ? "md:col-span-2" : ""}
            >
              <SkillCard group={group} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
