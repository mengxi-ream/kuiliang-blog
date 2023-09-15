import PostList from "@/app/components/PostList";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import Tag from "@/app/components/Tag";
import { undefined } from "zod";

export default async function Posts() {
  const posts = await getPostsMeta();

  let uniqueTagsArray: string[] = [];

  if (posts) {
    const allTags = posts.flatMap((post) => post.tags); // Creates an array with all tags from all posts
    const uniqueTags = new Set(allTags); // Removes duplicates
    uniqueTagsArray = Array.from(uniqueTags).sort(); // Converts the Set back to an array, if you need it as an array
  }

  const tags: string[] = [];

  return (
    <div className="md:flex gap-x-4">
      <div className="w-full md:flex-auto">
        <PostList />
      </div>
    </div>
  );
}
