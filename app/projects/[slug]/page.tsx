import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { projectsData } from "@/data/projects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
