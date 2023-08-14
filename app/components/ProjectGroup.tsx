import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  name: string;
  icon?: ReactElement;
  description: ReactElement;
  time: string;
  githubLink?: string;
};

export default function ProjectGroup() {
  const projects: Array<Props> = [
    {
      name: "Personal Website",
      description: (
        <div>
          My personal website built with Next.js (The site you are browsing
          right now 😃)
        </div>
      ),
      time: "Aug 2023 - Present",
    },
    {
      name: "Strongholdon",
      icon: (
        <Image
          className="pixelated"
          src="/icons/strongholdon.png"
          alt="Strongholdon Icon"
          layout="fill"
          objectFit="contain"
          unoptimized={true}
        />
      ),
      description: (
        <div>
          A party game similar to{" "}
          <a
            className="global-hover"
            href="https://en.wikipedia.org/wiki/Crypt_of_the_NecroDancer"
          >
            Crypt of the NecroDancer
          </a>{" "}
          gameplay for up to 3 players.
        </div>
      ),
      time: "Oct 2022 - Dec 2022",
      githubLink: "https://github.com/Crayon-ShinChan/strongholdon",
    },
  ];

  return (
    <div className="mx-8">
      <h2 className="text-3xl font-bold my-4">Projects</h2>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
}

function Project({
  name,
  icon,
  description,
  time,
  githubLink = undefined,
}: Props) {
  return (
    <div className="flex items-start mb-4">
      {icon && (
        <div className="shrink-0 relative w-10 h-10 bg-white rounded-md mr-2 mt-1">
          {icon}
        </div>
      )}
      <div className="grow">
        <div className="flex flex-wrap justify-between">
          <div className="flex pr-2 gap-x-2 items-center">
            <div className="text-base font-semibold rounded-md px-1 bg-opacity-60 bg-orange-100 dark:bg-orange-800 dark:bg-opacity-60">
              {name}
            </div>
            {githubLink && (
              <Link
                className="relative shrink-0 w-4 h-4"
                href={githubLink}
                target="_blank"
              >
                <Image
                  id="header__light"
                  className="rounded-full hover:ring hover:ring-orange-500 transition ease-in-out duration-300"
                  src="/icons/github-mark.svg"
                  alt="GitHub Icon"
                  layout="fill"
                />
                <Image
                  id="header__dark"
                  className="rounded-full hover:ring hover:ring-orange-500 transition ease-in-out duration-300"
                  src="/icons/github-mark-white.svg"
                  alt="GitHub Icon"
                  layout="fill"
                />
              </Link>
            )}
          </div>
          <div>{time}</div>
        </div>
        <div className="text-base text-gray-400">{description}</div>
      </div>
    </div>
  );
}
