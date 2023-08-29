import books from "@/lib/data/books";
import ItemWithImage from "@/app/components/ItemWithImage";
import ProductItem from "@/app/components/ProductItem";

export default function Books() {
  return (
    <section>
      {books.map((book) => (
        <ItemWithImage
          key={book.name}
          imageSrc={book.imageSrc}
          aspectRatio={["aspect-w-2", "aspect-h-3"]}
          imageMaxWidth="max-w-[30%] md:max-w-[22%]"
        >
          <ProductItem {...book} />
        </ItemWithImage>
      ))}
    </section>
  );
}
