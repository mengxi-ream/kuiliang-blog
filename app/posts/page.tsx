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
      <section className="w-full md:flex-auto md:w-64 mt-14">
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        <div className="flex flex-wrap mb-10 gap-x-1.5 gap-y-1">
          {uniqueTagsArray.map((tag) => (
            <Link href={processURL(tags, tag)} key={tag}>
              <Tag
                content={tag}
                size="sm"
                className={processLinkStyle(tags, tag)}
              />
            </Link>
          ))}
        </div>
      </section>
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

function processURL(tags: string[] | undefined, tag: string): string {
  if (!tags) {
    return `/posts?tag=${tag}`;
  }

  let tagQuery;

  if (!tags.includes(tag)) {
    tagQuery = `tag=${tag}&` + tags.map((t) => `tag=${t}`).join("&");
  } else {
    // remove tag from tags then generate tagQuery
    const newTags = tags.filter((t) => t !== tag);
    tagQuery = newTags.map((t) => `tag=${t}`).join("&");
  }

  return `/posts?${tagQuery}`;
}

function processLinkStyle(tags: string[] | undefined, tag: string): string {
  return tags && tags.includes(tag)
    ? "rounded-md ring-1 ring-black dark:ring-white"
    : "";
}
