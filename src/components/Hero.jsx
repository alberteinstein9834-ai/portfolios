import { ArrowDown, Download, Code2 } from "lucide-react";
import shawaizImage from "../assets/images/shahwaiz.webp";
import resume from "../assets/shaz.pdf";

const stats = [
  { value: "0.5+", label: "Years Experience" },
  { value: "4+", label: "Projects Done" },
  { value: "2+", label: "Global Clients" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-24 text-[#f6ddd4] sm:px-8 md:gap-16 md:pb-28 md:pt-28 lg:grid-cols-12 lg:gap-12 lg:px-16"
    >
      {/* Soft glow — BackgroundEffects already ho to isay hata sakte hain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-[#c58b62]/10 blur-[120px]"
      />

      {/* Left column */}
      <div className="relative z-10 flex flex-col gap-7 lg:col-span-7">
        {/* Availability status */}
        <div className="inline-flex self-start items-center gap-2 rounded-full border border-[#c58b62]/25 bg-[#2a1d17]/80 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#f9b98c]" />
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d6c3b8]">
            Available for the work.
          </span>
        </div>

        {/* Name and title */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#f9b98c]">
            Hello, I&apos;m
          </p>

          <h1
            className="text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            Shawaiz <span className="text-[#f9b98c]">Irshad</span>
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <h2 className="text-lg font-medium tracking-wide text-[#f9b98c] sm:text-xl">
              Full Stack &amp; Mern stack Developer
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-xl text-base leading-8 text-[#d6c3b8] sm:text-lg">
          Full Stack Developer. Building scalable web applications, robust
          Node.js backends, and responsive React user interfaces with absolute
          visual precision.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[#c58b62] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#301400] shadow-[0_4px_24px_rgba(197,139,98,0.3)] transition duration-300 hover:scale-[1.02] hover:bg-[#f9b98c] hover:shadow-[0_4px_32px_rgba(212,154,106,0.4)] active:scale-[0.98]"
          >
            View My Work
            <ArrowDown
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>

          <a
            href={resume}
            download
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#9e8d83]/30 bg-[#352721]/80 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#f6ddd4] transition duration-300 hover:bg-[#41312b]"
          >
            <Download
              size={18}
              className="text-[#f9b98c] transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="mt-2 grid max-w-xl grid-cols-3 gap-3 rounded-xl border border-[#9e8d83]/20 bg-[#170b07]/80 p-4 backdrop-blur-md sm:gap-4 sm:p-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={
                index > 0 ? "border-l border-[#9e8d83]/20 pl-3 sm:pl-4" : ""
              }
            >
              <p
                className="text-2xl tracking-tight text-[#f9b98c] sm:text-3xl"
                style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase leading-4 tracking-wider text-[#d6c3b8] sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — full column width */}
      <div className="relative mt-2 flex w-full items-center justify-center lg:col-span-5 lg:mt-0">
        {/* Decorative orbit */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute flex h-[min(88vw,540px)] w-[min(88vw,540px)] items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-[#c58b62]/15 blur-[100px]" />

          <svg
            viewBox="0 0 500 500"
            fill="none"
            className="absolute inset-0 h-full w-full animate-[spin_120s_linear_infinite] opacity-50"
          >
            <circle
              cx="250"
              cy="250"
              r="238"
              stroke="#c58b62"
              strokeDasharray="4 8"
            />
            <circle
              cx="250"
              cy="250"
              r="205"
              stroke="#f9b98c"
              strokeDasharray="2 14"
            />
            <circle
              cx="250"
              cy="250"
              r="165"
              stroke="#c58b62"
              strokeDasharray="12 12"
            />
            <line
              x1="250"
              y1="8"
              x2="250"
              y2="492"
              stroke="#c58b62"
              strokeDasharray="4 8"
            />
            <line
              x1="8"
              y1="250"
              x2="492"
              y2="250"
              stroke="#c58b62"
              strokeDasharray="4 8"
            />
            <circle cx="250" cy="10" r="4" fill="#f9b98c" />
            <circle cx="490" cy="250" r="4" fill="#f9b98c" />
            <circle cx="250" cy="490" r="4" fill="#f9b98c" />
            <circle cx="10" cy="250" r="4" fill="#f9b98c" />
          </svg>

          <div className="absolute h-[78%] w-[78%] rotate-45 rounded-[28%] border border-dashed border-[#f9b98c]/40" />
        </div>

        {/* Portrait frame — w-full means the card fills the right grid column */}
        <div className="group relative z-10 aspect-[4/5] w-full rounded-2xl border border-[#9e8d83]/30 bg-gradient-to-b from-[#352721] via-[#2a1d17] to-[#170b07] p-2.5 shadow-[0_20px_50px_rgba(23,11,7,0.7)]">
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#261913]">
            {/* Fallback background shows if the image path isn't found */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl text-[#c58b62]/50">S</span>
            </div>

            <img
              src={shawaizImage}
              alt="Shawaiz Irshad"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              className="relative h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1d100b] via-transparent to-transparent opacity-60" />
          </div>

          {/* Top badge */}
          <div className="absolute -right-3 -top-3 z-20 flex items-center gap-2 rounded-full border border-[#c58b62]/30 bg-[#352721]/90 px-3.5 py-2 shadow-lg backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f9b98c]" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#f6ddd4]">
              Endure with beautiful patience.
            </span>
          </div>

          {/* Bottom badge */}
          <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-3 rounded-xl border border-[#9e8d83]/30 bg-[#352721]/90 px-4 py-2.5 shadow-xl backdrop-blur-md">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c58b62] text-[#301400]">
              <Code2 size={18} />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#f6ddd4]">
                Creative Technologist
              </p>
              <p className="mt-0.5 text-[11px] text-[#d6c3b8]">
                React &amp; Node js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
