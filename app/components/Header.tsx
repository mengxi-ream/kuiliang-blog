"use client";
import Link from "next/link";
import ThemeMenu from "@/app/components/ThemeMenu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-800">
      <nav className="flex justify-between items-center p-6 md:px-8 max-w-5xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-x-1.5 text-xl font-black global-hover"
        >
          <Image
            src="/icons/panda.png"
            alt="Website Logo"
            width={32}
            height={32}
          />
          Kuiliang Zhang
        </Link>
        <div className="hidden md:flex divide-x text-black dark:text-white dark:divide-gray-500">
          <div className="flex gap-x-8 px-6 text-lg">
            <Link href="/">Posts</Link>
            <Link href="/">Projects</Link>
          </div>
          <div className="flex items-center pl-6">
            <ThemeMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
