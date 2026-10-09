
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";

// Contact details
const CONTACT_EMAIL = "shawaizirshad00@gmail.com";
const PHONE_NUMBER = "+92 370 076 6618";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSending) return;

    const form = event.currentTarget;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("config-error");
      return;
    }

    const formData = new FormData(form);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        { publicKey }
      );

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  const phoneHref = PHONE_NUMBER
    ? `tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`
    : null;

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative w-full overflow-hidden py-20 text-[#f6ddd4] sm:py-14 md:py-16"
    >
      {/* Copper glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[300px] w-[min(700px,100vw)] -translate-x-1/2 rounded-full bg-[#c58b62]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c58b62]/20 bg-[#2a1d17]/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f9b98c] backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#f9b98c]" />
            Let Work Together
          </span>

          <h2
            className="mt-6 text-4xl leading-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            Have a project in mind?
          </h2>

          <p className="mt-4 text-base leading-7 text-[#d6c3b8] sm:text-lg">
            Tell me about your project — I’ll get in touch with you soon.
          </p>
        </div>

        {/* Form + contact details */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#9e8d83]/20 bg-[#2a1d17]/80 p-5 shadow-xl backdrop-blur-md sm:p-8 lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#d6c3b8]"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  required
                  maxLength={100}
                  className="w-full rounded-xl border border-[#9e8d83]/25 bg-[#170b07]/70 px-4 py-3 text-sm text-[#f6ddd4] outline-none transition placeholder:text-[#9e8d83] focus:border-[#c58b62] focus:ring-2 focus:ring-[#c58b62]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#d6c3b8]"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                  className="w-full rounded-xl border border-[#9e8d83]/25 bg-[#170b07]/70 px-4 py-3 text-sm text-[#f6ddd4] outline-none transition placeholder:text-[#9e8d83] focus:border-[#c58b62] focus:ring-2 focus:ring-[#c58b62]/20"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#d6c3b8]"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What's your project?"
                required
                maxLength={200}
                className="w-full rounded-xl border border-[#9e8d83]/25 bg-[#170b07]/70 px-4 py-3 text-sm text-[#f6ddd4] outline-none transition placeholder:text-[#9e8d83] focus:border-[#c58b62] focus:ring-2 focus:ring-[#c58b62]/20"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#d6c3b8]"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Details about your project..."
                required
                maxLength={5000}
                className="w-full resize-y rounded-xl border border-[#9e8d83]/25 bg-[#170b07]/70 px-4 py-3 text-sm leading-6 text-[#f6ddd4] outline-none transition placeholder:text-[#9e8d83] focus:border-[#c58b62] focus:ring-2 focus:ring-[#c58b62]/20"
              />
            </div>

            {/* Submission status */}
            {status === "success" && (
              <p
                role="status"
                className="mt-4 text-sm text-green-400"
              >
                Message sent successfully! Thank you for contacting me.
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="mt-4 text-sm text-red-400">
                Failed to send your message. Please try again.
              </p>
            )}

            {status === "config-error" && (
              <p role="alert" className="mt-4 text-sm text-red-400">
                Email service is not configured. Please try again later.
              </p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c58b62] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#301400] shadow-[0_4px_24px_rgba(197,139,98,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#f9b98c] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSending ? "Sending..." : "Send Message"}

              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
            </button>
          </form>

          {/* Email and phone details */}
          <aside className="flex flex-col gap-4 lg:col-span-5">
            <div className="rounded-2xl border border-[#9e8d83]/20 bg-[#2a1d17]/80 p-6 shadow-lg backdrop-blur-md sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f9b98c]">
                Direct Contact
              </p>

              <h3
                className="mt-3 text-2xl text-[#f6ddd4]"
                style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
              >
                Let's talk
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#d6c3b8]">
                For direct contact
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-6 flex items-center gap-4 rounded-xl border border-[#9e8d83]/20 bg-[#170b07]/50 p-4 transition-colors hover:border-[#c58b62]/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c58b62]/15 text-[#f9b98c]">
                  <Mail size={20} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#9e8d83]">
                    Email
                  </span>

                  <span className="mt-1 block break-all text-sm text-[#f6ddd4]">
                    {CONTACT_EMAIL}
                  </span>
                </span>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-[#f9b98c]"
                />
              </a>

              <div className="mt-3 flex items-center gap-4 rounded-xl border border-[#9e8d83]/20 bg-[#170b07]/50 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c58b62]/15 text-[#f9b98c]">
                  <Phone size={20} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#9e8d83]">
                    Phone
                  </span>

                  {phoneHref && (
                    <a
                      href={phoneHref}
                      className="mt-1 block text-sm text-[#f6ddd4] transition-colors hover:text-[#f9b98c]"
                    >
                      {PHONE_NUMBER}
                    </a>
                  )}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#c58b62]/20 bg-gradient-to-br from-[#352721] to-[#1d100b] p-6 sm:p-8">
              <p
                className="text-xl italic leading-relaxed text-[#f9b98c] sm:text-2xl"
                style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
              >
                "Let's build something exceptional."
              </p>

              <p className="mt-3 text-xs uppercase tracking-wider text-[#d6c3b8]">
                Available for selected projects
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
