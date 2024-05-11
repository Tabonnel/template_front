import * as React from "react";

type Props = {
  color: ThemeColorsValues;
  size: number;
};

const IconCLose = ({ color, size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7.30723 17.7757C7.00818 18.0748 6.52333 18.0748 6.22429 17.7757C5.92524 17.4767 5.92524 16.9918 6.22429 16.6928L10.9171 12L6.22429 7.30723C5.92524 7.00818 5.92524 6.52333 6.22429 6.22429C6.52333 5.92524 7.00818 5.92524 7.30723 6.22429L12 10.9171L16.6928 6.22429C16.9918 5.92524 17.4767 5.92524 17.7757 6.22429C18.0748 6.52333 18.0748 7.00818 17.7757 7.30723L13.0829 12L17.7757 16.6928C18.0748 16.9918 18.0748 17.4767 17.7757 17.7757C17.4767 18.0748 16.9918 18.0748 16.6928 17.7757L12 13.0829L7.30723 17.7757Z"
      fill={color}
    />
  </svg>
);
export default IconCLose;