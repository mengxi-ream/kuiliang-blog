import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {
  post: Meta;
};

export function PostItem({ post }: Props) {
  const { id, title, abstract } = post;

  return (
    <li className="my-3" key={id}>
      <Link
        href={`/posts/${id}`}
        className="block p-2 group rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition ease-in-out duration-200"
      >
        <h3 className="my-1 text-xl font-bold group-hover:text-orange-500">
          {title}
        </h3>
        <p className="my-3">{abstract}</p>
        <div className="flex items-center text-orange-500 text-sm">
          Read more
          <ArrowRightIcon className="ml-1 w-4 h-4" />
        </div>
      </Link>
    </li>
  );
}
