import Link from "next/link";
import { SunIcon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center p-6 md:px-8 max-w-5xl mx-auto">
        <Link href="/" className="text-orange-500 text-xl font-extrabold">
          Kuiliang Zhang
        </Link>
        <div className="hidden md:flex divide-x">
          <div className="flex gap-x-6 px-6 text-lg">
            <Link href="/">Posts</Link>
            <Link href="/">Projects</Link>
            <Link href="/">About</Link>
          </div>
          <div className="flex items-center pl-6">
            <button>
              <SunIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
