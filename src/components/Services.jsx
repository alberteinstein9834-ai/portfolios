import {
  Palette,
  PanelsTopLeft,
  Code2,
  Monitor,
  ShoppingCart,
  Smartphone,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "E-commerce Websites",
    description:
      "Modern online stores with attractive product displays, intuitive navigation, and smooth shopping experiences.",
    detail: "Figma & Prototypes",
    Icon: ShoppingCart,
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Responsive websites, clean code, modern interfaces, and seamless digital experiences built for performance and lasting impact.",
    detail: "Art Direction & Layout",
    Icon: Monitor,
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Production-ready websites built with React, Vite, and Tailwind CSS—with clean components and responsive interactions.",
    detail: "React & Modern JS",
    Icon: Code2,
  },
  {
    number: "04",
    title: "Responsive Systems",
    description:
      "Fluid layouts and carefully considered interactions that work smoothly across mobile, tablet, and desktop screens.",
    detail: "Fluid Viewports",
    Icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 w-full py-20 text-[#f6ddd4] sm:py-14 md:py-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 sm:px-8 md:gap-14 lg:px-16">
        {/* Section heading */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f9b98c]">
            Capabilities &amp; Expertise
          </span>

          <h2
            className="mt-3 text-4xl leading-tight sm:text-5xl"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            Our Web Design &amp; Development Services
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#d6c3b8] sm:text-base">
            From responsive web design to modern frontend development, I build fast, user-friendly, 
            and visually engaging websites that turn ideas into powerful digital experiences.
          </p>
        </div>

        {/* Responsive service cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map(({ number, title, description, detail, Icon }) => (
            <article
              key={number}
              className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-[#9e8d83]/20 bg-[#2a1d17]/80 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c58b62]/50 hover:bg-[#352721] sm:p-8"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span
                    className="text-2xl text-[#f9b98c]"
                    style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                  >
                    {number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#261913] text-[#f9b98c] transition-colors duration-300 group-hover:bg-[#c58b62] group-hover:text-[#301400]">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <h3
                  className="text-xl text-[#f6ddd4]"
                  style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                >
                  {title}
                </h3>

                <p className="text-sm leading-6 text-[#d6c3b8]">
                  {description}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 text-[10px] font-semibold uppercase tracking-wider text-[#f9b98c] transition-transform duration-300 group-hover:translate-x-1">
                <span>{detail}</span>
                <ChevronRight size={15} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
