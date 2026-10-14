import { ArrowRight, DraftingCompass } from "lucide-react";
import { Link } from "react-router-dom";
import shazImage from "../assets/images/overhead.webp";


const skills = [
  "React.js",
  "Node.js",
  "JavaScript",
  "Tailwind CSS",
  "Wordpress",
  "CPP",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 text-[#f6ddd4] sm:py-14 md:py-10"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-16">
        {/* Left side: image and decoration */}
        <div className="relative flex w-full items-center justify-center lg:col-span-5">
          {/* Orbit decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute flex h-[min(90vw,520px)] w-[min(90vw,520px)] items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-[#c58b62]/15 blur-[100px]" />

            <svg
              viewBox="0 0 480 480"
              fill="none"
              className="absolute inset-0 h-full w-full animate-[spin_90s_linear_infinite] opacity-50"
            >
              <circle
                cx="240"
                cy="240"
                r="230"
                stroke="#c58b62"
                strokeDasharray="3 9"
              />
              <circle
                cx="240"
                cy="240"
                r="190"
                stroke="#f9b98c"
                strokeDasharray="8 12"
              />
              <circle
                cx="240"
                cy="240"
                r="145"
                stroke="#84532f"
              />
              <circle
                cx="240"
                cy="240"
                r="105"
                stroke="#f9b98c"
                strokeDasharray="2 6"
              />
              <circle cx="374" cy="106" r="4.5" fill="#f8ba87" />
              <circle cx="106" cy="374" r="3.5" fill="#c58b62" />
              <circle cx="374" cy="374" r="3" fill="#f9b98c" />
              <circle cx="106" cy="106" r="3" fill="#f9b98c" />
            </svg>

            <div className="absolute h-[78%] w-[78%] rotate-45 rounded-[28%] border border-dashed border-[#f9b98c]/30" />
          </div>

          {/* Image card */}
          <div className="group relative z-10 aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-2xl border border-[#9e8d83]/30 bg-[#261913]/90 p-2 shadow-2xl backdrop-blur-sm">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#1d100b]">
              {/* Fallback background appears if image path isn't found */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl text-[#c58b62]/50">
                S
              </div>

              <img
                src={shazImage}
                alt="Shawaiz Irshad working on design in a studio"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
                className="relative h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#170b07] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating experience badge */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between rounded-xl border border-[#c58b62]/20 bg-[#352721]/95 p-4 shadow-lg backdrop-blur-md">
              <div>
                <p
                  className="text-2xl leading-tight text-[#f9b98c]"
                  style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                >
                  0.5+ Years
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d6c3b8]">
                  Of Refined Craft
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c58b62]/20 text-[#f9b98c]">
                <DraftingCompass size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Right side: about text and skills */}
        <div className="flex flex-col gap-7 lg:col-span-7">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f9b98c]">
              About Me
            </span>

            <h2
              className="text-4xl leading-tight text-[#f6ddd4] sm:text-5xl"
              style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
            >
              Building Modern, Responsive & User Friendly Website
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-base leading-7 text-[#d6c3b8]">
            <p>
              I'm Shahwaiz Irshad, an aspiring Web Developer
             and BBIT student at Virtual University of Pakistan, 
              passionate about building modern, responsive, 
             and user-friendly web applications.
            </p>

            <p>
              My development journey focuses on combining clean code, 
              thoughtful UI/UX design, and practical functionality to 
              create digital experiences that look great and work seamlessly 
              across different devices. I work with technologies like HTML, CSS, 
              JavaScript, React.js, and Bootstrap to develop responsive frontend 
              interfaces, while exploring backend development with Node.js, Python, SQL, and Firebase.
            </p>

            <p>
              Every project I build reflects my commitment to responsive 
              web design, modern frontend technologies, continuous learning, 
              and creating engaging experiences across all devices.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-3 pt-1">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6ddd4]">
              Core Disciplines &amp; Stack
            </span>

            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-full border border-[#9e8d83]/30 bg-[#352721]/80 px-3.5 py-2 text-xs font-medium text-[#f6ddd4] shadow-sm transition-colors duration-300 hover:border-[#c58b62] hover:bg-[#c58b62] hover:text-[#301400]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Link to projects route */}
          <div className="pt-1">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#f9b98c]"
            >
              <span className="relative pb-1">
                More About My Process
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#f9b98c] transition-all duration-300 group-hover:w-full" />
              </span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
