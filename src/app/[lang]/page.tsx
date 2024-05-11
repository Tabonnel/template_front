import React from "react";
import Link from "next/link";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"esport"}> {dictionary.screen.esport.title} </Link>
    </main>
  );
}
