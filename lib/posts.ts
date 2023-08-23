import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import Video from "@/app/posts/[postId]/components/Video";
import CustomImage from "@/app/posts/[postId]/components/CustomImage";
import ImageCaption from "@/app/posts/[postId]/components/ImageCaption";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import CustomLink from "@/app/posts/[postId]/components/CustomLink";
import CustomBlockQuote from "@/app/posts/[postId]/components/CustomBlockQuote";

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/Crayon-ShinChan/blog-posts/main/${fileName}`
  );

  if (!res.ok) {
    return undefined;
  }

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") {
    return undefined;
  }

  const { frontmatter, content } = await compileMDX<{
    title: string;
    publishedDate: string;
    updatedDate: string;
    tags: string[];
    abstract: string;
    project?: string;
    tool?: string;
  }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
      ImageCaption,
      CustomLink,
      CustomBlockQuote,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
          rehypeKatex,
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostOjb: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      publishedDate: frontmatter.publishedDate,
      updatedDate: frontmatter.updatedDate,
      tags: frontmatter.tags,
      abstract: frontmatter.abstract,
      ...(frontmatter.project && { project: frontmatter.project }),
      ...(frontmatter.tool && { project: frontmatter.tool }),
    },
    content,
  };

  return blogPostOjb;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    "https://api.github.com/repos/Crayon-ShinChan/blog-posts/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_BLOG_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) {
    return undefined;
  }

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.updatedDate < b.updatedDate ? 1 : -1));
}
