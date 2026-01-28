import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

export default function PortfolioGrid() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Editorial-style header */}
        <div className="portfolio-header">
          <h2>Featured Work</h2>
          <p>
            A selection of premium projects with Fortune 500 brands and forward-thinking companies. 
            Each represents strategic creative direction, technical excellence, and measurable impact. 
            This is work that matters.
          </p>
        </div>

        {/* Magazine-style asymmetric grid */}
        <div className="portfolio-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              delay={index}
            />
          ))}
        </div>

        {/* Call-to-action section */}
        <div className="pt-8 border-t-2 border-[#2a2a2a]">
          <p className="text-xs font-bold uppercase tracking-widest text-[#999] mb-6">
            Next Steps
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about" className="btn btn-secondary">
              Learn More
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
