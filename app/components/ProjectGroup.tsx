import Image from "next/image";
import Link from "next/link";

export default function ProjectGroup() {
  return (
    <div className="mx-8">
      <h2 className="text-3xl font-bold my-4">Projects</h2>
      <div className="flex items-start">
        <div className="shrink-0 relative w-10 h-10 bg-white rounded-md mr-2 mt-1">
          <Image
            className="pixelated"
            src="/icons/strongholdon.png"
            alt="Strongholdon Icon"
            layout="fill"
            objectFit="contain"
            unoptimized={true}
          />
        </div>
        <div className="grow">
          <div className="flex flex-wrap justify-between">
            <div className="flex pr-2 gap-x-2 items-center">
              <div className="text-base font-semibold">Strongholdon</div>
              <Link
                className="relative shrink-0 w-4 h-4"
                href="https://github.com/Crayon-ShinChan/strongholdon"
                target="_blank"
              >
                <Image
                  id="header__light"
                  className="rounded-full hover:ring hover:ring-orange-500 transition ease-in-out duration-300"
                  src="/icons/github-mark.svg"
                  alt="GitHub Icon"
                  layout="fill"
                />
                <Image
                  id="header__dark"
                  className="rounded-full hover:ring hover:ring-orange-500 transition ease-in-out duration-300"
                  src="/icons/github-mark-white.svg"
                  alt="GitHub Icon"
                  layout="fill"
                />
              </Link>
            </div>
            <div>Oct 2022 - Dec 2022</div>
          </div>
          <div className="text-base text-gray-400">
            A party game similar to{" "}
            <a
              className="global-hover"
              href="https://en.wikipedia.org/wiki/Crypt_of_the_NecroDancer"
            >
              Crypt of the NecroDancer
            </a>{" "}
            gameplay for up to 3 players.
          </div>
        </div>
      </div>
    </div>
  );
}
