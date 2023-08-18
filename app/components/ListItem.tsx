import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {
  post: Meta;
};

export function ListItem({ post }: Props) {
  const { id, title } = post;

  return (
    <li className="my-2" key={id}>
      <Link
        href={`/posts/${id}`}
        className="block p-1 group rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition ease-in-out duration-200"
      >
        <h3 className="my-1 text-xl font-bold group-hover:text-orange-500">
          {title}
        </h3>
        <p className="my-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex font-semibold items-center">
          Read more
          <ArrowRightIcon className="ml-1 w-4 h-4 group-hover:text-orange-500" />
        </div>
      </Link>
    </li>
  );
}
