const projects: Array<Product> = [
  {
    name: "Personal Website",
    icon: {
      src: "/icons/panda-logo.png",
      innerSize: "11/12",
    },
    imageSrc: "/images/projects/personal-website.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    description:
      "My personal website built with Next.js. It includes my experiences, blog, projects, and integrated tools I created for folks.",
    time: "Aug 2023 - Present",
    recent: true,
  },
  {
    name: "Strongholdon",
    icon: {
      src: "/icons/strongholdon.png",
      innerSize: "11/12",
      pixelated: true,
    },
    imageSrc: "/images/projects/strongholdon.png",
    tags: ["Java"],
    description:
      "This program is a multiplayer party game inspired by Crypt of the NecroDance.",
    time: "Oct 2022 - Dec 2022",
    recent: true,
    mainLink: "https://github.com/Crayon-ShinChan/strongholdon",
    githubLink: "https://github.com/Crayon-ShinChan/strongholdon",
    youtubeLink: "https://www.youtube.com/shorts/hSHPS37V1v0",
  },
  {
    name: "uCourse",
    icon: {
      src: "/icons/uCourse.png",
      innerSize: "11/12",
    },
    imageSrc: "/images/projects/uCourse.png",
    description:
      "An online platform on WeChat for UNNC students to share their course reviews and manage timetables.",
    time: "Mar 2018 - May 2021",
    tags: ["React", "Node.js"],
    recent: false,
    QRCodeSrc: "/QRCodes/ucourse-wxcode.webp",
  },
  {
    name: "UNNCMap",
    icon: {
      src: "/icons/UNNCMap.png",
      innerSize: "5/6",
    },
    imageSrc: "/images/projects/UNNCMap.png",
    description:
      "A real-time interactive map on WeChat to help UNNC freshmen explore campus.",
    time: "Jul 2019 - Sep 2019",
    tags: ["React", "Node.js", "MongoDB"],
    recent: false,
    QRCodeSrc: "/QRCodes/unncmap-wxcode.webp",
  },
];

export default projects;
