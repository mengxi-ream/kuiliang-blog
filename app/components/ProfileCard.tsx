"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export function ProfileCard() {
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

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white p-6 rounded-xl shadow-md space-y-4">
      <div className="flex items-center rounded-full mx-auto h-36 w-36 border-2 border-orange-500 border-opacity-80">
        <Image
          className="rounded-full h-32 w-32 mx-auto"
          src="/images/profile-photo.png"
          alt="Kuiliang Zhang"
          width={160}
          height={160}
          priority={true}
        />
      </div>
      <div className="text-center text-3xl font-extrabold">Kuiliang Zhang</div>
      <div className="text-center text-base">
        <div>
          <span className="font-bold">Chinese Name: </span>章奎亮
        </div>

        <div>
          <span className="font-bold">Email: </span>
          <a
            href="mailto:kuiliang.zhang@outlook.com"
            className="hover:text-orange-500 transition duration-300 ease-in-out"
          >
            kuiliang.zhang@outlook.com
          </a>
        </div>

        <div>
          <span className="font-bold">Location: </span>
          <a
            href="https://www.google.com/maps/place/Vancouver,+BC/@49.2577354,-123.123904,12z/data=!3m1!4b1!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition duration-300 ease-in-out"
          >
            Vancouver
          </a>
          , {currentTime}
        </div>
      </div>
    </div>
  );
}
