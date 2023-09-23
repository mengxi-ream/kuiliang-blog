"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Icons } from "./Icons";
import { socialMedia } from "@/config/socialMedia";
import Link from "next/link";
import HanziWriter from "hanzi-writer";

export default function ProfileCard() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", { timeZone: "America/Vancouver" })
  );

  const hanZiSize = 36;

  useEffect(() => {
    var char1 = HanziWriter.create("char1", "章", {
      width: hanZiSize,
      height: hanZiSize,
      padding: 5,
      showOutline: true,
    });
    var char2 = HanziWriter.create("char2", "奎", {
      width: hanZiSize,
      height: hanZiSize,
      padding: 5,
      showOutline: true,
    });
    var char3 = HanziWriter.create("char3", "亮", {
      width: hanZiSize,
      height: hanZiSize,
      padding: 5,
      showOutline: true,
    });
    chainAnimationsForever(char1, char2, char3);

    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Vancouver",
        })
      );
    }, 1000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="relative backdrop-opacity-100">
      <div className="relative bg-background-light-100 p-6 rounded-3xl space-y-4 text-black dark:bg-background-dark-850">
        <Image
          className="mx-auto my-6 rounded-full h-32 w-32 ring-4 ring-primary ring-offset-background-light-100 ring-offset-4 dark:ring-offset-background-dark-850"
          src="/images/profile-photo.png"
          alt="Kuiliang Zhang"
          width={160}
          height={160}
          priority={true}
        />
        <div className="text-center text-3xl font-extrabold text-black dark:text-white">
          Kuiliang Zhang
        </div>
        <div
          className={`flex justify-center !mt-0 !-mb-2 after:h-[${hanZiSize}px]`}
        >
          <div id="char1"></div>
          <div id="char2"></div>
          <div id="char3"></div>
        </div>
        <div className="text-center text-base text-gray-700 dark:text-gray-300">
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
        <div className="flex justify-center gap-x-5">
          {socialMedia.map((media) => {
            const Icon = Icons[media.icon];
            return (
              <Link href={media.href} key={media.href}>
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function chainAnimationsForever(
  char1: HanziWriter,
  char2: HanziWriter,
  char3: HanziWriter
) {
  var delayBetweenAnimations = 1000; // milliseconds
  char1.hideCharacter();
  char2.hideCharacter();
  char3.hideCharacter();

  char1.animateCharacter({
    onComplete: function () {
      setTimeout(function () {
        char2.animateCharacter({
          onComplete: function () {
            setTimeout(function () {
              char3.animateCharacter({
                onComplete: function () {
                  setTimeout(
                    () => chainAnimationsForever(char1, char2, char3),
                    delayBetweenAnimations
                  );
                },
              });
            }, delayBetweenAnimations);
          },
        });
      }, delayBetweenAnimations);
    },
  });
}
