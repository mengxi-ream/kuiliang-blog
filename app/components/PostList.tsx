import { getPostsMeta } from "@/lib/posts";
import { PostItem } from "@/app/components/PostItem";

type Props = {
  tags?: string[];
};

export default async function PostList({ tags }: Props) {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="my-2 text-center">Sorry, no posts available.</p>;
  }

  const filteredPosts = tags
    ? posts.filter((post) => post.tags.some((tag) => tags.includes(tag)))
    : posts;

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold my-4">Posts</h2>
      <ul className="w-full list-none p-0">
        {filteredPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
