import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import getFormattedDate from "@/lib/getFormattedDate";
import categories from "@/lib/data/categories";
import Tag from "@/app/components/Tag";
import projects from "@/lib/data/projects";
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
  const icon = foundProject?.icon;

  return (
    <li className="my-3" key={id}>
      <Link
        href={`/posts/${id}`}
        className="block p-4 group rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition ease-in-out duration-200"
      >
        <div className="flex items-center text-sm">
          <div className="text-gray-600 dark:text-gray-400 mr-4">
            {getFormattedDate(publishedDate)}
          </div>
          {icon && (
            <div className="bg-white rounded-md mr-2 ring-1 ring-gray-100 shadow-md shadow-gray-300 dark:ring-gray-800 dark:shadow-slate-500">
              <Icon
                src={icon.src}
                alt={foundProject?.name || "defaultAltText"}
                size="5"
                innerSize={icon.innerSize}
                pixelated={icon.pixelated}
              />
            </div>
          )}
          {postCategory.length > 0 && (
            <div className="flex flex-wrap gap-x-2">
              {postCategory.map((tag) => (
                <Tag key={tag} content={tag} />
              ))}
            </div>
          )}
        </div>
        <h3 className="my-4 text-xl font-bold">{title}</h3>
        <p className="my-3">{abstract}</p>
        <div className="flex items-center text-orange-500 text-sm">
          Read more
          <ArrowRightIcon className="ml-1 w-4 h-4" />
        </div>
      </Link>
    </li>
  );
}
