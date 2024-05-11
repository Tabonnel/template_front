import Link from "next/link";
import screens from "../navigation/Screens";
import { socialLinks } from "../navigation/SocialMedia";
import Icon from "./icon/Icon";
import { type getDictionary } from "@/get-dictionary";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

export default function Footer({ dictionary }: Props) {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-4 sm:py-6 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {screens.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-foreground hover:text-primary"
              >
                {dictionary.screen[item.name].title}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <Icon name={item.iconName} />
            </a>
          ))}
        </div>
        {/*   // TODO mettre dans dictionnaire  */}
        <p className="mt-10 text-center text-xs leading-5 text-foreground">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
