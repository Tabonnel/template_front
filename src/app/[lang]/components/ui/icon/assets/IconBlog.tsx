import * as React from "react";

type Props = {
  color: ThemeColorsValues;
  size: number;
};

const IconBlog = ({ color, size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke={color}
      strokeWidth={2}
      d="M16 7h3v4h-3V7Zm-7 8h11M9 11h4M9 7h4M6 18.5a2.5 2.5 0 1 1-5 0V7h5.025M6 18.5V3h17v15.5a2.5 2.5 0 0 1-2.5 2.5h-17"
    />
  </svg>
);
export default IconBlog;
