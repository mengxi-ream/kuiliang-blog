import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import getFormattedDate from "@/lib/getFormattedDate";
import categories from "@/lib/data/categories";
import Tag from "@/app/components/Tag";
import projects from "@/lib/data/projects";
import tools from "@/lib/data/tools";
import Icon from "@/app/components/Icon";

type Props = {
  post: Meta;
};

export function PostItem({ post }: Props) {
  const { id, title, abstract, publishedDate, tags, project, tool } = post;

  // find the categories which are in tags
  const postCategory = tags.filter((tag) =>
    Object.keys(categories).includes(tag)
  );

  const foundProject = projects.find((p) => p.name === project);
  const projectIcon = foundProject?.icon;
  const projectLink = foundProject?.mainLink;

  const foundTool = tools.find((t) => t.name === tool);
  const toolIcon = foundTool?.icon;
  const toolLink = foundTool?.mainLink;

  return (
    <li className="my-3" key={id}>
      <div className="relative p-4 group rounded-2xl hover:bg-background-light-75 dark:hover:bg-background-dark-875 transition ease-in-out duration-200">
        <div className="flex items-center text-sm">
          <div className="text-gray-600 dark:text-gray-400 mr-4">
            {getFormattedDate(publishedDate)}
          </div>
          {projectIcon && (
            <Link
              href={projectLink ? projectLink : "/projects"}
              className="z-10"
            >
              <div className="bg-white rounded-md mr-2 ring-1 ring-gray-100 shadow-md shadow-gray-300 dark:ring-gray-800 dark:shadow-slate-600">
                <Icon
                  src={projectIcon.src}
                  alt={foundProject?.name || "defaultAltText"}
                  size="5"
                  innerSize={projectIcon.innerSize}
                  pixelated={projectIcon.pixelated}
                  rounded="rounded-md"
                />
              </div>
            </Link>
          )}
          {toolIcon && (
            <Link href={toolLink ? toolLink : "/tools"} className="z-10">
              <div className="bg-white rounded-md mr-2 ring-1 ring-gray-100 shadow-md shadow-gray-300 dark:ring-gray-800 dark:shadow-slate-600">
                <Icon
                  src={toolIcon.src}
                  alt={foundTool?.name || "defaultAltText"}
                  size="5"
                  innerSize={toolIcon.innerSize}
                  rounded="rounded-md"
                />
              </div>
            </Link>
          )}
          {postCategory.length > 0 && (
            <div className="flex flex-wrap gap-x-2">
              {postCategory.map((tag) => (
                <Link href={`/tags/${tag}`} key={tag} className="z-10">
                  <Tag content={tag} />
                </Link>
              ))}
            </div>
          )}
        </div>
        <h3 className="my-4 text-xl font-bold">{title}</h3>
        <p className="my-3">{abstract}</p>
        <div className="flex items-center text-accent-light dark:text-accent-dark text-sm">
          Read more
          <ArrowRightIcon className="ml-1 w-4 h-4" />
        </div>
        {/* Notice the parent should be "relative" */}
        <Link href={`/posts/${id}`} className="post-link__read-more">
          Read more&hellip;
        </Link>
      </div>
    </li>
  );
}
