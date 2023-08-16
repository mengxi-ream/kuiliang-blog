import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  name: string;
  icon?: ReactElement;
  description: string;
  time: string;
  githubLink?: string;
  youtubeLink?: string;
};

export default function ProjectGroup() {
  const projects: Array<Props> = [
    {
      name: "Personal Website",
      icon: (
        <Image
          src="/icons/panda-logo.png"
          alt="Kuiliang's Blog Icon"
          fill
          style={{ objectFit: "contain" }}
          unoptimized
        />
      ),
      description:
        "My personal website built with Next.js (The site you are browsing right now 😃).",
      time: "Aug 2023 - Present",
    },
    {
      name: "Strongholdon",
      icon: (
        <Image
          className="pixelated"
          src="/icons/strongholdon.png"
          alt="Strongholdon Icon"
          fill
          style={{ objectFit: "contain" }}
          unoptimized
        />
      ),
      description:
        "A party game similar to Crypt of the NecroDance gameplay for up to 3 players.",
      time: "Oct 2022 - Dec 2022",
      githubLink: "https://github.com/Crayon-ShinChan/strongholdon",
      youtubeLink: "https://www.youtube.com/shorts/hSHPS37V1v0",
    },
    {
      name: "UNNCMap",
      icon: (
        <div className="relative flex items-center justify-center w-8 h-8">
          <Image
            src="/icons/UNNCMap.png"
            alt="UNNCMap Icon"
            fill
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>
      ),
      description:
        "A real-time interactive map on WeChat to help UNNC freshmen explore campus.",
      time: "Jul 2019 - Sep 2019",
    },
    {
      name: "uCourse",
      icon: (
        <div className="relative flex items-center justify-center w-9 h-9">
          <Image
            src="/icons/uCourse.png"
            alt="uCourse Icon"
            fill
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>
      ),
      description:
        "An online platform on WeChat for UNNC students to share their course reviews and manage timetables.",
      time: "Mar 2018 - May 2021",
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
  youtubeLink = undefined,
}: Props) {
  return (
    <div className="flex items-start mb-4 p-1 rounded-md hover:bg-gray-100 hover:dark:bg-slate-700 transition ease-in-out duration-200">
      {icon && (
        <div className="shrink-0 relative flex justify-center items-center w-10 h-10 bg-white rounded-md mr-2 mt-0.5">
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
              <ProjectLink
                href={githubLink}
                iconSrcLight="/icons/github-mark.svg"
                iconSrcDark="/icons/github-mark-white.svg"
                iconAlt="Github Icon"
              />
            )}
            {youtubeLink && (
              <ProjectLink
                href={youtubeLink}
                iconSrcLight="/icons/yt_icon_mono_light.png"
                iconSrcDark="/icons/yt_icon_mono_dark.png"
                iconAlt="Youtube Icon"
              />
            )}
          </div>
          <div>{time}</div>
        </div>
        <div className="text-base text-gray-400">{description}</div>
      </div>
    </div>
  );
}

function ProjectLink({
  href,
  iconSrcLight,
  iconSrcDark,
  iconAlt,
}: {
  href: string;
  iconSrcLight: string;
  iconSrcDark: string;
  iconAlt: string;
}) {
  return (
    <Link className="relative shrink-0 w-4 h-4" href={href} target="_blank">
      <Image
        id="header__light"
        src={iconSrcLight}
        alt={iconAlt}
        fill
        style={{ objectFit: "contain" }}
      />
      <Image
        id="header__dark"
        src={iconSrcDark}
        alt={iconAlt}
        fill
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
}
