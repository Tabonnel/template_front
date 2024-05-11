import { Locale } from "@/i18n-config";

export const isActivTab = (
  pathname: string,
  lang: Locale,
  fullPathname: string,
): boolean => {
  if (pathname === "/") {
    return `/${lang}` === fullPathname;
  }
  return `/${lang}` + pathname === fullPathname;
};
