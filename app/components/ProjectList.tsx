import Image from "next/image";
import Link from "next/link";
import { QrCodeIcon } from "@heroicons/react/24/solid";
import projects from "@/lib/data/projects";

export default function ProjectList() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold my-4">Recent Projects</h2>
      {projects.map(
        (project) =>
          project.recent && <Project key={project.name} {...project} />
      )}
    </section>
  );
}

function Project({
  name,
  icon,
  description,
  time,
  QRCodeSrc,
  githubLink,
  youtubeLink,
}: Project) {
  return (
    <div className="flex items-start mb-4 p-1 rounded-md hover:bg-gray-100 hover:dark:bg-slate-800 transition ease-in-out duration-200">
      {icon && (
        <div className="shrink-0 relative flex justify-center items-center w-10 h-10 bg-white rounded-md mr-2 mt-0.5">
          {icon}
        </div>
      )}
      <div className="grow">
        <div className="flex flex-wrap justify-between text-base">
          <div className="flex pr-2 gap-x-2 items-center">
            <div className="font-semibold">{name}</div>
            {QRCodeSrc && <QRCode QRCodeSrc={QRCodeSrc} />}
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

function QRCode({ QRCodeSrc }: { QRCodeSrc: string }) {
  return (
    <div className="relative hover:cursor-pointer group">
      <QrCodeIcon className="w-4 h-4" />
      <div className="absolute hidden group-hover:block w-24 h-24 bottom-5 -left-9 z-50 rounded-lg bg-white shadow-md shadow-gray-200 dark:shadow-gray-600">
        <Image src={QRCodeSrc} alt="QR Code" fill className="p-2" />
      </div>
    </div>
  );
}
