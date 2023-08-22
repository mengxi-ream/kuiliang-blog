import ProjectItem from "@/app/components/ProjectItem";
import projects from "@/lib/data/projects";

export default function Projects() {
  return (
    <section>
      {projects.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </section>
  );
}
