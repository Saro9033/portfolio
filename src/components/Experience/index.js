import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { content, experiences } from "../../data/portfolio";
import SectionHeading from "../SectionHeading";

function updateSpotlight(event) {
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const tiltX = ((y / bounds.height) * 2 - 1) * -1.5;
  const tiltY = ((x / bounds.width) * 2 - 1) * 1.5;
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

export default function Experience() {
  return (
    <section className="section-pad relative">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={content.experience.eyebrow}
          title={content.experience.title}
          description={content.experience.description}
        />
        <div className="relative space-y-5 pl-8 sm:pl-12">
          <div
            className="experience-track absolute bottom-8 left-[9px] top-8 w-px sm:left-[17px]"
            aria-hidden="true"
          />
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              className="glass-panel spotlight-card rounded-3xl p-5 sm:p-7"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              onMouseMove={updateSpotlight}
              onMouseLeave={resetSpotlight}
            >
              <span className="absolute -left-[31px] top-7 grid h-8 w-8 place-items-center rounded-full border border-[var(--line)] bg-[var(--page)] text-[var(--accent-strong)] sm:-left-[41px]">
                <FaBriefcase className="text-xs" aria-hidden="true" />
              </span>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="section-eyebrow mb-2">0{index + 1} / EXPERIENCE</p>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {experience.title}
                  </h3>
                </div>
                <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[0.62rem] uppercase tracking-wider text-[var(--subtle)]">
                  {content.experience.cardLabel}
                </span>
              </div>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                {experience.description}
              </p>
              <div className="mt-5">
                <p className="section-eyebrow mb-2">Tech stack</p>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${experience.title} technology stack`}
                >
                  {experience.stack.map((item) => (
                    <li
                      key={item}
                      className="stack-chip rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.7rem] font-medium text-[var(--muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
