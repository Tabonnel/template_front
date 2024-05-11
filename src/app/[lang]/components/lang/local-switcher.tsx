"use client";

// Utiliser le local switcher pour modifier manuellement la langue, supprimer le middleware dans ce cas.

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";
import Dropdown from "../ui/Select";
import Icon from "../ui/icon/Icon";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const renderSwitcher = () => {
    return (
      <ul>
        {i18n.locales.map((locale) => (
          <li key={locale} className="p-1">
            <Link href={redirectedPathName(locale)} passHref>
              <Icon name={locale} size={20} />
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderTrigger = () => {
    return <Icon name={pathName.split("/")[1] as IconName} size={20} />;
  };

  return (
    <Dropdown menuContent={renderSwitcher()} triggerContent={renderTrigger()} />
  );
}
