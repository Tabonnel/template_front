import * as React from "react";

type Props = {
  color: ThemeColorsValues;
  size: number;
};

const IconChevronRight = ({ color, size }: Props) => (
  <svg
    id="Layer_1"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
  >
    <path
      fill={color}
      d="m6.293 22.707a1 1 0 0 1 0-1.414l9.293-9.293-9.293-9.293a1 1 0 0 1 1.414-1.414l10 10a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1 -1.414 0z"
    />
  </svg>
);
export default IconChevronRight;
