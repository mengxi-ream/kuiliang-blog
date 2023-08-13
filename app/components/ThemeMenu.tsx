import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { SunIcon, MoonIcon, CogIcon } from "@heroicons/react/24/solid";
import {
  toDarkMode,
  toLightMode,
  toSystemMode,
  updateTheme,
} from "@/lib/theme";

export default function ThemeMenu() {
  useEffect(() => {
    updateTheme();
  }, []);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center">
        <Menu.Button className="w-6 h-6 global-hover">
          <SunIcon id="header__light" />
          <MoonIcon id="header__dark" />
          <CogIcon id="header__system" />
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
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-orange-500 text-white"
                      : "text-gray-900 dark:text-white"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={toLightMode}
                >
                  {active ? (
                    <SunIcon className="mr-2 h-5 w-5 stroke-1 fill-orange-500 stroke-orange-300" />
                  ) : (
                    <SunIcon className="mr-2 h-5 w-5 stroke-1 stroke-orange-500 fill-orange-300" />
                  )}
                  Light
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-orange-500 text-white dark:text-grey-900"
                      : "text-gray-900 dark:text-white"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={toDarkMode}
                >
                  {active ? (
                    <MoonIcon className="mr-2 h-5 w-5 stroke-1 fill-orange-500 stroke-orange-300" />
                  ) : (
                    <MoonIcon className="mr-2 h-5 w-5 stroke-1 stroke-orange-500 fill-orange-300" />
                  )}
                  Dark
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-orange-500 text-white dark:text-grey-900"
                      : "text-gray-900 dark:text-white"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={toSystemMode}
                >
                  {active ? (
                    <CogIcon className="mr-2 h-5 w-5 stroke-1 fill-orange-500 stroke-orange-300" />
                  ) : (
                    <CogIcon className="mr-2 h-5 w-5 stroke-1 stroke-orange-500 fill-orange-300" />
                  )}
                  System
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
