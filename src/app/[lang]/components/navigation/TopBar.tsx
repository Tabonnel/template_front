import Link from "next/link";
import React from "react";
import ToggleMode from "../theme/ToggleMode";
import LocaleSwitcher from "../lang/local-switcher";
import { Locale } from "@/i18n-config";
import { type getDictionary } from "@/get-dictionary";
import { isActivTab } from "./utils";
import Screens from "./Screens";
import Icon from "../ui/icon/Icon";

type Props = {
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (status: boolean) => void;
  isOpen: boolean;
  fullPathname: string;
  lang: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

export default function TopBar({
  setIsOpen,
  isOpen,
  lang,
  fullPathname,
  dictionary,
}: Props) {
  return (
    <div className="sm:mx-auto p-2 sm:p-4 flex sm:w-full sm:rounded-none items-center justify-center border-b m-2 sm:mt-0  sm:mb-5 shadow-sm bg-secondary h-12 w-12 rounded-full">
      <div className="flex items-center gap-5 w-4/6">
        <button
          className="text-foreground focus:outline-none focus:text-white sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name="burger" color="hsl(var(--foreground))" />
        </button>

        <ul
          className="hidden sm:flex gap-5 h-full items-center
        "
        >
          <li>
            <Icon name="logo" color="hsl(var(--foreground))" size={50} />
          </li>
          {Screens.map((screen) => (
            <li
              key={screen.name}
              className={`${
                isActivTab(screen.href, lang, fullPathname)
                  ? "border-primary border-b-2  px-2 "
                  : ""
              } transition-all duration-300 ease-in-out`}
            >
              <Link
                href={screen.href}
                className={`text-body text-foreground ${
                  isActivTab(screen.href, lang, fullPathname)
                    ? "font-bold "
                    : ""
                }`}
              >
                {dictionary.screen[screen.name].title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/6 hidden sm:flex justify-end gap-5">
        <div className="flex items-center gap-5">
          <LocaleSwitcher />
        </div>
        <div className="flex items-center gap-5">
          <ToggleMode />
        </div>

        <Icon name="twitter" />
      </div>
    </div>
  );
}
