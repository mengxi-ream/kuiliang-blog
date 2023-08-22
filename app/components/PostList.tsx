import { getPostsMeta } from "@/lib/posts";
import { PostItem } from "@/app/components/PostItem";

type Props = {
  heading: string;
  tags?: string[];
};

export default async function PostList({ heading, tags }: Props) {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="my-2 text-center">Sorry, no posts available.</p>;
  }

  const filteredPosts = tags
    ? posts.filter((post) => post.tags.some((tag) => tags.includes(tag)))
    : posts;

  return (
    <section className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold my-4">{heading}</h2>
      <ul className="w-full list-none p-0">
        {filteredPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
