import PostList from "@/app/components/PostList";
import Link from "next/link";

export default function PostLoader({
  uniqueTagsArray,
}: {
  uniqueTagsArray: string[];
}) {
  return (
    <div className="md:flex gap-x-4">
      <div className="w-full md:flex-auto">
        <PostList />
      </div>
      <section className="w-full md:flex-auto md:w-64 mt-14">
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        {uniqueTagsArray.map((tag) => (
          <Link href={`tags/${tag}`} key={tag} className="block my-1 ml-2">
            <span className="mr-2 text-gray-500 text-sm dark:text-gray-400">
              {tag}
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
