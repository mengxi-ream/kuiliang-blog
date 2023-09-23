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
import path from "path";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getPostByName(fileName: string): Promise<BlogPost> {
  const id = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  if (fs.statSync(fullPath).isDirectory()) {
    throw new Error(`Expected a file but "${fullPath}" is a directory.`);
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
    publishedDate: string;
    updatedDate: string;
    tags: string[];
    abstract: string;
    project?: string;
    tool?: string;
  }>({
    source: fileContents,
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

  return {
    content,
    meta: {
      id,
      title: frontmatter.title,
      publishedDate: frontmatter.publishedDate,
      updatedDate: frontmatter.updatedDate,
      tags: frontmatter.tags,
      abstract: frontmatter.abstract,
      ...(frontmatter.project && { project: frontmatter.project }),
      ...(frontmatter.tool && { tool: frontmatter.tool }),
    },
  } as BlogPost;
}

export async function getPostsMeta(): Promise<Meta[]> {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".mdx"));

  const allPostsMeta = await Promise.all(
    fileNames.map(async (fileName: string) => {
      const { meta } = await getPostByName(fileName);
      return meta;
    })
  );
  return allPostsMeta.sort((a, b) => (a.updatedDate < b.updatedDate ? 1 : -1));
}
