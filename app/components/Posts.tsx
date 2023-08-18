import { getPostsMeta } from "@/lib/posts";
import { ListItem } from "@/app/components/ListItem";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="my-2 text-center">Sorry, no posts available.</p>;
  }

  return (
    <section className="mx-8">
      <h2 className="text-3xl font-bold my-4">Posts</h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
