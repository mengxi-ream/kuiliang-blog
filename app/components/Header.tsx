"use client";
import Link from "next/link";
import ThemeMenu from "@/app/components/ThemeMenu";

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-800">
      <nav className="flex justify-between items-center p-6 md:px-8 max-w-5xl mx-auto">
        <Link href="/" className="text-orange-500 text-xl font-black">
          Kuiliang Zhang
        </Link>
        <div className="hidden md:flex divide-x text-black dark:text-white dark:divide-gray-500">
          <div className="flex gap-x-8 px-6 text-lg">
            <Link href="/">Posts</Link>
            <Link href="/">Projects</Link>
            <Link href="/">About Me</Link>
          </div>
          <div className="flex items-center pl-6">
            <ThemeMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
