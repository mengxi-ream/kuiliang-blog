import tools from "@/lib/data/tools";
import ItemWithImage from "@/app/components/ItemWithImage";
import ProductItem from "@/app/components/ProductItem";
import sortProductsByDate from "@/lib/sortProductsByDate";

export default function Tools() {
  return (
    <section>
      {sortProductsByDate(tools).map((tool) => (
        <ItemWithImage key={tool.name} imageSrc={tool.imageSrc}>
          <ProductItem {...tool} />
        </ItemWithImage>
      ))}
    </section>
  );
}
