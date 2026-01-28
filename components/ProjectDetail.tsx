"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { useState } from "react";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${project.title} — ${project.client}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="min-h-screen pt-32 pb-24">
      {/* Hero Section - Magazine Spread */}
      <div className="section">
        <div className="container max-w-5xl">
          {/* Back Link */}
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-[#666] hover:text-white transition-colors mb-12 inline-block hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            ← Back to Work
          </Link>

          {/* Title & Metadata - Asymmetric Layout */}
          <div className="grid md:grid-cols-3 gap-12 items-start mb-20 animate-slide-in-up">
            <div className="md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#999] mb-4">
                {project.year}
                {project.endYear && project.endYear !== project.year
                  ? `–${project.endYear}`
                  : ""}
              </p>
              <h1 className="colton-mega text-[#e8e8e8] mb-8 text-shadow-gritty">
                {project.title}
              </h1>
              <p className="text-lg text-[#999] leading-relaxed font-light max-w-2xl">
                {project.challenge}
              </p>
            </div>

            {/* Quick Facts - Sidebar */}
            <div className="space-y-8 md:border-l-2 md:border-[#2a2a2a] md:pl-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#999] mb-2">
                  Client
                </p>
                <p className="text-base font-bold text-white">{project.client}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#999] mb-2">
                  Role
                </p>
                <p className="text-base text-[#ccc]">{project.role}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#999] mb-2">
                  Duration
                </p>
                <p className="text-base text-[#ccc]">{project.duration}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#999] mb-2">
                  Company
                </p>
                <p className="text-base text-[#ccc]">{project.company}</p>
              </div>
            </div>
          </div>

          {/* Services & Collaborators */}
          <div className="grid md:grid-cols-2 gap-12 border-t-2 border-[#2a2a2a] pt-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#999] mb-4">
                Services
              </p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="text-xs font-bold uppercase tracking-widest text-[#e8e8e8] border-2 border-[#2a2a2a] px-3 py-2 hover:border-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#999] mb-4">
                Collaborators
              </p>
              <p className="text-[#ccc] leading-relaxed text-sm">
                {project.collaborators.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content - Magazine Style */}
      <div className="section">
        <div className="container max-w-4xl">
          {project.caseStudy ? (
            <div className="space-y-16">
              {project.caseStudy.split("\n\n").map((paragraph, i) => {
                const trimmed = paragraph.trim();

                if (trimmed.startsWith("# ")) {
                  return (
                    <div key={i} className="border-t-2 border-[#2a2a2a] pt-16 mt-8">
                      <h2 className="colton-large text-[#e8e8e8] mb-8">
                        {trimmed.replace(/^# /, "")}
                      </h2>
                    </div>
                  );
                }

                if (trimmed.startsWith("## ")) {
                  return (
                    <h3
                      key={i}
                      className="colton-heading text-[#e8e8e8] mt-10 mb-6"
                    >
                      {trimmed.replace(/^## /, "")}
                    </h3>
                  );
                }

                if (trimmed.startsWith("- ")) {
                  return (
                    <ul
                      key={i}
                      className="space-y-4 ml-4"
                    >
                      {trimmed.split("\n").map((line, j) => (
                        <li
                          key={j}
                          className="text-[#ccc] leading-relaxed font-light text-base"
                        >
                          <span className="text-white font-bold mr-3">→</span>
                          {line.replace(/^- /, "")}
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (trimmed.startsWith("**")) {
                  return (
                    <div
                      key={i}
                      className="border-l-4 border-white bg-[#1a1a1a]/50 p-6"
                    >
                      {trimmed.split("\n").map((line, j) => (
                        <p key={j} className="text-sm text-[#999] font-light leading-relaxed">
                          {line.replace(/\*\*/g, "")}
                        </p>
                      ))}
                    </div>
                  );
                }

                return (
                  <p key={i} className="text-[#ccc] leading-relaxed font-light text-base">
                    {trimmed}
                  </p>
                );
              })}
            </div>
          ) : (
            <div className="space-y-20">
              <section className="border-t-2 border-[#2a2a2a] pt-16">
                <h2 className="colton-large text-[#e8e8e8] mb-8">
                  The Challenge
                </h2>
                <p className="text-[#ccc] leading-relaxed font-light text-base">
                  {project.challenge}
                </p>
              </section>

              <section className="border-t-2 border-[#2a2a2a] pt-16">
                <h2 className="colton-large text-[#e8e8e8] mb-8">
                  The Solution
                </h2>
                <p className="text-[#ccc] leading-relaxed font-light text-base">
                  {project.solution}
                </p>
              </section>

              <section className="border-t-2 border-[#2a2a2a] pt-16">
                <h2 className="colton-large text-[#e8e8e8] mb-8">
                  The Results
                </h2>
                <ul className="space-y-4">
                  {project.results.map((result, i) => (
                    <li key={i} className="text-[#ccc] leading-relaxed font-light text-base">
                      <span className="text-white font-bold mr-3">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}

          {/* Testimonial (if available) */}
          {project.testimonial && (
            <section className="border-t-2 border-[#2a2a2a] pt-16 mt-20">
              <blockquote className="border-l-4 border-white pl-8 py-6">
                <p className="text-[#ccc] text-lg font-light leading-relaxed italic">
                  "{project.testimonial}"
                </p>
                <footer className="text-[#999] text-xs font-bold uppercase tracking-widest mt-6">
                  — {project.testimonialAuthor}
                </footer>
              </blockquote>
            </section>
          )}

          {/* Media Link */}
          {project.mediaUrl && (
            <div className="border-t-2 border-[#2a2a2a] pt-16 mt-20">
              <p className="text-xs font-bold uppercase tracking-widest text-[#999] mb-4">
                View Live
              </p>
              <a
                href={project.mediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-white transition-all text-lg flex items-center gap-2 w-fit hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              >
                {project.mediaUrl.replace("https://", "").replace("www.", "")}
                <span>↗</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section - Asymmetric */}
      <div className="section">
        <div className="container max-w-4xl">
          <div className="border-t-2 border-[#2a2a2a] pt-20">
            <h2 className="colton-large text-[#e8e8e8] mb-12">
              Next
              <br />
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Project</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
              <button
                onClick={handleCopy}
                className="btn btn-secondary"
              >
                {copied ? "✓ Copied!" : "Copy Title"}
              </button>

              <Link href="/contact" className="btn btn-primary">
                Let's Talk
              </Link>
            </div>

            <p className="text-[#666] text-xs font-bold uppercase tracking-widest mt-12">
              Ready to create something great?
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
