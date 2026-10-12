import { useState } from "react";
import {
  ArrowUp,
  Check,
  Copy,
} from "lucide-react";

function GithubIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-1.9c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.98 1.48 3.06 1.06.1-.7.39-1.18.7-1.45-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.3-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.07v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.97V9.02h2.96v9.32ZM6.45 7.75a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.9 10.59H15.4v-4.53c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.61H9.22V9.02h2.84v1.27h.04c.4-.73 1.36-1.5 2.8-1.5 2.99 0 3.55 1.97 3.55 4.54v5.01Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.4 21v-8.2h2.76l.41-3.2H13.4V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.3-.04-1.34-.14-2.55-.14-2.52 0-4.25 1.54-4.25 4.37V9.6H7.04v3.2h2.85V21h3.51Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Contact.jsx wale email ke saath same rakhein
const EMAIL = "shawaizirshad00@gmail.com";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Selected Works", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process & Stack", href: "#about" },
  { label: "Direct Inquiry", href: "#contact" },
];

const disciplines = [
  "E-commerce Websites",
  "React & Modern Frontend",
  "Web Development",
  "wordpress Development",
  "Responsive Websites",
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/shawaiz-irshad",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shawaiz-irshad-67483842a/",
    Icon: LinkedinIcon,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: InstagramIcon,
  },
];

export default function Footer( ) {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Clipboard API unavailable ho to email user ko visible rahega.
      setCopied(false);
    }
  }

  return (
    <footer className="relative z-10 w-full border-t border-[#9e8d83]/20 bg-[#170b07]/95 py-14 text-[#f6ddd4] backdrop-blur-2xl sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 sm:px-8 lg:gap-16 lg:px-16">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Identity and short bio */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-4">
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#9e8d83]/30 bg-[#2a1d17] font-serif text-lg text-[#f9b98c] shadow-[0_0_20px_rgba(197,139,98,0.12)]">
                S
              </span>

              <span>
                <span className="block text-sm font-bold uppercase tracking-wider text-[#f6ddd4]">
                  Shawaiz Irshad
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-[#f9b98c]">
                  Full Stack & Mern stack Developer
                </span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-6 text-[#d6c3b8]">
              Full Stack Developer. Building scalable web applications, 
              robust Node.js backends, and responsive React user interfaces 
              with absolute visual precision.
            </p>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#c58b62]/20 bg-[#352721]/70 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#f9b98c]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#f9b98c]" />
              Available for Work
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6ddd4]">
              Navigation
            </h2>

            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-block text-sm text-[#d6c3b8] transition-colors hover:text-[#f9b98c]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6ddd4]">
              Disciplines
            </h2>

            <ul className="flex flex-col gap-3">
              {disciplines.map((discipline) => (
                <li
                  key={discipline}
                  className="flex items-center gap-2.5 text-sm text-[#d6c3b8]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c58b62]/70" />
                  {discipline}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and social links */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6ddd4]">
              Let&apos;s Connect
            </h2>

            <p className="text-sm leading-6 text-[#d6c3b8]">
              Have a project idea? Get in touch to discuss it.
            </p>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="group flex w-full min-w-0 items-center justify-between gap-3 rounded-xl border border-[#9e8d83]/30 bg-[#2a1d17]/70 px-3.5 py-3 text-left text-sm text-[#f6ddd4] transition-colors hover:border-[#c58b62]/50 hover:text-[#f9b98c]"
              aria-label={copied ? "Email copied" : `Copy ${EMAIL}`}
            >
              <span className="truncate">{EMAIL}</span>
              {copied ? (
                <Check size={16} className="shrink-0 text-emerald-400" />
              ) : (
                <Copy
                  size={16}
                  className="shrink-0 text-[#f9b98c] transition-transform group-hover:scale-110"
                />
              )}
            </button>

            <p aria-live="polite" className="min-h-4 text-xs text-[#f9b98c]">
              {copied ? "Email copied to clipboard" : ""}
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9e8d83]/30 bg-[#352721]/80 text-[#d6c3b8] transition-colors hover:border-[#c58b62]/60 hover:bg-[#2a1d17] hover:text-[#f9b98c]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and back-to-top */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#9e8d83]/20 pt-6 text-center sm:flex-row sm:text-left">
          <span className="text-xs text-[#d6c3b8]">
            © {new Date().getFullYear()} Shawaiz Irshad. All rights reserved.
          </span>

          <span className="text-[10px] uppercase tracking-wider text-[#d6c3b8]/80">
            Designed with care · Built with React &amp; Tailwind
          </span>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f9b98c] transition-colors hover:text-[#f6ddd4]"
          >
            Back to top
            <ArrowUp
              size={15}
              className="transition-transform group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
