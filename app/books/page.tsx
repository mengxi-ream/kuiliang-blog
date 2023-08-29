import books from "@/lib/data/books";
import ItemWithImage from "@/app/components/ItemWithImage";
import ProductItem from "@/app/components/ProductItem";

export default function Books() {
  return (
    <section>
      {books.map((book) => (
        <ItemWithImage key={book.name} imageSrc={book.imageSrc}>
          <ProductItem {...book} />
        </ItemWithImage>
      ))}
    </section>
  );
}
