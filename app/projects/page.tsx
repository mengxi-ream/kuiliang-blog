import ItemWithImage from "@/app/components/ItemWithImage";
import ProductItem from "@/app/components/ProductItem";
import projects from "@/lib/data/projects";

export default function Projects() {
  return (
    <section>
      {projects.map((project) => (
        <ItemWithImage key={project.name} imageSrc={project.imageSrc}>
          <ProductItem {...project} />
        </ItemWithImage>
      ))}
    </section>
  );
}
