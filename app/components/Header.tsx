"use client";
import Link from "next/link";
import ThemeMenu from "@/app/components/ThemeMenu";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

type Props = {
  name: string;
  href: string;
};

export default function Header() {
  const pages = [
    { name: "Posts", href: "/" },
    { name: "Projects", href: "/" },
    { name: "Tools", href: "/" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-opacity-80 bg-white backdrop-blur-md dark:bg-slate-900 dark:bg-opacity-80">
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
                className="rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 px-2"
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
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800">
        <Menu.Button className="w-6 h-6">
          {({ open }) => (open ? <XMarkIcon /> : <Bars3Icon />)}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right rounded-md bg-white dark:bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="px-1 py-1 ">
            {pages.map((page) => (
              <Menu.Item key={page.name}>
                {({ active }) => (
                  <Link
                    className={`${
                      active ? "bg-gray-100 dark:bg-slate-600" : ""
                    } group flex w-full items-center justify-center rounded-md px-2 py-2`}
                    href={page.href}
                  >
                    {page.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
