"use client";
import Link from "next/link";
import ThemeMenu from "@/components/ThemeMenu";
import Image from "next/image";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { mergeClassNames } from "@/lib/utils";

type Props = {
  name: string;
  href: string;
};

const pages = [
  { name: "Posts", href: "/posts" },
  { name: "Projects", href: "/projects" },
  // { name: "Tools", href: "/tools" },
  { name: "Books", href: "/books" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 after:backdrop-blur-lg dark:bg-background-dark/80 after:content-[''] after:absolute after:left-0 after:top-0 after:right-0 after:bottom-0 after:z-[-1]">
      <nav className="flex justify-between items-center py-4 px-6 md:px-8 max-w-5xl mx-auto">
        <Link href="/" className="flex items-center text-xl font-extrabold">
          <Image
            className="rounded-md bg-white mr-2.5"
            src="/icons/panda-logo.png"
            alt="Website Logo"
            width={32}
            height={32}
            unoptimized
          />
          Kuiliang Z<span className="text-sm relative -top-1">Z</span>
          <span className="text-xs relative -top-1.5">Z</span>
        </Link>
        <div className="hidden md:flex divide-x text-black dark:text-white dark:divide-gray-500">
          <div className="flex gap-x-6 px-6 text-lg">
            {pages.map((page) => (
              <Link
                className={mergeClassNames(
                  "rounded-md text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 px-2",
                  pathname === page.href && "bg-primary-100 dark:bg-primary-800"
                )}
                key={page.name}
                href={page.href}
              >
                {page.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center pl-6">
            <ThemeMenu />
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex items-center gap-x-4">
            <ThemeMenu />
            <MobileMenu pages={pages} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({ pages }: { pages: Props[] }) {
  return (
    <Popover className="pointer-events-auto md:hidden">
      <div className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-background-light-75 dark:hover:bg-background-dark-875">
        <Popover.Button className="w-6 h-6">
          <Bars3Icon />
        </Popover.Button>
      </div>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-gray-800/40 backdrop-blur-sm dark:bg-black/80 h-screen" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-background-light p-8 ring-1 ring-gray-900/5 dark:ring-gray-800/80 dark:bg-background-dark"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <XMarkIcon className="h-6 w-6" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-gray-100 text-base text-gray-800 dark:divide-gray-100/5 dark:text-gray-100">
                {pages.map((page) => (
                  <MobileNavItem href={page.href} key={page.name}>
                    {page.name}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}
