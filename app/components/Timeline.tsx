import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import Tag from "@/app/components/Tag";

type ExpType = "work" | "study";

type Props = {
  expType: ExpType;
  title: string;
  organization: string;
  time: string;
  link: string;
  iconSrc: string;
  altText: string;
  isLatest?: boolean;
};

export default function Timeline() {
  const experiences: Array<Props> = [
    {
      expType: "work",
      title: "Software Developer Intern",
      organization: "Boeing",
      time: "Sep 2023 - Present",
      link: "https://www.boeing.com",
      iconSrc: "/icons/boeing-logo.svg",
      altText: "Boeing Logo",
      isLatest: true,
    },
    {
      expType: "study",
      title: "Computer Science Student",
      organization: "University of British Columbia",
      time: "Sep 2022 - Present",
      link: "https://www.ubc.ca",
      iconSrc: "/icons/ubc-logo.png",
      altText: "UBC Logo",
      isLatest: true,
    },
    {
      expType: "work",
      title: "Data Scientist",
      organization: "ByteDance",
      time: "Jul 2021 - Jul 2022",
      link: "https://www.bytedance.com",
      iconSrc: "/icons/bytedance-logo.svg",
      altText: "ByteDance Logo",
    },
    {
      expType: "study",
      title: "Finance Student",
      organization: "University of Nottingham",
      time: "Sep 2016 - Jun 2021",
      link: "https://www.nottingham.ac.uk",
      iconSrc: "/icons/uon-logo.jpg",
      altText: "UoN Logo",
    },
  ];

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 list-none">
      {experiences.map((exp, index) => (
        <TimelineItem
          key={index}
          {...exp}
          className={index === experiences.length - 1 ? "" : "mb-10"}
        />
      ))}
    </ol>
  );
}

const TimelineItem = ({
  expType,
  title,
  organization,
  time,
  link,
  iconSrc,
  altText,
  isLatest = false,
  className = "", // Add this line
}: Props & { className: string }) => {
  const SVGMapping: Record<ExpType, ReactElement> = {
    work: (
      <svg
        className="w-3 h-3 text-blue-800 dark:text-blue-300"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="8652"
      >
        <path
          d="M860 302.2h-61.8V231c0-72.8-59.2-132-132-132H358.3c-72.8 0-132 59.2-132 132v71.2H164c-55.2 0-100 44.8-100 100v82.9h896v-82.9c0-55.2-44.8-100-100-100zM290.3 231c0-37.5 30.5-68 68-68h307.9c37.5 0 68 30.5 68 68v71.2H290.3V231zM604.9 549.2V608c0 26.5-21.5 48-48 48h-86.2c-26.5 0-48-21.5-48-48v-58.9H64v260.6c0 55.2 44.8 100 100 100h696c55.2 0 100-44.8 100-100V549.2H604.9z"
          p-id="8653"
        ></path>
      </svg>
    ),
    study: (
      <svg
        className="w-4 h-4 text-blue-800 dark:text-blue-300"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6109"
      >
        <path
          d="M878.43 273.46l-339.5-94.08c-17.43-5.99-36.47-5.98-53.86 0l-337.53 93.46-1.96 0.63c-20.01 7.18-32.93 25.55-32.93 46.8 0 21.26 12.93 39.64 32.93 46.81l339.5 94.07c8.7 2.99 17.81 4.49 26.93 4.49 9.11 0 18.22-1.5 26.93-4.49l305.8-84.66v173.48c0 15.26 12.37 27.63 27.63 27.63S900 565.23 900 549.97V351.86c7.15-8.66 11.37-19.63 11.37-31.6-0.01-21.25-12.94-39.62-32.94-46.8z"
          p-id="6110"
        ></path>
        <path
          d="M805.99 507.2c0-36.57-34.88-63.06-70.1-53.24l-79.75 22.23 0.04 0.02L529.4 511.1a65.9 65.9 0 0 1-34.81 0.04l-129-35.21-79.64-22.2c-35.23-9.82-70.1 16.67-70.1 53.24v200.06c0 37.27 24.87 69.95 60.78 79.9l208.43 57.71c8.71 3 17.82 4.49 26.94 4.49 9.11 0 18.23-1.49 26.94-4.49l206.32-57.11c35.78-9.92 60.77-42.78 60.77-79.9V546.14c0-0.35-0.04-0.69-0.05-1.03V507.2z"
          p-id="6111"
        ></path>
      </svg>
    ),
  };

  return (
    <li className={`${className} ml-8`}>
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        {SVGMapping[expType]}
      </span>
      <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
        {title}{" "}
        {isLatest && (
          <span className="ml-1">
            <Tag content="Latest" type="primary" />
          </span>
        )}
      </h3>
      <Link
        className="flex items-center mb-1 text-base text-gray-900 global-hover dark:text-white"
        href={link}
        target="_blank"
      >
        <span className="relative w-5 h-5 mr-1.5 bg-white border-2 border-white rounded-sm">
          <Image
            src={iconSrc}
            alt={altText}
            fill
            style={{ objectFit: "contain" }}
          />
        </span>
        {organization}
      </Link>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
        {time}
      </time>
    </li>
  );
};
