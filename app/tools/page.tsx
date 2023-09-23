import tools from "@/config/tools";
import ItemWithImage from "@/components/ItemWithImage";
import ProductItem from "@/components/ProductItem";
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
