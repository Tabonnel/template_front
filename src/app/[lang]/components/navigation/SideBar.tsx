import { Locale } from "@/i18n-config";
import React from "react";
import Icon from "../ui/icon/Icon";
import { isActivTab } from "./utils";
import Screens from "./Screens";
import Link from "next/link";
import ToggleMode from "../theme/ToggleMode";
import LocaleSwitcher from "../lang/local-switcher";
import { type getDictionary } from "@/get-dictionary";

type Props = {
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (status: boolean) => void;
  isOpen: boolean;
  fullPathname: string;
  lang: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

export default function SideBar({
  setIsOpen,
  isOpen,
  lang,
  fullPathname,
  dictionary,
}: Props) {
  return (
    <div className="bg-secondary text-foreground w-[120px] h-screen fixed top-0 left-0 flex flex-col justify-between">
      <div>
        <button
          className="text-foreground focus:outline-none focus:text-white sm:hidden m-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name="close" color="hsl(var(--foreground))" size={32} />
        </button>
        <ul className="ml-2">
          {Screens.map((screen) => (
            <li
              key={screen.name}
              className={`${
                isActivTab(screen.href, lang, fullPathname) ? " mb-6 " : "mb-2"
              } transition-all duration-300 ease-in-out`}
            >
              <Link
                href={screen.href}
                className={`text-body text-foreground ${
                  isActivTab(screen.href, lang, fullPathname)
                    ? "font-bold border-primary border-b-2"
                    : ""
                }`}
              >
                {dictionary.screen[screen.name].title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-2 mt-12 flex justify-between">
          <div>
            <LocaleSwitcher />
          </div>
          <div>
            <Icon name="twitter" />
          </div>
          <div className="">
            <ToggleMode />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full p-4">
        <Icon name="logo" size={60} color="hsl(var(--foreground))" />
      </div>
    </div>
  );
}
