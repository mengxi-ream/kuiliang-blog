import { ArrowRightIcon, QrCodeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import Tag from "@/app/components/Tag";
import Icon from "@/app/components/Icon";

export default function ProjectItem({
  name,
  icon,
  description,
  time,
  stack,
  postLink,
  QRCodeSrc,
  githubLink,
  youtubeLink,
}: Project) {
  return (
    <section className="p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800">
      <div className="text-sm text-gray-600 dark:text-gray-400">{time}</div>
      <div className="flex my-4 items-center">
        <div className="shrink-0 relative mr-4 bg-white rounded-md ring-1 ring-gray-100 shadow-lg shadow-gray-300 dark:ring-gray-800 dark:shadow-slate-500">
          {/*{icon}*/}
          <Icon
            src={icon.src}
            alt={name}
            size="10"
            innerSize={icon.innerSize}
            pixelated={icon.pixelated}
          />
        </div>
        <div className="relative -top-0.5">
          <div className="flex pr-2 gap-x-2 items-center">
            <h2 className="text-xl font-bold mr-1.5 ">{name}</h2>
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
            {stack && stack.map((s) => <Tag key={s} content={s} />)}
          </div>
        </div>
      </div>
      <p className="my-3 text-gray-700 dark:text-gray-300">{description}</p>
      <div className="flex items-center text-sm text-orange-500">
        Relevant posts
        <ArrowRightIcon className="ml-1 w-4 h-4" />
      </div>
    </section>
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
