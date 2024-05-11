import React from "react";

type Props = {
  size?: "full" | "medium" | "small";
  color?: ColorNames;
};

export default function Separator({
  color = "primary",
  size = "medium",
}: Props) {
  let sizeClass = "";
  switch (size) {
    case "full":
      sizeClass = "w-full";
      break;
    case "medium":
      sizeClass = "w-1/2";
      break;
    case "small":
      sizeClass = "w-1/4";
      break;
    default:
      sizeClass = "w-full";
  }

  const borderColor = `border-${color}`;

  return (
    <div className="relative my-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className={` border-[1px] mx-auto  ${borderColor} ${sizeClass}`} />
      </div>
    </div>
  );
}
