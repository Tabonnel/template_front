import React from "react";

import Counter from "@components/lang/counter";
import LocaleSwitcher from "@components/lang/local-switcher";
import Icon from "@components/ui/icon/Icon";
import Carousel from "../components/ui/Caroussel";
import Button from "../components/ui/Button";

import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

// type Props = {};

export default async function Esport({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Button
        buttonText="Bouton fill"
        buttonStyle="fill"
        size="small"
        color="hsl(var(--primary))"
      />
      <Button
        buttonText="Bouton Outline"
        buttonStyle="outline"
        size="small"
        color="hsl(var(--primary))"
      />
      <Button
        buttonText="Bouton fill"
        buttonStyle="fill"
        size="medium"
        color="hsl(var(--primary))"
      />
      <Button
        buttonText="Bouton Outline"
        buttonStyle="outline"
        size="medium"
        color="hsl(var(--primary))"
      />
      <Button
        buttonText="Bouton fill"
        buttonStyle="fill"
        size="big"
        color="hsl(var(--primary))"
      />
      <Button buttonText="Bouton Outline" buttonStyle="outline" size="big" />
      <Carousel />
      <Icon name="logo" color="hsl(var(--foreground))" size={100} />
      <Icon name="home" color="hsl(var(--primary))" size={50} />
      <Icon name="home" color="hsl(var(--secondary))" size={50} />
      <Icon name="sun" color="hsl(var(--secondary))" size={50} />
      <Icon name="en" color="hsl(var(--secondary))" size={50} />
      <Icon name="en" color="hsl(var(--secondary))" size={50} />
      <Icon name="close" color="hsl(var(--secondary))" size={50} />
      <Icon name="burger" color="hsl(var(--secondary))" size={50} />
      <h1 className="text-h1">Un titre H1</h1>
      <h2 className="text-h2">Un titre H2</h2>
      <h3 className="text-h3">Un titre H3</h3>
      <h4 className="text-h4">Un titre H4</h4>
      <p className="text-body">Un texte body</p>
      <p className="text-label text-secondary-foreground">Un texte label</p>
      <div>
        <LocaleSwitcher />
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server: {dictionary.screen.esport.title}
        </p>
        <Counter dictionary={dictionary.component.counter} />
      </div>
    </div>
  );
}
