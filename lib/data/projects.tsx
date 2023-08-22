import Image from "next/image";

const projects: Array<Project> = [
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
    imageSrc: "/images/projects/personal-website.png",
    stack: ["Next.js", "React", "Tailwind CSS"],
    description:
      "My personal website built with Next.js (The site you are browsing right now 😃).",
    detail:
      "My personal website built with Next.js. It includes my experiences, blog, projects, and integrated tools I created for folks.",
    time: "Aug 2023 - Present",
    recent: true,
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
    imageSrc: "/images/projects/strongholdon.png",
    stack: ["Java"],
    description:
      "A party game similar to Crypt of the NecroDance gameplay for up to 3 players.",
    detail:
      "This program is a local multiplayer game, supporting two to four players to play. Players are placed in a two-dimensional map and each player is assigned a color. players need to rhythmically follow a beat to walk on the map and occupy more area. After a certain amount of time, the game will settle the final color area as the final score for each player.",
    time: "Oct 2022 - Dec 2022",
    recent: true,
    githubLink: "https://github.com/Crayon-ShinChan/strongholdon",
    youtubeLink: "https://www.youtube.com/shorts/hSHPS37V1v0",
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
    stack: ["React", "Node.js"],
    recent: false,
    QRCodeSrc: "/QRCodes/ucourse-wxcode.webp",
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
    stack: ["React", "Node.js", "MongoDB"],
    recent: false,
    QRCodeSrc: "/QRCodes/unncmap-wxcode.webp",
  },
];

export default projects;
