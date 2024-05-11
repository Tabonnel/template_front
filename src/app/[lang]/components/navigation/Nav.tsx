"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n-config";
import { type getDictionary } from "@/get-dictionary";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

type Props = {
  lang: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

const Nav = ({ lang, dictionary }: Props) => {
  const fullPathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {isOpen && (
        <div
          className="fixed inset-0"
          onClick={() => setIsOpen(false)}
          style={{ width: "100%", cursor: "pointer" }}
        ></div>
      )}
      <div
        className={`sm:hidden transition-transform duration-500 ease-in-out transform ${isOpen ? "translate-x-0 fixed" : "-translate-x-full"} z-20`}
      >
        <SideBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          lang={lang}
          fullPathname={fullPathname}
          dictionary={dictionary}
        />
      </div>

      <div
        className={`transition-all duration-500 ease-in-out w-full ${isOpen ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-full"} fixed z-20`}
      >
        <TopBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          lang={lang}
          fullPathname={fullPathname}
          dictionary={dictionary}
        />
      </div>
    </nav>
  );
};

export default Nav;
