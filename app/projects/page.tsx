import ItemWithImage from "@/app/components/ItemWithImage";
import ProjectItem from "@/app/components/ProjectItem";
import projects from "@/lib/data/projects";

export default function Projects() {
  return (
    <section>
      {projects.map((project) => (
        <ItemWithImage key={project.name} imageSrc={project.imageSrc}>
          <ProjectItem {...project} />
        </ItemWithImage>
      ))}
    </section>
  );
}
