import books from "@/config/books";
import ItemWithImage from "@/components/ItemWithImage";
import ProductItem from "@/components/ProductItem";
import sortProductsByDate from "@/lib/sortProductsByDate";

export default function Books() {
  return (
    <section>
      {sortProductsByDate(books).map((book) => (
        <ItemWithImage
          key={book.name}
          imageSrc={book.imageSrc}
          aspectRatio={["aspect-w-2", "aspect-h-3"]}
          imageMaxWidth="max-w-[50%] sm:max-w-[35%] md:max-w-[22%]"
        >
          <ProductItem {...book} />
        </ItemWithImage>
      ))}
    </section>
  );
}
