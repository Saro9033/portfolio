import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <Reveal className={centered ? "mb-12 text-center" : "mb-12"}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className={`section-title ${centered ? "mx-auto" : ""}`}>{title}</h2>
      {description && (
        <p className={`section-description ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}