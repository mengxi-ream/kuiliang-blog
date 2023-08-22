import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ProjectItem({
  name,
  icon,
  imageSrc,
  description,
  detail,
  time,
  stack,
  postLink,
  QRCodeSrc,
  githubLink,
  youtubeLink,
}: Project) {
  return (
    <div className="flex flex-wrap mt-8">
      <div className="relative flex-auto w-32 m-4">
        <div className="relative w-full aspect-w-16 aspect-h-9">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg ring-1 ring-gray-200 dark:ring-gray-700"
            />
          )}
        </div>
      </div>
      <section className="flex-auto w-64 m-4">
        <div className="flex">
          <div className="shrink-0 relative flex justify-center items-center w-10 h-10 bg-white rounded-md mr-2 mt-0.5">
            {icon}
          </div>
          <div className="relative -top-0.5">
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {time}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-2">
          {stack &&
            stack.map((s) => (
              <span
                key={s}
                className="px-1 my-1 text-sm rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              >
                {s}
              </span>
            ))}
        </div>
        <p className="py-3">{detail ? detail : description}</p>
        <div className="flex items-center text-sm">
          Relevant Posts
          <ArrowRightIcon className="ml-1 w-4 h-4" />
        </div>
      </section>
    </div>
  );
}
