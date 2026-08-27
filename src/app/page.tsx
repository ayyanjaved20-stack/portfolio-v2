"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const SELECTED_WORK = [
  {
    num: "001",
    name: "AYYANFLIX",
    subtitle: "PERSONAL FILM ARCHIVE",
    type: "FULL STACK APPLICATION",
    stack: "REACT / NODE / EXPRESS / MONGODB / GEMINI AI",
    status: "DEPLOYED",
    year: "2026",
    description:
      "A full-stack personal film archive with an AI concierge that never hallucinates. Gemini proposes, TMDb verifies. Every recommendation is grounded in real data. Built around my own curated movie database.",
    live: "https://ayyan-flix-site.vercel.app/",
    source: "https://github.com/ayyanjaved20-stack/AyyanFlix",
  },
  {
    num: "002",
    name: "ABDUL SALAM JEWELLERS",
    subtitle: "PREMIUM E-COMMERCE",
    type: "E-COMMERCE STORE",
    stack: "SHOPIFY / LIQUID / HTML / CSS / JS",
    status: "COMPLETED",
    year: "2025",
    description:
      "A luxury Shopify storefront that actually feels premium. Custom Liquid sections, dynamic metafields, and a black-and-gold visual identity built for a real client.",
    source: "https://github.com/ayyanjaved20-stack/Abdul-Salam-Jewellers",
  },
  {
    num: "003",
    name: "ANCHORAGE PHASE 2",
    subtitle: "REAL ESTATE WEBSITE",
    type: "PRODUCTION WEBSITE",
    stack: "WORDPRESS / ELEMENTOR / HTML / CSS / JS",
    status: "DELIVERED",
    year: "2025",
    description:
      "Production-ready real estate site for Naval Anchorage Phase 2, Islamabad. Custom Elementor layouts, CSS animations, API integrations, and performance optimization shipped to a real client.",
    live: "https://anchoragephase2.com/",
    source: "https://github.com/ayyanjaved20-stack/anchorage-phase2-website",
  },
  {
    num: "004",
    name: "HEAVY RACING",
    subtitle: "2D ARCADE RACING",
    type: "GAME / SYSTEMS",
    stack: "C++ / SFML",
    status: "COMPLETE",
    year: "2025",
    description:
      "A 2D arcade racer built from scratch in C++. Real-time game loop, collision detection, NPC traffic AI, layered environments, and a high-score system. No engine, no frameworks.",
    source: "https://github.com/ayyanjaved20-stack/Heavy-Racing",
  },
];

const EXPERIMENTS = [
  {
    num: "005",
    name: "RIDE-HAILING DBMS",
    subtitle: "DATABASE SYSTEMS",
    type: "DATABASE DESIGN",
    stack: "MICROSOFT SQL SERVER / RELATIONAL DESIGN",
    status: "ACADEMIC",
    year: "2025",
    description:
      "A relational database modeling a ride-hailing platform. Supertype/subtype mapping, aggregate queries, and constraint-driven integrity.",
    source:
      "https://github.com/ayyanjaved20-stack/Ride-Hailing-Database-Management-System",
  },
  {
    num: "006",
    name: "HUFFMAN ENCODING",
    subtitle: "ALGORITHMS",
    type: "ALGORITHMS / DATA STRUCTURES",
    stack: "C++ / BINARY TREES / PRIORITY QUEUES",
    status: "ACADEMIC",
    year: "2025",
    description:
      "Lossless text compression using Huffman Trees and priority queues. Frequency analysis, tree traversal, and file I/O.",
    source: "https://github.com/ayyanjaved20-stack/huffman-encoding",
  },
];

const DISCIPLINES = [
  "Full-Stack Development",
  "Front-End Engineering",
  "Systems Programming",
  "Database Design",
  "E-Commerce Development",
];

const HOBBIES = [
  "Drinking chai",
  "Listening to music",
  "Hanging out with friends",
  "Going to the gym",
  "Playing football occasionally",
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Simple fade-up reveals only
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    // Divider lines grow from left
    const dividers = document.querySelectorAll(".border-rule");
    dividers.forEach((el) => {
      gsap.fromTo(
        el,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen">
      {/* ─── HERO ─── */}
      <section className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-[1100px]">
          <p className="font-mono text-[0.65rem] tracking-[0.15em] text-secondary mb-8 reveal">
            SYSTEM ONLINE
          </p>

          <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-light leading-[0.95] tracking-tight mb-6 reveal">
            AYYAN
            <br />
            JAVED
          </h1>

          <p className="font-mono text-[0.7rem] md:text-[0.75rem] tracking-[0.1em] text-secondary mb-8 reveal">
            SOFTWARE ENGINEER
            <span className="mx-3 text-border">/</span>
            WEB DEVELOPER
          </p>

          <p className="text-lg md:text-xl font-light leading-relaxed max-w-[520px] mb-10 reveal">
            I build software and websites.
            <br />
            Both have bugs.
          </p>

          <div className="flex gap-8 font-mono text-[0.7rem] tracking-[0.1em] reveal">
            <a href="#work" className="accent-underline hover:text-accent transition-colors">
              [WORK]
            </a>
            <a
              href="https://github.com/ayyanjaved20-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline hover:text-accent transition-colors"
            >
              [GITHUB]
            </a>
          </div>
        </div>
      </section>

      <div className="border-rule mx-6 md:mx-12 lg:mx-24" />

      {/* ─── WORK ─── */}
      <section id="work" className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-[1100px]">
          <p className="font-mono text-[0.65rem] tracking-[0.15em] text-secondary mb-12 reveal">
            Nº 001 / SELECTED WORK
          </p>

          <div className="flex flex-col">
            {SELECTED_WORK.map((project, i) => (
              <div key={project.num}>
                <div className="project-row py-8 md:py-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.65rem] text-secondary tracking-[0.1em]">
                        Nº {project.num}
                      </span>
                      <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                    <span className={`status-badge font-mono hidden md:block ${project.status === "DEPLOYED" ? "deployed" : ""}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="font-mono text-[0.65rem] tracking-[0.1em] text-secondary mb-4">
                    {project.subtitle}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mb-5">
                    <div>
                      <p className="font-mono text-[0.6rem] tracking-[0.12em] text-secondary mb-1">TYPE</p>
                      <p className="font-mono text-[0.7rem] tracking-[0.05em]">{project.type}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] tracking-[0.12em] text-secondary mb-1">STACK</p>
                      <p className="font-mono text-[0.7rem] tracking-[0.05em]">{project.stack}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] tracking-[0.12em] text-secondary mb-1">YEAR</p>
                      <p className="font-mono text-[0.7rem] tracking-[0.05em]">{project.year}</p>
                    </div>
                  </div>

                  <span className={`status-badge font-mono md:hidden mb-4 inline-block ${project.status === "DEPLOYED" ? "deployed" : ""}`}>
                    {project.status}
                  </span>

                  <p className="text-[0.9rem] leading-relaxed text-secondary max-w-[640px] mb-5">
                    {project.description}
                  </p>

                  <div className="flex gap-6 font-mono text-[0.7rem] tracking-[0.08em]">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="accent-underline hover:text-accent transition-colors">
                        LIVE ↗
                      </a>
                    )}
                    {project.source && (
                      <a href={project.source} target="_blank" rel="noopener noreferrer" className="accent-underline hover:text-accent transition-colors">
                        SOURCE ↗
                      </a>
                    )}
                  </div>
                </div>

                {i < SELECTED_WORK.length - 1 && <div className="border-rule" />}
              </div>
            ))}
          </div>

          {/* ── Experiments ── */}
          <div className="mt-16">
            <p className="font-mono text-[0.65rem] tracking-[0.15em] text-secondary mb-8 reveal">
              EXPERIMENTS
            </p>

            <div className="flex flex-col">
              {EXPERIMENTS.map((project, i) => (
                <div key={project.num}>
                  <div className="project-row py-6 md:py-8">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[0.65rem] text-secondary tracking-[0.1em]">
                          Nº {project.num}
                        </span>
                        <h3 className="text-lg md:text-xl font-medium tracking-tight">
                          {project.name}
                        </h3>
                      </div>
                      <span className={`status-badge font-mono hidden md:block ${project.status === "DEPLOYED" ? "deployed" : ""}`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="font-mono text-[0.65rem] tracking-[0.1em] text-secondary mb-4">
                      {project.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mb-4">
                      <div>
                        <p className="font-mono text-[0.6rem] tracking-[0.12em] text-secondary mb-1">TYPE</p>
                        <p className="font-mono text-[0.7rem] tracking-[0.05em]">{project.type}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[0.6rem] tracking-[0.12em] text-secondary mb-1">STACK</p>
                        <p className="font-mono text-[0.7rem] tracking-[0.05em]">{project.stack}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[0.6rem] tracking-[0.12em] text-secondary mb-1">YEAR</p>
                        <p className="font-mono text-[0.7rem] tracking-[0.05em]">{project.year}</p>
                      </div>
                    </div>

                    <span className={`status-badge font-mono md:hidden mb-4 inline-block ${project.status === "DEPLOYED" ? "deployed" : ""}`}>
                      {project.status}
                    </span>

                    <p className="text-[0.85rem] leading-relaxed text-secondary max-w-[640px] mb-4">
                      {project.description}
                    </p>

                    <div className="flex gap-6 font-mono text-[0.7rem] tracking-[0.08em]">
                      {project.source && (
                        <a href={project.source} target="_blank" rel="noopener noreferrer" className="accent-underline hover:text-accent transition-colors">
                          SOURCE ↗
                        </a>
                      )}
                    </div>
                  </div>

                  {i < EXPERIMENTS.length - 1 && <div className="border-rule" />}
                </div>
              ))}
            </div>
          </div>

          {/* ── Work CTA ── */}
          <div className="mt-12 reveal">
            <a
              href="https://github.com/ayyanjaved20-stack?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              VIEW ALL PROJECTS ON GITHUB ↗
            </a>
            <p className="font-mono text-[0.55rem] tracking-[0.1em] text-secondary mt-3 ml-1">
              Code, demos, and documentation for every project.
            </p>
          </div>
        </div>
      </section>

      <div className="border-rule mx-6 md:mx-12 lg:mx-24" />

      {/* ─── PROFILE ─── */}
      <section id="profile" className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-[1100px]">
          <p className="font-mono text-[0.65rem] tracking-[0.15em] text-secondary mb-12 reveal">
            Nº 002 / PROFILE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-6 reveal">
                Ayyan Javed
              </h2>

              <div className="space-y-4 text-[0.9rem] leading-relaxed text-secondary reveal">
                <p>
                  <span style={{ color: "var(--text)" }} className="font-normal">19.</span> Computer
                  science undergrad at Bahria University, Islamabad.
                </p>
                <p>
                  I build software, interfaces, and digital systems. Sometimes
                  they work on the first try. Most times they don&apos;t.
                </p>
                <p>
                  Interested in full-stack development, systems programming, and
                  the kind of engineering that solves actual problems instead of
                  just looking good in a demo.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-10">
                <p className="font-mono text-[0.6rem] tracking-[0.15em] text-secondary mb-4 reveal">
                  DISCIPLINES
                </p>
                <ul className="space-y-2">
                  {DISCIPLINES.map((d) => (
                    <li key={d} className="text-[0.85rem] font-light reveal">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-[0.6rem] tracking-[0.15em] text-secondary mb-4 reveal">
                  HOBBIES
                </p>
                <div className="flex flex-wrap gap-2">
                  {HOBBIES.map((h) => (
                    <span key={h} className="hobby-pill reveal">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-rule mx-6 md:mx-12 lg:mx-24" />

      {/* ─── CONTACT ─── */}
      <section id="contact" className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-[1100px]">
          <p className="font-mono text-[0.65rem] tracking-[0.15em] text-secondary mb-12 reveal">
            Nº 003 / CONTACT
          </p>

          <h2 className="text-3xl md:text-4xl font-light mb-6 reveal">
            SYSTEM READY
          </h2>

          <p className="text-[0.95rem] leading-relaxed text-secondary max-w-[480px] mb-10 reveal">
            If you&apos;ve got something worth building,
            <br />I&apos;m interested.
          </p>

          <div className="flex flex-col gap-4 font-mono text-[0.7rem] tracking-[0.1em] reveal">
            <a href="mailto:ayyanjaved20@gmail.com" className="accent-underline hover:text-accent transition-colors w-fit">
              EMAIL ↗
            </a>
            <a href="https://github.com/ayyanjaved20-stack" target="_blank" rel="noopener noreferrer" className="accent-underline hover:text-accent transition-colors w-fit">
              GITHUB ↗
            </a>
          </div>
        </div>
      </section>

      <div className="border-rule mx-6 md:mx-12 lg:mx-24" />

      {/* ─── SYSTEM / FOOTER ─── */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="max-w-[1100px]">
          <p className="font-mono text-[0.65rem] tracking-[0.15em] text-secondary mb-8 reveal">
            Nº 004 / SYSTEM
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.12em] text-secondary mb-2">STACK</p>
              <div className="font-mono text-[0.7rem] tracking-[0.05em] space-y-1">
                <p>NEXT.JS</p>
                <p>TYPESCRIPT</p>
                <p>TAILWIND</p>
                <p>GSAP</p>
              </div>
            </div>
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.12em] text-secondary mb-2">STATUS</p>
              <p className="font-mono text-[0.7rem] tracking-[0.05em]">OPERATIONAL</p>
            </div>
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.12em] text-secondary mb-2">PERFORMANCE</p>
              <div className="font-mono text-[0.7rem] tracking-[0.05em]">
                <div className="flex justify-between"><span>PERFORMANCE</span><span>100</span></div>
                <div className="flex justify-between"><span>ACCESSIBILITY</span><span>100</span></div>
                <div className="flex justify-between"><span>BEST PRACTICES</span><span>100</span></div>
                <div className="flex justify-between"><span>SEO</span><span>100</span></div>
              </div>
            </div>
          </div>

          <div className="border-rule mb-8" />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-lg md:text-xl font-light tracking-tight mb-3">AYYAN.JAVED</p>
              <div className="font-mono text-[0.6rem] tracking-[0.1em] text-secondary space-y-1">
                <p>SYSTEM STATUS<span className="ml-4 text-text">ONLINE</span></p>
                <p>VERSION<span className="ml-4 text-text">2026.1</span></p>
                <p>LOCATION<span className="ml-4 text-text">ISLAMABAD / PK</span></p>
              </div>
            </div>

            <p className="font-mono text-[0.6rem] tracking-[0.15em] text-secondary">
              END OF DOCUMENT
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
