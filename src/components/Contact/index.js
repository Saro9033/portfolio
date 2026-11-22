import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { Bio, content } from "../../data/portfolio";
import SectionHeading from "../SectionHeading";
import MagneticLink from "../MagneticLink";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [touched, setTouched] = useState({});
  const [toastVisible, setToastVisible] = useState(false);

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
        setTouched({});
        setToastVisible(true);
        window.setTimeout(() => setToastVisible(false), 4000);
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

  const validateField = (event) => {
    setTouched((current) => ({
      ...current,
      [event.target.name]: event.target.validity.valid,
    }));
  };

  const fieldClass = (name) =>
    `contact-field ${
      touched[name] === true
        ? "!border-[var(--accent-strong)]"
        : touched[name] === false
        ? "!border-red-500"
        : ""
    }`;

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
                required
                autoComplete="name"
                placeholder={content.contact.namePlaceholder}
                name="from_name"
                onBlur={validateField}
                className={fieldClass("from_name")}
              />
            </label>
            <label className="grid gap-2 text-xs font-medium text-[var(--muted)]">
              {content.contact.emailLabel}
              <input
                type="email"
                required
                autoComplete="email"
                placeholder={content.contact.emailPlaceholder}
                name="from_email"
                onBlur={validateField}
                className={fieldClass("from_email")}
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-xs font-medium text-[var(--muted)]">
            {content.contact.subjectLabel}
            <input
              required
              placeholder={content.contact.subjectPlaceholder}
              name="subject"
              onBlur={validateField}
              className={fieldClass("subject")}
            />
          </label>
          <label className="mt-4 grid gap-2 text-xs font-medium text-[var(--muted)]">
            {content.contact.messageLabel}
            <textarea
              required
              placeholder={content.contact.messagePlaceholder}
              rows="5"
              name="message"
              onBlur={validateField}
              className={`min-h-36 ${fieldClass("message")}`}
            />
          </label>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <MagneticLink
              as="button"
              type="submit"
              className="primary-button"
              disabled={isSending}
            >
              {isSending
                ? content.contact.sendingButton
                : content.contact.sendButton}
              <FaArrowRight aria-hidden="true" />
            </MagneticLink>
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
      {toastVisible && (
        <div className="contact-toast" role="status" aria-live="polite">
          <span className="h-2 w-2 rounded-full bg-[var(--accent-strong)]" />
          {content.contact.sentMessage}
        </div>
      )}
    </section>
  );
}
