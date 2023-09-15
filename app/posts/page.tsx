import PostList from "@/app/components/PostList";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import Tag from "@/app/components/Tag";

export default async function Posts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const posts = await getPostsMeta();

  let uniqueTagsArray: string[] = [];

  if (posts) {
    const allTags = posts.flatMap((post) => post.tags); // Creates an array with all tags from all posts
    const uniqueTags = new Set(allTags); // Removes duplicates
    uniqueTagsArray = Array.from(uniqueTags).sort(); // Converts the Set back to an array, if you need it as an array
  }

  const tags = processTags(searchParams.tag);

  return (
    <div className="md:flex gap-x-4">
      <div className="w-full md:flex-auto">
        <PostList tags={tags} />
      </div>
    </div>
  );
}

function processTags(
  tags: string | string[] | undefined
): string[] | undefined {
  if (typeof tags === "string") {
    return [tags];
  }

  return tags;
}
