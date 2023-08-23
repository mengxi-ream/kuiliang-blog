import Image from "next/image";
import { ArrowRightIcon, QrCodeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ProjectItem({
  name,
  icon,
  imageSrc,
  description,
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
        <div className="text-sm text-gray-600 dark:text-gray-400">{time}</div>
        <div className="flex my-2 items-center">
          <div className="shrink-0 relative flex justify-center items-center w-10 h-10 mr-3 bg-white rounded-md ring-1 ring-gray-100 shadow-md shadow-gray-300/20 dark:ring-gray-600 dark:shadow-gray-500/40">
            {icon}
          </div>
          <div className="relative -top-0.5">
            <div className="flex pr-2 gap-x-2 items-center">
              <h2 className="text-xl font-semibold">{name}</h2>
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
            <div className="flex flex-wrap gap-x-2">
              {stack &&
                stack.map((s) => (
                  <span
                    key={s}
                    className="px-1 mt-1 text-sm rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {s}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <p className="pb-3 text-gray-700 dark:text-gray-300">{description}</p>
        <div className="flex items-center text-sm text-orange-500">
          Relevant posts
          <ArrowRightIcon className="ml-1 w-4 h-4" />
        </div>
      </section>
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
