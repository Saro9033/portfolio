import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { Bio, content } from "../../data/portfolio";
import SectionHeading from "../SectionHeading";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        "service_lptjq1g",
        "template_usxtgcq",
        formRef.current,
        "gfFD7j_wymcAVXZ1Q"
      )
      .then(() => {
        setStatus({ type: "success", message: content.contact.sentMessage });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS contact form submission failed:", error);
        setStatus({
          type: "error",
          message: content.contact.errorMessage,
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section className="section-pad section-tint">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={content.contact.eyebrow}
            title={content.contact.title}
            description={content.contact.description}
          />
          <a
            href={Bio.email}
            className="inline-flex items-center gap-3 text-sm text-[var(--accent-strong)] transition hover:gap-4"
          >
            <FaEnvelope aria-hidden="true" />
            {Bio.emailAddress}
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glass-panel rounded-3xl p-5 sm:p-8"
        >
          <h3 className="mb-6 text-xl font-semibold">{content.contact.formTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-xs font-medium text-[var(--muted)]">
              {content.contact.nameLabel}
              <input
                className="contact-field"
                required
                autoComplete="name"
                placeholder={content.contact.namePlaceholder}
                name="from_name"
              />
            </label>
            <label className="grid gap-2 text-xs font-medium text-[var(--muted)]">
              {content.contact.emailLabel}
              <input
                className="contact-field"
                type="email"
                required
                autoComplete="email"
                placeholder={content.contact.emailPlaceholder}
                name="from_email"
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-xs font-medium text-[var(--muted)]">
            {content.contact.subjectLabel}
            <input
              className="contact-field"
              required
              placeholder={content.contact.subjectPlaceholder}
              name="subject"
            />
          </label>
          <label className="mt-4 grid gap-2 text-xs font-medium text-[var(--muted)]">
            {content.contact.messageLabel}
            <textarea
              className="contact-field min-h-36 resize-y"
              required
              placeholder={content.contact.messagePlaceholder}
              rows="5"
              name="message"
            />
          </label>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button type="submit" className="primary-button" disabled={isSending}>
              {isSending
                ? content.contact.sendingButton
                : content.contact.sendButton}
              <FaArrowRight aria-hidden="true" />
            </button>
            <p
              className={`text-sm ${
                status.type === "error"
                  ? "text-red-500"
                  : "text-[var(--accent-strong)]"
              }`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
