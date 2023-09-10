import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { SunIcon, MoonIcon, CogIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { ReactElement } from "react";

export default function ThemeMenu() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-background-light-75 dark:hover:bg-background-dark-875">
        <Menu.Button className="w-6 h-6">
          {mounted ? (
            <div>
              <SunIcon id="header__light" />
              <MoonIcon id="header__dark" className="p-0.5" />
            </div>
          ) : (
            // when unmounted, render an empty div to occupy the space
            <div />
          )}
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
        <Menu.Items className="absolute right-0 mt-2 w-28 origin-top-right rounded-md bg-white dark:bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="px-1 py-1 ">
            <ThemeMenuItem
              theme="light"
              icon={<SunIcon className="h-5 w-5" />}
              label="Light"
              setTheme={setTheme}
              selected={theme === "light"}
            />
            <ThemeMenuItem
              theme="dark"
              icon={<MoonIcon className="h-4 w-4" />}
              label="Dark"
              setTheme={setTheme}
              selected={theme === "dark"}
            />
            <ThemeMenuItem
              theme="system"
              icon={<CogIcon className="h-5 w-5" />}
              label="System"
              setTheme={setTheme}
              selected={theme === "system"}
            />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function ThemeMenuItem({
  theme,
  icon,
  label,
  setTheme,
  selected,
}: {
  theme: string;
  icon: ReactElement;
  label: string;
  setTheme: (theme: string) => void;
  selected: boolean;
}) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={generateClassName(active, selected)}
          onClick={() => setTheme(theme)}
        >
          <div className="flex items-center justify-center h-5 w-5 mr-2">
            {icon}
          </div>
          {label}
        </button>
      )}
    </Menu.Item>
  );
}

function generateClassName(active: boolean, selected: boolean) {
  let baseClass =
    "group flex w-full items-center rounded-md px-2 py-1.5 my-0.5";
  if (active) {
    baseClass = `${baseClass} bg-gray-100 dark:bg-slate-600`;
  }
  if (selected) {
    baseClass = `${baseClass} ring-1 ring-orange-500 ring-opacity-60`;
  }
  return baseClass;
}
