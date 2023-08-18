import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
// import "highlight.js/styles/github-dark.css";

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) {
    return [];
  }

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) {
    return notFound();
  }

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link
      href={`/tags/${tag}`}
      key={i}
      className="rounded-full bg-gray-200 px-2 py-1 dark:bg-gray-700 dark:text-white"
    >
      {tag}
    </Link>
  ));

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-4xl font-extrabold mt-12 mb-3">{meta.title}</h2>
      <p className="mb-12 text-gray-500">
        <span className="font-semibold">Last Updated:</span> {pubDate}
      </p>
      <article className="prose-lg mx-auto prose-ul:list-disc prose-ol:list-decimal prose-code:rounded-lg">
        {content}
      </article>
      <div className="flex flex-wrap gap-4 mt-10 mb-10">{tags}</div>
    </div>
  );
}
