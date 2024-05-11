import React from "react";
import icons from "./Icons";

interface Props {
  name: IconName;
  size?: number;
  color?: ThemeColorsValues;
}

const Icon = ({ name, size = 24, color = "currentColor" }: Props) => {
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} />;
};

export default Icon;
