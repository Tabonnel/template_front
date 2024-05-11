import * as React from "react";

type Props = {
  color: ThemeColorsValues;
  size: number;
};

const IconBurger = ({ color, size }: Props) => (
  <svg
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m4 5c0-.55228.44772-1 1-1h14c.5523 0 1 .44772 1 1s-.4477 1-1 1h-14c-.55228 0-1-.44772-1-1zm0 7c0-.5523.44772-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1h-14c-.55228 0-1-.4477-1-1zm0 7c0-.5523.44772-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1h-14c-.55228 0-1-.4477-1-1z"
      fill={color}
    />
  </svg>
);
export default IconBurger;
