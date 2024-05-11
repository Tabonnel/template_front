declare type ScreenName =
  | "home"
  | "esport"
  | "about"
  | "contact"
  | "blog"
  | "shop";

// eslint-disable-next-line no-unused-vars
declare interface Screens {
  name: ScreenName;
  href: string;
}
