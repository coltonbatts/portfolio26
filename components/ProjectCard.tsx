import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  // Pass delay as a CSS variable for the animation
  const style = {
    "--delay": `${delay * 0.1}s`,
    animationDelay: `var(--delay)`,
  } as React.CSSProperties;

  return (
    <Link href={`/projects/${project.id}`} style={style} className="animate-fade-in block h-full">
      <article className="portfolio-card group h-full">
        {/* Year Tag - Editorial Marker */}
        <div>
          <span className="portfolio-year block">
            {project.year}
            {project.endYear && project.endYear !== project.year
              ? `–${project.endYear}`
              : ""}
          </span>

          {/* Title - Bold & Intentional */}
          <h3 className="portfolio-title">
            {project.title}
          </h3>

          {/* Client & Role - Minimal Meta */}
          <p className="portfolio-client">{project.client}</p>
          <p className="portfolio-role">{project.role}</p>

          {/* Description - The Hook */}
          <p className="portfolio-description">
            {project.challenge}
          </p>
        </div>

        {/* Services Section - Bottom */}
        <div>
          <div className="portfolio-services">
            <span className="portfolio-services-label">Services</span>
            <p className="portfolio-services-list">
              {project.services.slice(0, 3).join(" · ")}
            </p>
          </div>

          {/* CTA - Subtle but Present */}
          <div className="portfolio-cta">
            <span>Case Study</span>
            <span className="arrow">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
