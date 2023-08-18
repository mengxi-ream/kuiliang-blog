"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function ProfileCard() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", { timeZone: "America/Vancouver" })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Vancouver",
        })
      );
    }, 1000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  const socialLinks = [
    { url: "https://www.linkedin.com/in/kuiliang-zhang/", network: "linkedin" },
    { url: "https://github.com/Crayon-ShinChan", network: "github" },
    {
      url: "https://www.youtube.com/channel/UCWCV-rLxr-gOvi6OZm9wIvw",
      network: "youtube",
    },
    { url: "https://medium.com/@z1219202167", network: "medium" },
  ];

  return (
    <div className="relative">
      <div className="absolute top-20 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:opacity-100 dark:bg-purple-100" />
      <div className="absolute top-20 -right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:opacity-100 dark:bg-yellow-100" />
      <div className="absolute -bottom-4 left-8 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:opacity-100 dark:bg-pink-100" />
      <div className="relative my-10 bg-white p-6 rounded-xl space-y-4 text-black dark:bg-slate-800 dark:text-white">
        <Image
          className="mx-auto my-6 rounded-full h-32 w-32 ring-2 ring-orange-500 ring-offset-4 ring-opacity-50 dark:ring-offset-slate-800"
          src="/images/profile-photo.png"
          alt="Kuiliang Zhang"
          width={160}
          height={160}
          priority={true}
        />
        <div className="text-center text-3xl font-semibold">Kuiliang Zhang</div>
        <div className="text-center text-base">
          <div>
            <span className="font-semibold">Chinese Name: </span>章奎亮
          </div>

          <div>
            <span className="font-semibold">Email: </span>
            <a
              href="mailto:kuiliang.zhang@outlook.com"
              className="global-hover"
            >
              kuiliang.zhang@outlook.com
            </a>
          </div>

          <div suppressHydrationWarning>
            <span className="font-semibold">Location: </span>
            <a
              href="https://www.google.com/maps/place/Vancouver,+BC/@49.2577354,-123.123904,12z/data=!3m1!4b1!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="global-hover"
            >
              Vancouver
            </a>
            , {currentTime}
          </div>
        </div>
        <div className="flex justify-center gap-x-3">
          {socialLinks.map((link) => (
            <SocialIcon
              key={link.url}
              url={link.url}
              network={link.network}
              target="_blank"
              fgColor="white"
              bgColor="currentColor"
              style={{ height: 40, width: 40 }}
              className="text-black rounded-full global-hover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
