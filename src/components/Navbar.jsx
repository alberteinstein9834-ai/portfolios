import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, UserRound, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    let animationFrame = 0;
    function updateActiveSection() {
      animationFrame = 0;
      const activationPoint = window.innerHeight * 0.35;
      const currentSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= activationPoint && bounds.bottom > activationPoint;
      });

      if (currentSection) setActiveSection(currentSection.id);
    }

    function scheduleUpdate() {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-container-high/40 bg-surface/90 shadow-[0_1px_12px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      {/* Navbar bar */}
      <div className="mx-auto flex h-16 w-full max-w-7xl min-w-0 items-center justify-between gap-2 px-3 xs:px-4 sm:h-20 sm:gap-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Shawaiz Irshad home"
          className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-surface-container-low font-headline-sm text-sm text-primary sm:h-10 sm:w-10 sm:text-base">
            S
          </span>

          <span className="block min-w-0">
            <span className="block truncate font-headline-sm text-[13px] leading-tight text-on-surface min-[380px]:text-sm sm:text-base md:text-lg">
              Shawaiz Irshad
            </span>
            <span className="mt-0.5 block truncate text-[7px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant min-[380px]:text-[8px] sm:mt-1 sm:text-[9px] sm:tracking-[0.18em]">
              Design &amp; Code
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={
                activeSection === item.href.slice(1) ? "location" : undefined
              }
              onClick={closeMenu}
              className={`rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors xl:px-4 ${
                activeSection === item.href.slice(1)
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:border-primary hover:bg-primary hover:text-on-primary"
          >
            Let&apos;s Talk
            <ArrowUpRight size={15} />
          </a>

          <a
            href="#about"
            aria-label="About"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/50 text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
          >
            <UserRound size={16} strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-outline-variant/50 text-on-surface transition-colors hover:border-primary hover:text-primary sm:h-10 sm:w-10 lg:hidden"
        >
          {isMenuOpen ? (
            <X size={21} strokeWidth={1.5} />
          ) : (
            <Menu size={21} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile dropdown: overlays page; scroll stays inside this menu */}
      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full overflow-x-hidden border-b border-surface-container-high/40 bg-surface/95 shadow-xl backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[calc(100dvh-4rem)] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-8"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              aria-current={
                activeSection === item.href.slice(1) ? "location" : undefined
              }
              className={`flex min-h-12 items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-colors ${
                activeSection === item.href.slice(1)
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
              }`}
            >
              {item.name}
              <ArrowUpRight size={16} />
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
            className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-on-primary transition-colors hover:bg-primary-container"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
