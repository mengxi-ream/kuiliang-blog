import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import Tag from "@/components/ui/Tag";

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

  const publishedDate = getFormattedDate(meta.publishedDate);
  const updatedDate = getFormattedDate(meta.updatedDate);

  const tags = meta.tags.map((tag, i) => (
    <Link href={`/tags/${tag}`} key={i}>
      <Tag content={tag} size="md" />
    </Link>
  ));

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-4xl font-extrabold mt-12 mb-3">{meta.title}</h2>
      <div className="flex flex-wrap mb-14 text-gray-500 dark:text-gray-400">
        <p>
          <span className="font-semibold">Published: </span> {publishedDate}
        </p>
        <div className="mx-2">•</div>
        <p>
          <span className="font-semibold">Last Updated: </span> {updatedDate}
        </p>
      </div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
        integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
        crossOrigin="anonymous"
      />
      <article className="prose-lg mx-auto prose-ul:list-disc prose-ol:list-decimal prose-code:rounded-lg prose-code:bg-gray-100 prose-code:dark:bg-slate-800 prose-pre:py-0 prose-pre:px-0">
        {content}
      </article>
      <div className="flex flex-wrap gap-x-2 md:gap-x-4 gap-y-4 mt-10 mb-10">
        {tags}
      </div>
    </div>
  );
}
