"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, GraduationCap, Briefcase, Code2, ChevronRight, Download, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Daimler Truck AG",
    role: "Software Developer (Working Student)",
    period: "Jun 2025 – Feb 2026",
    location: "Untertürkheim, Germany",
    highlights: [
      "Designed and developed a web-based diagnostic routing generator using Angular, Django, and PostgreSQL.",
      "Built scalable REST backend services and structured the system across UI, API, and data layers.",
      "Modeled normalized PostgreSQL schemas and supported deployment in Microsoft Azure cloud environments.",
    ],
    tech: ["Angular", "TypeScript", "Django", "PostgreSQL", "Azure", "REST"],
  },
  {
    company: "Daimler Truck AG",
    role: "Master's Thesis",
    period: "Dec 2024 – May 2025",
    location: "Untertürkheim, Germany",
    highlights: [
      "Analyzed a hybrid AUTOSAR architecture for synchronized time-base management across ECUs.",
      "Focused on Secure Onboard Communication and reconstruction of freshness values.",
      "Investigated safety-critical use cases including replay attack mitigation aligned with AUTOSAR standards.",
    ],
    tech: ["AUTOSAR", "SecOC", "CAN", "Ethernet", "Embedded Systems"],
  },
  {
    company: "Daimler Truck AG",
    role: "Intern – Secure Diagnostics",
    period: "May 2024 – Oct 2024",
    location: "Untertürkheim, Germany",
    highlights: [
      "Analyzed existing security architecture and proposed an AUTOSAR-based solution for authentication and authorization.",
      "Built a proof of concept for secure diagnostics using UDS service 0x29.",
      "Automated security testing with CANoe and CAPL.",
    ],
    tech: ["CANoe", "AUTOSAR", "UDS", "CAPL", "Security Testing"],
  },
  {
    company: "Deutsche Automobil Treuhand GmbH",
    role: "Software Developer (Working Student)",
    period: "Mar 2023 – Apr 2024",
    location: "Germany",
    highlights: [
      "Developed and optimized backend services with Java, Spring Boot, and Spring Data JPA.",
      "Improved scalability and database performance for production-oriented systems.",
    ],
    tech: ["Java", "Spring Boot", "Spring Data JPA", "Backend Services"],
  },
  {
    company: "Infosys",
    role: "Software Developer",
    period: "Oct 2019 – Aug 2022",
    location: "Bangalore, India",
    highlights: [
      "Implemented scalable backend microservices with Java and Spring Boot in distributed enterprise environments.",
      "Developed RESTful and SOAP APIs integrated with Oracle databases for transactional processing.",
      "Applied TDD practices with JUnit and Mockito and contributed to CI/CD workflows using Git and Jenkins.",
    ],
    tech: ["Java", "Spring Boot", "Oracle DB", "REST", "SOAP", "JUnit", "Mockito", "Jenkins"],
  },
];

const education = [
  {
    school: "Hochschule Darmstadt",
    degree: "M.Sc. Electrical Engineering and Information Technology",
    period: "2022 – 2025",
    details: "Focus: Embedded Systems and Microelectronics",
  },
  {
    school: "Government Engineering College Kozhikode",
    degree: "B.Tech. Electronics and Communication Engineering",
    period: "2015 – 2019",
    details: "German grade equivalent: 1.95",
  },
];

const skills = [
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "C++",
  "Spring Boot",
  "Django",
  "Angular",
  "REST APIs",
  "Microservices",
  "PostgreSQL",
  "Oracle DB",
  "Azure",
  "Docker",
  "Git",
  "Jenkins",
  "Agile",
  "Clean Architecture",
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("experience");
  const years = useMemo(() => "4+", []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_30%)]" />

      <main className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sky-200 hover:bg-sky-400/10">
              <Sparkles className="mr-2 h-4 w-4" /> Software Developer Portfolio
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Amrutha Venugopal
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                General Software Developer with {years} years of experience building scalable backend systems,
                APIs, and full-stack applications across enterprise and automotive domains.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <MapPin className="h-4 w-4" /> Stuttgart, Germany
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Mail className="h-4 w-4" /> amruthavenuvt@gmail.com
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="rounded-2xl px-5 py-6 text-base">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
              <Button variant="secondary" className="rounded-2xl px-5 py-6 text-base bg-white/10 text-white hover:bg-white/20">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto w-full max-w-md"
          >
            <Card className="overflow-hidden rounded-[28px] border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
              <CardContent className="p-0">
                <div className="relative h-[420px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/30 via-violet-500/20 to-emerald-400/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
                    <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-slate-900/70 text-5xl font-bold tracking-wide shadow-lg">
                      AV
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Profile Image</p>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-slate-200">
                        Replace this placeholder with your professional portrait to make the portfolio more personal.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="rounded-[28px] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <Code2 className="h-5 w-5 text-sky-300" />
                <h2 className="text-2xl font-semibold">About Me</h2>
              </div>
              <p className="text-sm leading-7 text-slate-300 md:text-base">
                I am a software developer with experience in backend engineering, API development, and scalable web
                applications. I have worked across enterprise systems, cloud-based services, and automotive software
                environments, with hands-on experience in Java, Spring Boot, Python, Django, Angular, and PostgreSQL.
                I enjoy designing maintainable architectures, solving complex technical problems, and building software
                that is reliable in production.
              </p>

              <div className="mt-8">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-slate-100 hover:bg-white/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[28px] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-4 md:p-6">
              <div className="mb-4 flex flex-wrap gap-3">
                {[
                  { key: "experience", label: "Experience", icon: Briefcase },
                  { key: "education", label: "Education", icon: GraduationCap },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-sky-400 text-slate-950"
                          : "bg-white/5 text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      <Icon className="h-4 w-4" /> {tab.label}
                    </button>
                  );
                })}
              </div>

              {activeTab === "experience" ? (
                <div className="space-y-4">
                  {experiences.map((item, index) => (
                    <motion.div
                      key={`${item.company}-${item.period}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="rounded-3xl border border-white/10 bg-slate-900/40 p-5"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{item.role}</h3>
                          <p className="text-sky-300">{item.company}</p>
                          <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                        </div>
                        <Badge className="w-fit rounded-full bg-white/10 px-3 py-1 text-slate-100 hover:bg-white/10">
                          {item.period}
                        </Badge>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                        {item.highlights.map((point) => (
                          <li key={point} className="flex gap-2">
                            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-sky-300" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200 hover:bg-white/5">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {education.map((item, index) => (
                    <motion.div
                      key={item.school}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-3xl border border-white/10 bg-slate-900/40 p-5"
                    >
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{item.degree}</h3>
                          <p className="text-sky-300">{item.school}</p>
                        </div>
                        <Badge className="w-fit rounded-full bg-white/10 px-3 py-1 text-slate-100 hover:bg-white/10">
                          {item.period}
                        </Badge>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{item.details}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
