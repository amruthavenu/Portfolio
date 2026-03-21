"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// ── DATA ────────────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    period: "06/2025 – 02/2026",
    role: "Software Developer (Werkstudent)",
    company: "Daimler Truck AG",
    location: "Untertürkheim, Germany",
    bullets: [
      "Designed and built a web-based diagnostic routing generator with JavaScript and RESTful backend services with PostgreSQL, defining the overall system architecture across UI, API, and data layers.",
      "Implemented scalable backend services and REST APIs following clean architecture and OOP principles for maintainability and reliable service communication.",
      "Modelled and optimised normalised database schemas for consistent and scalable diagnostic and routing data.",
      "Developed modular Angular services for API integration and state management.",
      "Deployed and operated backend services and PostgreSQL databases on Microsoft Azure Cloud.",
    ],
    tags: ["JavaScript", "TypeScript", "Angular", "Django", "PostgreSQL", "REST", "Azure", "Git"],
  },
  {
    period: "03/2023 – 04/2024",
    role: "Software Developer (Werkstudent)",
    company: "Deutsche Automobil Treuhand GmbH",
    location: "Germany",
    bullets: [
      "Development and optimisation of backend services with Java, Spring Boot, and Spring Data JPA to improve system scalability and database performance.",
      "Developed and maintained RESTful APIs aligned with clean architecture and SOLID principles.",
      "Enhanced front-end components using JavaScript and jQuery, reducing reported user issues by 15%.",
      "Collaborated in agile Scrum teams using Git-based workflows to deliver iterative production releases.",
    ],
    tags: ["Java", "Spring Boot", "Spring Data JPA", "REST", "Oracle DB", "jQuery"],
  },
  {
    period: "10/2019 – 08/2022",
    role: "Software Developer",
    company: "Infosys Private Ltd",
    location: "Bangalore, India",
    bullets: [
      "Designed and implemented scalable backend services with Java and Spring Boot in a distributed enterprise environment.",
      "Integrated RESTful and SOAP web services with Oracle DB for transactional data processing.",
      "Applied TDD practices with JUnit and Mockito; participated in CI/CD pipelines (Git, Jenkins).",
      "Mentored junior developers in agile cross-functional teams.",
    ],
    tags: ["Java", "Spring Boot", "SOAP", "Oracle DB", "JUnit", "Mockito", "Jenkins"],
  },
  
];
const EXPERIENCE_EMBEDDED =[
  {
    period: "12/2024 – 05/2025",
    role: "Master Thesis",
    company: "Daimler Truck AG",
    location: "Untertürkheim, Germany",
    bullets: [
      "Analysis of a hybrid AUTOSAR architecture for synchronised time base management between ECUs.",
      "Focus on Secure Onboard Communication (SecOC) with Profile 3 (JASPAR), implementation of reconstructed freshness values.",
      "Integration of CAN and Ethernet time synchronisation with the StbM module.",
      "Analysis of safety-critical use cases such as replay attacks with countermeasures per AUTOSAR standard.",
    ],
    tags: ["Vector CANoe", "AUTOSAR", "Time Synchronisation", "SecOC"],
  },
  {
    period: "05/2024 – 10/2024",
    role: "Internship – Secure Diagnostics",
    company: "Daimler Truck AG",
    location: "Untertürkheim, Germany",
    bullets: [
      "Analysis of current security architecture and proposal of an AUTOSAR-based solution for user authentication and rights management.",
      "Development of a proof of concept for UDS service 0x29 with secure diagnostics.",
      "Configuration and testing of BSW modules with C++ and Vector tools.",
      "Automation of security tests with CANoe and CAPL.",
    ],
    tags: ["Vector Davinci Configurator", "UDS", "C++", "CANoe", "CAPL"],
  },
]

const SKILLS = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C","C++"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "Spring Data JPA", "Angular", "Django", "REST APIs", "SOAP"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Oracle DB"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Jenkins", "Docker", "Azure Cloud", "Jira", "Vector CANoe"],
  },
  {
    category: "Methods",
    items: ["Scrum", "Agile", "Clean Architecture", "TDD", "CI/CD"],
  },
];

const EDUCATION = [
  {
    period: "10-2022 – 09-2025",
    degree: "Master of Science (M.Sc.) in Elektrotechnik und Informationstechnik",
    institution: "Hochschule Darmstadt",
    detail: "Major: Embedded Systems und Microelectronics",
  },
  {
    period: "08-2015 – 07-2019",
    degree: "Bachelor of Technology (B.Tech.) in Electronics and Communication Engineering",
    institution: "Government Engineering College Kozhikode",
    detail: "GPA: 1.95 (German scale)",
  },
];

// ── COMPONENT ────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [expandedSoftware, setExpandedSoftware] = useState<number | null>(null);
  const [expandedAutomotive, setExpandedAutomotive] = useState<number | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);


  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setExpandedAutomotive(0);
    setExpandedSoftware(0);
    }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
   // setMenuOpen(false);
  };

  
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setSent(true);
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a18]" style={{ fontFamily: "'DM Mono', monospace" }}>
       

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-32 space-y-28">
          
        {/* ── HERO ── */}
        <section id="about" ref={(el) => { sectionRefs.current["About"] = el; }} className="pt-12">
          
          {/* Add this two-column wrapper */}
          <div className="flex flex-col md:flex-row md:items-center gap-10 mb-10">
            
            {/* Left — existing text content */}
            <div className="flex-1">
              <div className={`fade ${heroVisible ? "show" : ""}`} style={{ transitionDelay: "0.05s" }}>
                <p className="text-[0.65rem] tracking-[0.35em] uppercase mb-4" style={{ color: "var(--muted-portfolio)" }}>
                  Software Developer · Stuttgart, Germany
                </p>
              </div>
              <div className={`fade ${heroVisible ? "show" : ""}`} style={{ transitionDelay: "0.18s" }}>
                <h1 className="display text-5xl md:text-7xl font-bold leading-[1.05] mb-2">
                  Amrutha
                </h1>
                <h1 className="display text-5xl md:text-7xl font-bold italic leading-[1.05] mb-8" style={{ color: "var(--accent-portfolio)" }}>
                  Venugopal
                </h1>
              </div>
              <div className={`fade ${heroVisible ? "show" : ""}`} style={{ transitionDelay: "0.32s" }}>
                <p className="max-w-2xl text-[0.82rem] leading-loose mb-10" style={{ color: "var(--muted-portfolio)" }}>
                  Software developer with experience designing and building scalable enterprise
                  applications across backend and frontend layers. Strong expertise in Java, Spring Boot,
                  and modern frontend technologies including Angular, JavaScript and TypeScript.
                </p>
              </div>
              <div className={`fade ${heroVisible ? "show" : ""}`} style={{ transitionDelay: "0.45s" }}>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollTo("Experience")}
                    className="px-5 py-2.5 text-[0.68rem] tracking-[0.15em] uppercase font-medium text-white rounded-sm"
                    style={{ background: "var(--accent-portfolio)" }}
                  >
                    View Experience
                  </button>
                  <button
                    onClick={() => scrollTo("Contact")}
                    className="px-5 py-2.5 text-[0.68rem] tracking-[0.15em] uppercase rounded-sm border"
                    style={{ borderColor: "var(--rule)", color: "var(--muted-portfolio)" }}
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>

            {/* Right — photo */}
            <div className={`fade ${heroVisible ? "show" : ""} shrink-0`} style={{ transitionDelay: "0.2s" }}>
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Image
                  src="/images/photo.jpg"
                  alt="Amrutha Venugopal"
                  fill
                  className="object-cover rounded-full"
                  style={{
                    border: "3px solid var(--accent-portfolio)",
                    boxShadow: "0 8px 32px rgba(45,90,61,0.15)",
                    objectPosition: "center 1%",
                  }}
                  priority
                />
              </div>
            </div>

          </div>

         {/* quick stats */}
          <div className={`fade ${heroVisible ? "show" : ""} mt-16 grid grid-cols-3 gap-6 pt-10 border-t`}
            style={{ transitionDelay: "0.55s", borderColor: "var(--rule)" }}>
            {[
              { value: "4+", label: "Years experience" },
              { value: "3", label: "Companies" },
              { value: "2", label: "Languages" },
            ].map((s) => (
              <div key={s.label}>
                <div className="display text-3xl font-bold mb-1" style={{ color: "var(--accent-portfolio)" }}>{s.value}</div>
                <div className="text-[0.65rem] tracking-[0.15em] uppercase" style={{ color: "var(--muted-portfolio)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>
        {/* ── EXPERIENCE ── */}
        <section id="experience" ref={(el) => { sectionRefs.current["Experience"] = el; }}>
          <div className="section-head">
            <h2 className="display text-2xl font-bold"> Software Experience</h2>
          </div>
          <div className="space-y-8">
            {EXPERIENCE.map((e, i) => (
              <div
                key={i}
                className={`exp-card ${expandedSoftware === i ? "open" : ""}`}
              >
                <button
                  className="w-full text-left"
                  onClick={() => setExpandedSoftware(expandedSoftware === i ? null : i)}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="dot" />
                        <span className="font-medium text-[0.9rem]">{e.role}</span>
                      </div>
                      <div className="text-[0.75rem] pl-[14px]" style={{ color: "var(--accent-portfolio)" }}>
                        {e.company} · {e.location}
                      </div>
                    </div>
                    <span className="text-[0.65rem] tracking-wider shrink-0 mt-1" style={{ color: "var(--muted-portfolio)" }}>
                      {e.period}
                    </span>
                  </div>
                </button>

                {expandedSoftware === i && (
                  <div className="mt-3 space-y-3 pl-[14px]">
                    <ul className="space-y-2">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="bullet text-[0.78rem] leading-relaxed" style={{ color: "var(--muted-portfolio)" }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {e.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="automotive" ref={(el) => { sectionRefs.current["Experience"] = el; }}>
          <div className="section-head">
            <h2 className="display text-2xl font-bold">Automotive Experience</h2>
          </div>
          <div className="space-y-8">
            {EXPERIENCE_EMBEDDED.map((e, i) => (
              <div
                key={i}
                className={`exp-card ${expandedAutomotive === i ? "open" : ""}`}
              >
                <button
                  className="w-full text-left"
                  onClick={() => setExpandedAutomotive(expandedAutomotive === i ? null : i)}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="dot" />
                        <span className="font-medium text-[0.9rem]">{e.role}</span>
                      </div>
                      <div className="text-[0.75rem] pl-[14px]" style={{ color: "var(--accent-portfolio)" }}>
                        {e.company} · {e.location}
                      </div>
                    </div>
                    <span className="text-[0.65rem] tracking-wider shrink-0 mt-1" style={{ color: "var(--muted-portfolio)" }}>
                      {e.period}
                    </span>
                  </div>
                </button>

                {expandedAutomotive === i && (
                  <div className="mt-3 space-y-3 pl-[14px]">
                    <ul className="space-y-2">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="bullet text-[0.78rem] leading-relaxed" style={{ color: "var(--muted-portfolio)" }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {e.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" ref={(el) => { sectionRefs.current["Skills"] = el; }}>
          <div className="section-head">
            <h2 className="display text-2xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="rounded-sm p-5"
                style={{ background: "var(--card-portfolio)", border: "1px solid var(--rule)" }}
              >
                <h3 className="display text-sm font-bold italic mb-3" style={{ color: "var(--accent-portfolio)" }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Soft skills card */}
            <div
              className="rounded-sm p-5"
              style={{ background: "var(--card-portfolio)", border: "1px solid var(--rule)" }}
            >
              <h3 className="display text-sm font-bold italic mb-3" style={{ color: "var(--accent-portfolio)" }}>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Analytical Thinking", "Problem Solving", "Communication", "Goal-Oriented", "Fast Learner"].map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Languages card */}
            <div
              className="rounded-sm p-5"
              style={{ background: "var(--card-portfolio)", border: "1px solid var(--rule)" }}
            >
              <h3 className="display text-sm font-bold italic mb-3" style={{ color: "var(--accent-portfolio)" }}>
                Languages
              </h3>
              <div className="space-y-2">
                {[{ lang: "English", level: "Fluent" }, { lang: "German", level: "B2 (in progress)" }].map((l) => (
                  <div key={l.lang} className="flex justify-between items-center text-[0.75rem]">
                    <span style={{ color: "var(--ink)" }}>{l.lang}</span>
                    <span className="tag">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" ref={(el) => { sectionRefs.current["Education"] = el; }}>
          <div className="section-head">
            <h2 className="display text-2xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            {EDUCATION.map((ed, i) => (
              <div key={i} className="exp-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="dot" />
                      <span className="font-medium text-[0.9rem]">{ed.degree}</span>
                    </div>
                    <div className="text-[0.75rem] pl-[14px]" style={{ color: "var(--accent-portfolio)" }}>
                      {ed.institution}
                    </div>
                    <div className="text-[0.72rem] pl-[14px] mt-1" style={{ color: "var(--muted-portfolio)" }}>
                      {ed.detail}
                    </div>
                  </div>
                  <span className="text-[0.65rem] tracking-wider shrink-0 mt-1" style={{ color: "var(--muted-portfolio)" }}>
                    {ed.period}
                  </span>
                </div>
              </div>
            ))}

            {/* Hobbies */}
            <div className="pt-4" style={{ borderTop: "1px solid var(--rule)" }}>
              <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-2" style={{ color: "var(--muted-portfolio)" }}>
                Hobbies
              </p>
              <div className="flex gap-2">
                {["🎻 Playing violin", "🍳 Cooking"].map((h) => (
                  <span key={h} className="tag text-[0.72rem]">{h}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" ref={(el) => { sectionRefs.current["Contact"] = el; }}>
          <div className="section-head">
            <h2 className="display text-2xl font-bold">Contact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[0.8rem] leading-loose mb-8" style={{ color: "var(--muted-portfolio)" }}>
                Open to full-stack and backend engineering roles, ideally in Germany. Feel free to
                reach out via email or LinkedIn.
              </p>
              <div className="space-y-3 text-[0.75rem]">
                {[
                  { label: "Email", value: "amruthavenuvt@gmail.com", href: "mailto:amruthavenuvt@gmail.com" },
                  { label: "Phone", value: "+49 15730170369", href: "tel:+4915730170369" },
                  { label: "LinkedIn", value: "amrutha-venugopal", href: "https://linkedin.com/in/amrutha-venugopal/" },
                  { label: "Location", value: "Stuttgart, Germany", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <span className="text-[0.6rem] tracking-[0.25em] uppercase w-16 shrink-0" style={{ color: "var(--accent-portfolio)" }}>
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="hover:underline underline-offset-2" style={{ color: "var(--ink)" }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color: "var(--muted-portfolio)" }}>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          {/*--Form Data---*/}
          
          {mounted && (
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3" suppressHydrationWarning>
                <input
                  placeholder="Name"
                  value={formData.from_name}
                  onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.from_email}
                  onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                  required
                />
              </div>
              <input
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
              <textarea
                rows={5}
                placeholder="Your message…"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 text-[0.68rem] tracking-[0.2em] uppercase font-medium text-white rounded-sm"
                style={{
                  background: sending ? "var(--muted-portfolio)" : "var(--accent-portfolio)",
                  cursor: sending ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                }}
              >
                {sending ? "Sending…" : "Send Message"}
              </button>

              {sent && (
                <p className="text-[0.72rem] text-center" style={{ color: "var(--accent-portfolio)" }}>
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {error && (
                <p className="text-[0.72rem] text-center" style={{ color: "#c0392b" }}>
                  Something went wrong. Please email me directly at amruthavenuvt@gmail.com
                </p>
              )}
            </form>
          )}
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.62rem] tracking-widest uppercase"
        style={{ borderColor: "var(--rule)", color: "var(--muted-portfolio)" }}>
        <span className="display text-base font-bold italic" style={{ color: "var(--accent-portfolio)" }}>
          Amrutha Venugopal
        </span>
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} — All rights reserved
        </span>
        <span>Built with Next.js & Tailwind</span>
      </footer>
    </div>
  );
}