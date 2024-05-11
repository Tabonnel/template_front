import * as React from "react";

type Props = {
  color: ThemeColorsValues;
  size: number;
};

const IconContact = ({ color, size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 14"
  >
    <path fill="none" stroke={color} d="M6 8L.5 5.5l13-5l-5 13zm0 0l3-3" />
  </svg>
);
export default IconContact;
