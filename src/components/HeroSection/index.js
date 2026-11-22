import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Bio, content, projects } from "../../data/portfolio";
import HeroImg from "../../images/HeroImage.png";
import CountUp from "../CountUp";
import MagneticLink from "../MagneticLink";
import Reveal from "../Reveal";

export default function HeroSection() {
  const handlePhotoMove = (event) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
    card.style.setProperty("--photo-x", `${rotateX}deg`);
    card.style.setProperty("--photo-y", `${rotateY}deg`);
  };

  const resetPhoto = (event) => {
    event.currentTarget.style.setProperty("--photo-x", "0deg");
    event.currentTarget.style.setProperty("--photo-y", "0deg");
  };

  return (
    <>
         <Reveal delay={0.25} className="mt-7 photo-reveal relative lg:hidden mx-auto w-full max-w-[280px] sm:max-w-[330px]" >
          <div className="molecule-field" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i />
            <b /><b /><b />
          </div>
          <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-[var(--accent)]/25 to-[var(--accent-strong)]/15 blur-2xl" />
          <div
            className="photo-card glass-panel relative rounded-[2rem] p-3"
            onMouseMove={handlePhotoMove}
            onMouseLeave={resetPhoto}
          >
            <img
              src={HeroImg}
              alt={`${Bio.name}, ${Bio.title}`}
              className="aspect-[0.92] w-full rounded-[1.5rem] object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white backdrop-blur-xl">
              <div>
                <p className="text-sm font-semibold">{Bio.name}</p>
                <p className="mt-1 text-xs text-white/65">{Bio.title}</p>
              </div>
              <div className="text-right">
                <span className="block text-lg font-semibold">
                  <CountUp value={projects.length} />+
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/65">
                  {content.hero.projectCountLabel}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
    <section
      id="about"
      className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden pb-10 pt-10 md:pb-4 md:pt-10"
    >
   
      <div className="hero-grid absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div className="aurora -right-[22%] -top-[24%]" aria-hidden="true" />
      <div className="aurora aurora-secondary -bottom-[26%] left-[12%]" aria-hidden="true" />
        
      <div className="section-wrap grid items-center gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-8">
        <div className="relative z-10">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--muted)] backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent-strong)]" />
              <span>
                <CountUp value={content.hero.experienceYears} />+{" "}
                {content.hero.experienceSuffix}
              </span>
            </div>
          </Reveal>

          <motion.h1
            className="hero-headline max-w-4xl text-[clamp(2.7rem,6.2vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.06em]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
            }}
          >
            {content.hero.headline.map((word) => (
              <motion.span
                key={word}
                className="mr-[0.2em] inline-block"
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(9px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <Reveal delay={0.28} className="mt-7 max-w-[670px]">
            <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
              {Bio.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticLink className="primary-button" href="#projects">
                {content.hero.viewWork} <FaArrowRight aria-hidden="true" />
              </MagneticLink>
              <MagneticLink className="secondary-button" href="#contact">
                {content.hero.contact}
              </MagneticLink>
              <MagneticLink
                className="secondary-button"
                href={Bio.resume}
                target="_blank"
                rel="noreferrer"
                aria-label={content.hero.resumeAriaLabel}
              >
                <FaDownload aria-hidden="true" /> {content.hero.resume}
              </MagneticLink>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <a
                className="social-link"
                href={Bio.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub aria-hidden="true" />
              </a>
              <a
                className="social-link"
                href={Bio.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
              <span className="ml-1 text-xs tracking-wide text-[var(--subtle)]">
                {content.hero.availability}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="photo-reveal relative hidden lg:block mx-auto w-full max-w-[390px] lg:max-w-[430px]" >
          <div className="molecule-field" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i />
            <b /><b /><b />
          </div>
          <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-[var(--accent)]/25 to-[var(--accent-strong)]/15 blur-2xl" />
          <div
            className="photo-card glass-panel relative rounded-[2rem] p-3"
            onMouseMove={handlePhotoMove}
            onMouseLeave={resetPhoto}
          >
            <img
              src={HeroImg}
              alt={`${Bio.name}, ${Bio.title}`}
              className="aspect-[0.92] w-full rounded-[1.5rem] object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white backdrop-blur-xl">
              <div>
                <p className="text-sm font-semibold">{Bio.name}</p>
                <p className="mt-1 text-xs text-white/65">{Bio.title}</p>
              </div>
              <div className="text-right">
                <span className="block text-lg font-semibold">
                  <CountUp value={projects.length} />+
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/65">
                  {content.hero.projectCountLabel}
                </span>
              </div>
            </div>
          </div>
          <motion.div
            className="photo-status-badge glass-panel"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {content.hero.ideaToDeployment}
          </motion.div>
        </Reveal>
      </div>
      {/* <a
        href="#skills"
        className="hero-scroll-indicator"
        aria-label="Scroll to skills"
      >
        <span className="sr-only">Scroll to skills</span>
      </a> */}
    </section>
    </>
  );
}
