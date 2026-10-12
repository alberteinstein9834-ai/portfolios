import { ArrowUpRight, GitBranch } from "lucide-react";



const projects = [
  {
    number: "01",
    year: "2026",
    
    title: "Nexweb Digital Solutions",
    description:
      "A modern, fully responsive website built with React.js, Tailwind CSS, and Vite, featuring a clean UI, elegant design, and seamless user experience across desktop, tablet, and mobile devices.",
    stack: ["React", "Tailwind CSS", "Node.js"],
    image: "../assets/images/nexweb.jpg",
    preview: "dashboard",
    liveUrl: "https://nnexweb.netlify.app",
  },
  {
    number: "02",
    year: "2026",
    
    title: "E-commerce website",
    description:
      "A responsive jewellery e-commerce website built with React.js, Tailwind CSS, and Vite, featuring Firebase integration and an admin panel for product management, with an elegant design and seamless shopping experience",
    stack: ["React", "Firebase", "Tailwind CSS"],
    image: "/images/projects/atelier.jpg",
    preview: "editorial",
    liveUrl: "https://ronish-jewels.netlify.app/",
  },
  {
    number: "03",
    year: "2026",
    
    title: "Digital & Analog Clock",
    description:
      "A responsive digital clock website built with HTML, CSS, and JavaScript, featuring a toggle function that seamlessly switches between digital and analog clock displays with a clean, user-friendly interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/aura.jpg",
    preview: "audio",
    liveUrl: "https://shawaiz-irshad.github.io/clock-project/",
  },
  {
    number: "04",
    year: "2026",
    
    title: "New Project coming soon!",
    description:
      "New projects are coming soon! 🚀 Currently working on something exciting — stay tuned.",
    stack: ["React", "Vite", "Tailwind CSS"],
    image: "/images/projects/vanguard.jpg",
    preview: "protocol",
    liveUrl: "",
  },
  {
    number: "05",
    year: "2026",
   
    title: "New Project coming soon!",
    description:
      "New projects are coming soon! 🚀 Currently working on something exciting — stay tuned.",
    stack: ["React", "Vite", "Tailwind CSS"],
    image: "/images/projects/caelum.jpg",
    preview: "fashion",
    liveUrl: "",
  },
  {
    number: "06",
    year: "2026",
    
    title: "New Project coming soon!",
    description:
      "New projects are coming soon! 🚀 Currently working on something exciting — stay tuned.",
    stack: ["React", "Vite", "Tailwind CSS"],
    image: "/images/projects/nexus.jpg",
    preview: "nodes",
    liveUrl: "",
  },
];

const previewBackgrounds = {
  dashboard: "from-[#36251d] via-[#211610] to-[#170b07]",
  editorial: "from-[#483527] via-[#2a1d17] to-[#170b07]",
  audio: "from-[#3a241e] via-[#211510] to-[#170b07]",
  protocol: "from-[#2c2921] via-[#211610] to-[#170b07]",
  fashion: "from-[#493326] via-[#2a1d17] to-[#170b07]",
  nodes: "from-[#30271f] via-[#211610] to-[#170b07]",
};

function ProjectArtwork({ project }) {
  return (
    <div
      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-[#9e8d83]/20 bg-gradient-to-br ${previewBackgrounds[project.preview]}`}
    >
      {/* Decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#c58b62_0.7px,transparent_0.7px)] [background-size:18px_18px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#c58b62]/20 blur-3xl"
      />

      {/* Dashboard preview */}
      
{project.preview === "dashboard" && (
  <div className="relative z-10 w-[78%] rounded-xl border border-[#c58b62]/25 bg-[#170b07]/80 p-4 shadow-xl">
    <div className="flex items-center justify-between">
      <span className="text-[9px] uppercase tracking-[0.2em] text-[#d6c3b8]">
        Nexweb Digital Solutions
      </span>
      <span className="rounded-full bg-[#c58b62]/10 px-2 py-1 text-[9px] text-[#f9b98c]">
        WEB DESIGN
      </span>
    </div>
    <p className="mt-3 font-serif text-2xl text-[#f9b98c]">
      Nexweb<span className="text-[#d6c3b8]">.</span>
    </p>
    <p className="mt-1 text-[10px] text-[#d6c3b8]">
      Creative Websites. Meaningful Experiences.
    </p>
    <div className="mt-4 flex h-12 items-end gap-1.5">
      {[35, 55, 42, 72, 50, 85, 63, 100, 75, 92, 68, 100].map(
        (height, index) => (
          <span
            key={index}
            className="flex-1 rounded-t-sm bg-[#c58b62]/70"
            style={{ height: `${height}%` }}
          />
        ),
      )}
    </div>
  </div>
)}

      {/* Editorial preview */}
      {project.preview === "editorial" && (
  <div className="relative z-10 w-[78%] border border-[#f9b98c]/20 bg-[#170b07]/40 p-5 text-center">
    <span className="text-[9px] uppercase tracking-[0.3em] text-[#d6c3b8]">
      Ronish / Jewellery Collection
    </span>
    <p className="mt-3 font-serif text-3xl italic text-[#f9b98c]">
      Ronish Jewels
    </p>
    <div className="mx-auto mt-4 h-px w-12 bg-[#c58b62]/70" />
    <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#d6c3b8]">
      Elegance in Every Detail
    </p>
  </div>
)}

      {/* Audio preview */}
      {project.preview === "audio" && (
  <div className="relative z-10 flex flex-col items-center text-center">
    <span className="text-[9px] uppercase tracking-[0.3em] text-[#d6c3b8]">
      Digital & Analog Clock
    </span>

    <div className="mt-3 flex h-24 w-24 items-center justify-center rounded-full border border-[#f9b98c]/40 bg-[#170b07]/40 shadow-[0_0_25px_rgba(249,185,140,0.12)]">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c58b62]/30">
        <svg
          viewBox="0 0 100 100"
          className="h-16 w-16"
          fill="none"
          stroke="#f9b98c"
          strokeLinecap="round"
        >
          <circle cx="50" cy="50" r="38" strokeOpacity="0.4" />
          <path d="M50 24 V50 L68 61" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="3" fill="#f9b98c" />
          <path d="M50 12 V17 M88 50 H83 M50 88 V83 M12 50 H17" />
        </svg>
      </div>
    </div>

    <p className="mt-3 font-serif text-2xl text-[#f9b98c]">
      12:45:08
    </p>

    <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#d6c3b8]">
      Time • Precision • Simplicity
    </p>
  </div>
)}

      {/* Protocol preview */}
      {project.preview === "protocol" && (
        <div className="relative z-10 w-[78%] rounded-xl border border-[#c58b62]/25 bg-[#170b07]/80 p-4 shadow-xl">
          <div className="flex items-center justify-between text-[9px] text-[#d6c3b8]">
            <span>LIQUIDITY POOL</span>
            <span className="text-[#f9b98c]">LIVE</span>
          </div>
          <p className="mt-2 font-mono text-xl text-[#f9b98c]">$18.4M</p>
          <div className="mt-3 flex h-10 items-end gap-1.5">
            {[35, 55, 40, 75, 48, 95, 68, 82].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-sm bg-[#c58b62]/70"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Fashion preview */}
      {project.preview === "fashion" && (
        <div className="relative z-10 text-center">
          <p className="font-serif text-3xl italic tracking-[0.16em] text-[#f9b98c]">
            CAELUM
          </p>
          <div className="mx-auto my-3 h-px w-10 bg-[#c58b62]/70" />
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#d6c3b8]">
            Silk &amp; Bronze
          </p>
          <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#d6c3b8]/70">
            Collection 2025
          </p>
        </div>
      )}

      {/* Node workflow preview */}
      {project.preview === "nodes" && (
        <div className="relative z-10 flex items-center">
          <span className="rounded-lg border border-[#c58b62]/50 bg-[#211610] px-2 py-2 font-mono text-[8px] text-[#f9b98c]">
            Token
          </span>
          <span className="h-px w-4 bg-[#c58b62]" />
          <span className="rounded-lg border border-[#f9b98c]/70 bg-[#c58b62]/30 px-2 py-3 font-mono text-[8px] text-[#f6ddd4]">
            Engine
          </span>
          <span className="h-px w-4 bg-[#c58b62]" />
          <span className="rounded-lg border border-[#c58b62]/50 bg-[#211610] px-2 py-2 font-mono text-[8px] text-[#f9b98c]">
            Export
          </span>
        </div>
      )}

      {/* Optional real project image. It hides itself when the file is missing. */}
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
        className="absolute inset-0 z-[1] h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />

      {/* Image overlay and category */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#170b07]/70 via-transparent to-transparent" />

      
    </div>
  );
}
function openLiveDemo(url) {
  if (!url) return;

  window.open(url, "_blank", "noopener,noreferrer");
}

function ProjectCard({ project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#9e8d83]/25 bg-[#2a1d17]/85 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#c58b62]/60 hover:shadow-[0_16px_40px_rgba(197,139,98,0.12)]">
      <ProjectArtwork project={project} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-serif text-xl text-[#f9b98c]">
            {project.number}
          </span>
          <span className="text-xs text-[#d6c3b8]">{project.year}</span>
        </div>

        <h3 className="font-serif text-xl text-[#f6ddd4] transition-colors group-hover:text-[#f9b98c]">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-[#d6c3b8]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded border border-[#9e8d83]/20 bg-[#261913] px-2.5 py-1 text-[10px] text-[#f9b98c]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Use the contact section until real project URLs are supplied. */}
        <div className="mt-5 flex items-center gap-3 border-t border-[#9e8d83]/15 pt-4">
          <button
  type="button"
  onClick={() => openLiveDemo(project.liveUrl)}
  disabled={!project.liveUrl}
  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#c58b62] px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#301400] transition-colors hover:bg-[#f9b98c] disabled:cursor-not-allowed disabled:opacity-50"
>
  Live Demo
  <ArrowUpRight size={14} />
</button>

          <a
            href="https://github.com/shawaiz-irshad"
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub profile (add the repository URL for ${project.title})`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#9e8d83]/30 bg-[#352721] px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#f6ddd4] transition-colors hover:border-[#c58b62] hover:text-[#f9b98c]"
          >
            <GitBranch size={15} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 w-full py-20 text-[#f6ddd4] sm:py-14 md:py-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 sm:px-8 md:gap-14 lg:px-16">
        {/* Section heading */}
        <div className="flex flex-col gap-5 border-b border-[#9e8d83]/20 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-serif text-sm tracking-widest text-[#f9b98c]">
                Great work isn’t built overnight; it’s built with patience, passion, and persistence.
              </span>
              
              
            </div>

            <h2
              className="text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
            >
              My Work in Action
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#d6c3b8]">
            Great things are done by a series of small things brought together.
          </p>
        </div>

        {/* Responsive project grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
