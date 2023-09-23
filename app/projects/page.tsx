import ItemWithImage from "@/components/ItemWithImage";
import ProductItem from "@/components/ProductItem";
import projects from "@/data/projects";
import sortProductsByDate from "@/lib/sortProductsByDate";

export default function Projects() {
  return (
    <section>
      {sortProductsByDate(projects).map((project) => (
        <ItemWithImage key={project.name} imageSrc={project.imageSrc}>
          <ProductItem {...project} />
        </ItemWithImage>
      ))}
    </section>
  );
}
