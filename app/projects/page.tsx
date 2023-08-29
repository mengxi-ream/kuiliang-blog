import ItemWithImage from "@/app/components/ItemWithImage";
import ProductItem from "@/app/components/ProductItem";
import projects from "@/lib/data/projects";
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
