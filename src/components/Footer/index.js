import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Bio, content, navigation } from "../../data/portfolio";

const socialLinks = [
  { label: "GitHub", href: Bio.github, Icon: FaGithub, external: true },
  { label: "LinkedIn", href: Bio.linkedin, Icon: FaLinkedinIn, external: true },
  { label: "WhatsApp", href: Bio.whatsapp, Icon: FaWhatsapp, external: true },
  { label: "Call", href: Bio.call, Icon: FaPhone },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="section-wrap flex flex-col items-center justify-between gap-7 md:flex-row">
        <div className="text-center md:text-left">
          <a href="#about" className="text-sm font-bold tracking-[0.14em]">
            {Bio.name.toUpperCase()}
          </a>
          <p className="mt-2 text-xs text-[var(--subtle)]">{content.footer.tagline}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3" aria-label="Footer navigation">
          {navigation.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              smooth
              duration={500}
              offset={-72}
              className="cursor-pointer text-xs text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          {socialLinks.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              className="social-link !h-9 !w-9 text-sm"
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel="noreferrer"
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-[0.68rem] text-[var(--subtle)]">
        &copy; {new Date().getFullYear()} {Bio.name}.{" "}
        {content.footer.copyrightSuffix}
      </p>
    </footer>
  );
}
