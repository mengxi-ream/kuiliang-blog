import ProjectCard from "@/app/components/ProjectCard";
import projects from "@/lib/data/projects";

export default function Projects() {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </section>
  );
}
