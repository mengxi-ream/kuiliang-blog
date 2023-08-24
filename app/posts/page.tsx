import PostList from "@/app/components/PostList";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import PostLoader from "@/app/posts/components/PostLoader";

export default async function Posts() {
  const posts = await getPostsMeta();

  let uniqueTagsArray: string[] = [];

  if (posts) {
    const allTags = posts.flatMap((post) => post.tags); // Creates an array with all tags from all posts
    const uniqueTags = new Set(allTags); // Removes duplicates
    uniqueTagsArray = Array.from(uniqueTags); // Converts the Set back to an array, if you need it as an array
  }

  return <PostLoader uniqueTagsArray={uniqueTagsArray} />;
}
