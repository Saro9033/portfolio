import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { content, education } from "../../data/portfolio";
import SectionHeading from "../SectionHeading";

export default function Education() {
  return (
    <section className="section-pad">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={content.education.eyebrow}
          title={content.education.title}
          description={content.education.description}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              className="glass-panel rounded-3xl p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="mb-6 grid h-11 w-11 place-items-center rounded-2xl border border-[var(--line)] bg-[var(--page-raised)] text-[var(--accent-strong)]">
                <FaGraduationCap aria-hidden="true" />
              </span>
              <p className="section-eyebrow mb-2">{item.date}</p>
              <h3 className="text-lg font-semibold leading-snug">{item.degree}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.school}</p>
              <p className="mt-4 inline-flex rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--accent-strong)]">
                {item.grade}
              </p>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
