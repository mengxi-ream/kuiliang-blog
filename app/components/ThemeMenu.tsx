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
      <div className="flex items-center">
        <Menu.Button className="w-6 h-6 global-hover">
          {mounted ? (
            <div>
              <SunIcon id="header__light" />
              <MoonIcon id="header__dark" />
            </div>
          ) : (
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
        <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right rounded-md bg-white dark:bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="px-1 py-1 ">
            <ThemeMenuItem
              theme="light"
              icon={
                <SunIcon className="mr-2 h-5 w-5 stroke-1 fill-orange-500 stroke-orange-300" />
              }
              label="Light"
              setTheme={setTheme}
            />
            <ThemeMenuItem
              theme="dark"
              icon={
                <MoonIcon className="mr-2 h-5 w-5 stroke-1 fill-orange-500 stroke-orange-300" />
              }
              label="Dark"
              setTheme={setTheme}
            />
            <ThemeMenuItem
              theme="system"
              icon={
                <CogIcon className="mr-2 h-5 w-5 stroke-1 fill-orange-500 stroke-orange-300" />
              }
              label="System"
              setTheme={setTheme}
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
}: {
  theme: string;
  icon: ReactElement;
  label: string;
  setTheme: (theme: string) => void;
}) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={generateClassName(active)}
          onClick={() => setTheme(theme)}
        >
          {icon}
          {label}
        </button>
      )}
    </Menu.Item>
  );
}

function generateClassName(active: boolean) {
  let baseClass = "group flex w-full items-center rounded-md px-2 py-2 text-sm";
  if (active) {
    return `${baseClass} bg-orange-500 text-white dark:text-grey-900`;
  }
  return `${baseClass} text-gray-900 dark:text-white`;
}
