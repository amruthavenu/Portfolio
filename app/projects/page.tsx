"use client";

import { useState } from "react";

// ── DATA ─────────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "AI & ML", "Embedded / AUTOSAR", "Web / Full-Stack"];

const PROJECTS = [  
  {
    id: "diagnostic-routing",
    category: "Web / Full-Stack",
    title: "Diagnostic Routing Generator",
    context: "Werkstudent · Daimler Truck AG",
    year: "06-2025 to 02-2026",
    description:
      "Web-based tool for generating diagnostic routing configurations, spanning a JavaScript/Angular frontend, RESTful backend services, and a PostgreSQL database. Defined full system architecture across UI, API, and data layers, and deployed on Microsoft Azure Cloud.",
    highlights: [
      "End-to-end system architecture: UI → API → database",
      "Normalised PostgreSQL schema for routing and diagnostic data",
      "Deployed and operated on Azure Cloud with secure environment config",
    ],
    tags: ["Angular", "TypeScript", "Django", "PostgreSQL", "REST", "Azure", "Git"],
    github: null,
    status: "professional",
  },
  {
    id: "enterprise-backend",
    category: "Web / Full-Stack",
    title: "Enterprise Backend Services & API Gateway",
    context: "Software Developer · Infosys",
    year: "10-2019 to 08-2022",
    description:
      "Designed and maintained scalable backend services in a distributed enterprise environment using Java and Spring Boot. Integrated RESTful and SOAP APIs with Oracle DB, applied TDD practices, and mentored junior developers in CI/CD and agile workflows.",
    highlights: [
      "RESTful & SOAP API integration with Oracle DB",
      "TDD with JUnit and Mockito, CI/CD via Git and Jenkins",
      "Front-end improvements in jQuery reducing user issues by 15%",
    ],
    tags: ["Java", "Spring Boot", "Spring Data JPA", "Oracle DB", "JUnit", "Jenkins", "jQuery"],
    github: null,
    status: "professional",
  },
  {id: "autosar-secoc",
    category: "Embedded / AUTOSAR",
    title: "Topic: Investigation in vehicle best practices for freshness value in Secure Onboard Communication (SecOC) and Global time synchronization",
    context: "Master Thesis · Daimler Truck AG",
    year: "12-2024 to 05-2025",
    description:
    "Investigated the feasibility of transitioning Security architecture to a modular, AUTOSAR-compliant solution for secure inter-ECU communication. Focused on integrating the Secure Onboard Communication (SecOC) module with Profile 3 and the Synchronized Time-Base Manager (StbM), supported by CanTSyn and EthTSyn — decoupling time synchronisation from message freshness validation across distributed ECU networks.",
    highlights: [
    "Analysed AUTOSAR StbM for global time synchronisation across ECUs in distributed vehicle networks",
    "Implemented SecOC Profile 3 (JASPAR) for message authenticity and freshness to prevent replay attacks",
    "Integrated CAN and Ethernet time synchronisation via CanTSyn and EthTSyn modules",
    "Evaluated trade-offs in communication overhead, synchronisation accuracy, and system maintainability",
    "Proposed a scalable architecture aligned with Software-Defined Vehicle (SDV) and High-Performance Computing (HPC) platforms",
    ],
    tags: ["AUTOSAR", "SecOC", "C++", "Vector CANoe", "CAN", "Ethernet", "Embedded"],
    github: null,
    status: "thesis",
  },
  {
    id: "secure-diagnostics",
    category: "Embedded / AUTOSAR",
    title: "Secure Diagnostics – UDS Service 0x29",
    context: "Internship · Daimler Truck AG",
    year: "05-2024 to 10-2024",
    description:
      "Designed an AUTOSAR-based solution for user authentication and rights management in vehicle diagnostics. Built a proof of concept for UDS service 0x29 and automated security test suites using CANoe and CAPL scripting.",
    highlights: [
      "POC for UDS 0x29 with certificate-based identification",
      "Configured and tested BSW modules with Vector tools",
      "Automated security tests reducing manual effort significantly",
    ],
    tags: ["UDS", "AUTOSAR", "C++", "CANoe", "CAPL", "Vector Davinci"],
    github: null,
    status: "internship",
  },
  {
  id: "vision-ai-jetson",
  category: "AI & ML",
  title: "Vision AI on Nvidia Jetson Nano",
  context: "Academic Project · Hochschule Darmstadt",
  year: "2022–2025",
  description:
    "Developed a real-time machine learning system for traffic signal detection and driver drowsiness detection running on edge hardware. Implemented using YOLOv7 with PyTorch and optimised for the Jetson Nano platform using TensorRT, enabling low-latency inference for road safety applications.",
  highlights: [
    "Implemented YOLOv7 object detection model using PyTorch for traffic signal and drowsiness detection",
    "Optimised model inference with TensorRT for real-time performance on Nvidia Jetson Nano",
    "Demonstrated edge computing capabilities for embedded AI in road safety scenarios",
  ],
  tags: ["Python", "YOLOv7", "PyTorch", "TensorRT", "Jetson Nano", "Computer Vision", "Edge AI"],
  github: null,
  status: "academic",
},
{
  id: "beach-trash-rover",
  category: "AI & ML",
  title: "Autonomous Beach Trash Rover",
  context: "Academic Project · Government Engineering College Kozhikode",
  year: "2018–2019",
  description:
    "Designed and built a prototype rover for autonomous detection and collection of microplastics on beaches. The system uses Computer Vision and machine learning to identify hazardous waste and autonomously navigates to collect and dispose of it at a predefined location.",
  highlights: [
    "Built on Raspberry Pi with Computer Vision for real-time trash identification",
    "Integrated ML-based object detection to classify and locate microplastics",
    "Implemented autonomous navigation and disposal to a predefined collection point",
  ],
  tags: ["Python", "Raspberry Pi", "Computer Vision", "Machine Learning", "Embedded Systems"],
  github: null,
  status: "academic",
},
{
  id: "autosar-reaction-game",
  category: "Embedded / AUTOSAR",
  title: "Reaction Time Game — AUTOSAR Application",
  context: "Academic Project · Hochschule Darmstadt",
  year: "2022–2025",
  description:
    "Developed an AUTOSAR-compliant embedded application implementing a reaction time game. A 7-segment display presents a random number and the user must press the corresponding button within a time limit. The application tracks reaction times, computes scores, and displays results over 10 rounds.",
  highlights: [
    "Built as a fully AUTOSAR-compliant application following layered architecture principles",
    "Integrated 7-segment display and button input handling at the BSW/RTE layer",
    "Computed and displayed scores, total time, and average reaction time across 10 rounds",
  ],
  tags: ["AUTOSAR", "C++", "Embedded Systems", "BSW", "RTE"],
  github: null,
  status: "academic",
},
{
  id: "electronic-clock",
  category: "Embedded ",
  title: "Electronic Clock — AUTOSAR RTE & Erika OS",
  context: "Academic Project · Hochschule Darmstadt",
  year: "2022–2025",
  description:
    "Designed and implemented an electronic clock using a Hierarchical State Machine with a Look-Up Table and Active Object Pattern. Features a TFT display for time visualisation and adheres to AUTOSAR RTE Layered Architecture with Erika OS integration.",
  highlights: [
    "Implemented Hierarchical State Machine with Look-Up Table for clock state management",
    "Applied Active Object Pattern for concurrent, event-driven behaviour",
    "Integrated TFT display output following AUTOSAR RTE layered architecture with Erika OS",
  ],
  tags: ["AUTOSAR", "C++", "Erika OS", "State Machine", "TFT Display", "Embedded Systems"],
  github: null,
  status: "academic",
},
{
  id: "reversi-game",
  category: "C++ Programming",
  title: "Reversi Board Game",
  context: "Academic Project · Hochschule Darmstadt",
  year: "2022–2025",
  description:
    "Designed and developed a two-player Reversi board game in C++ using Eclipse IDE. Followed object-oriented design principles and produced a full UML diagram as part of the software design process.",
  highlights: [
    "Implemented full game logic for two-player Reversi in C++",
    "Designed system architecture using UML diagrams prior to implementation",
    "Applied OOP principles including encapsulation, inheritance, and polymorphism",
  ],
  tags: ["C++", "OOP", "UML", "Eclipse"],
  github: null,
  status: "academic",
},
{
  id: "battleship-game",
  category: "C++ Programming",
  title: "Battleship Game",
  context: "Academic Project · Hochschule Darmstadt",
  year: "2022–2025",
  description:
    "Implemented the classic Battleship game in C++ following a provided UML diagram. Applied modern C++ programming techniques and best practices throughout the development process.",
  highlights: [
    "Implemented game logic from UML specification using modern C++ techniques",
    "Applied best practices including RAII, smart pointers, and STL containers",
  ],
  tags: ["C++", "OOP", "UML"],
  github: null,
  status: "academic",
},
];

// ── STATUS CONFIG ─────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  thesis:       { label: "Thesis",       color: "#2d5a3d", bg: "#e8f0eb" },
  internship:   { label: "Internship",   color: "#5a4a2d", bg: "#f0ece0" },
  professional: { label: "Professional", color: "#2d3d5a", bg: "#e0e8f0" },
  academic: { label: "Academic", color: "#3d2d5a", bg: "#ede8f0" },
  "coming-soon":{ label: "Coming Soon",  color: "#7a7060", bg: "#eeebe4" },
};

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a18]" style={{ fontFamily: "'DM Mono', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        :root {
          --ink: #1a1a18;
          --paper: #f5f2ed;
          --muted: #7a7060;
          --accent: #2d5a3d;
          --accent-light: #e8f0eb;
          --rule: rgba(26,26,24,0.12);
          --card: #eeeae3;
        }

        .display { font-family: 'Playfair Display', Georgia, serif; }

        .filter-pill {
          padding: 5px 16px;
          border-radius: 999px;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid var(--rule);
          color: var(--muted);
          transition: all 0.18s ease;
          cursor: pointer;
          background: transparent;
        }
        .filter-pill:hover { border-color: var(--accent); color: var(--accent); }
        .filter-pill.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }

        .project-card {
          background: var(--card);
          border: 1px solid var(--rule);
          border-radius: 6px;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .project-card:hover {
          border-color: var(--accent);
          box-shadow: 0 6px 28px rgba(45,90,61,0.07);
          transform: translateY(-2px);
        }
        .project-card.open {
          border-color: var(--accent);
        }

        .tag {
          display: inline-block;
          font-size: 0.62rem;
          letter-spacing: 0.07em;
          padding: 2px 9px;
          border: 1px solid var(--rule);
          border-radius: 3px;
          color: var(--muted);
          background: var(--paper);
          transition: border-color 0.15s, color 0.15s;
        }
        .tag:hover { border-color: var(--accent); color: var(--accent); }

        .highlight-item::before {
          content: '→';
          margin-right: 0.5rem;
          color: var(--accent);
          font-size: 0.7rem;
        }

        .github-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 4px;
          border: 1px solid var(--rule);
          color: var(--muted);
          transition: all 0.18s;
          text-decoration: none;
        }
        .github-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-light);
        }
        .github-btn.disabled {
          opacity: 0.45;
          cursor: not-allowed;
          pointer-events: none;
        }

        .section-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .section-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
        }

        .coming-soon-banner {
          border: 1px dashed var(--rule);
          border-radius: 4px;
          padding: 10px 14px;
          font-size: 0.7rem;
          color: var(--muted);
          background: transparent;
          letter-spacing: 0.05em;
        }
      `}</style>

      <main className="max-w-4xl mx-auto px-6 pt-10 pb-32">

        {/* ── PAGE HEADER ── */}
        <div className="mb-12">
          <p className="text-[0.62rem] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--muted)" }}>
            Academic &amp; Professional
          </p>
          <h1 className="display text-5xl md:text-6xl font-bold leading-tight mb-4">
            Projects
          </h1>
          <p className="text-[0.8rem] leading-loose max-w-xl" style={{ color: "var(--muted)" }}>
            A selection of academic and professional projects spanning embedded systems,
            secure automotive diagnostics, full-stack web applications, and AI/ML.
          </p>
        </div>

        {/* ── FILTER PILLS ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              <span className="ml-1.5 opacity-60">
                ({cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* ── PROJECT CARDS ── */}
        <div className="space-y-4">
          {filtered.map((project) => {
            const isOpen = expanded === project.id;
            const statusCfg = STATUS_CONFIG[project.status];

            return (
              <div
                key={project.id}
                className={`project-card ${isOpen ? "open" : ""}`}
              >
                {/* Card header — always visible */}
                <button
                  className="w-full text-left px-6 py-5"
                  onClick={() => setExpanded(isOpen ? null : project.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex-1">
                      {/* Category + status badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="text-[0.6rem] tracking-[0.15em] uppercase px-2.5 py-0.5 rounded-sm font-medium"
                          style={{ background: statusCfg.bg, color: statusCfg.color }}
                        >
                          {statusCfg.label}
                        </span>
                        <span
                          className="text-[0.6rem] tracking-[0.12em] uppercase"
                          style={{ color: "var(--muted)" }}
                        >
                          {project.category}
                        </span>
                      </div>

                      <h2 className="display text-xl font-bold leading-snug mb-1">
                        {project.title}
                      </h2>
                      <p className="text-[0.72rem]" style={{ color: "var(--accent)" }}>
                        {project.context}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-[0.65rem] tracking-wider" style={{ color: "var(--muted)" }}>
                        {project.year}
                      </span>
                      <span
                        className="text-[0.7rem] transition-transform duration-200"
                        style={{
                          color: "var(--accent)",
                          display: "inline-block",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>

                  {/* Tags — always visible */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.slice(0, 5).map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="tag">+{project.tags.length - 5} more</span>
                    )}
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div
                    className="px-6 pb-6 border-t"
                    style={{ borderColor: "var(--rule)" }}
                  >
                    <div className="pt-5 grid md:grid-cols-3 gap-6">
                      {/* Description + highlights */}
                      <div className="md:col-span-2 space-y-4">
                        <p className="text-[0.78rem] leading-loose" style={{ color: "var(--muted)" }}>
                          {project.description}
                        </p>

                        <div>
                          <p
                            className="text-[0.6rem] tracking-[0.2em] uppercase mb-2"
                            style={{ color: "var(--accent)" }}
                          >
                            Key highlights
                          </p>
                          <ul className="space-y-1.5">
                            {project.highlights.map((h, i) => (
                              <li
                                key={i}
                                className="highlight-item text-[0.75rem] leading-relaxed"
                                style={{ color: "var(--muted)" }}
                              >
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* All tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((t) => (
                            <span key={t} className="tag">{t}</span>
                          ))}
                        </div>
                      </div>

                      {/* Side panel */}
                      <div className="space-y-4">
                        <div>
                          <p className="text-[0.6rem] tracking-[0.2em] uppercase mb-1.5" style={{ color: "var(--muted)" }}>
                            Period
                          </p>
                          <p className="text-[0.75rem]">{project.year}</p>
                        </div>
                        <div>
                          <p className="text-[0.6rem] tracking-[0.2em] uppercase mb-1.5" style={{ color: "var(--muted)" }}>
                            Context
                          </p>
                          <p className="text-[0.75rem]">{project.context}</p>
                        </div>
                        <div>
                          {project.github ? (
                            <>
                          <p className="text-[0.6rem] tracking-[0.2em] uppercase mb-2" style={{ color: "var(--muted)" }}>
                            Repository
                          </p>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
                              </svg>
                              View on GitHub
                            </a>
                            </>
                          ) : null
                           }
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div
          className="mt-16 pt-10 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderColor: "var(--rule)" }}
        >
          <div>
            <p className="display text-lg font-bold italic mb-1" style={{ color: "var(--accent)" }}>
              More coming soon
            </p>
            <p className="text-[0.72rem]" style={{ color: "var(--muted)" }}>
              AI/ML and personal projects will be added as repositories go public.
            </p>
          </div>
          <a
            href="https://linkedin.com/in/amrutha-venugopal/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
            style={{ whiteSpace: "nowrap" }}
          >
            Connect on LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}