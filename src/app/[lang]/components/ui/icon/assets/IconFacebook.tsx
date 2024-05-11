import * as React from "react";

type Props = {
  color: ThemeColorsValues;
  size: number;
};

const IconFacebook = ({ color, size }: Props) => (
  <svg
    viewBox="0 0 100 100"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Layer_1" />
    <g id="Layer_2">
      <g>
        <path
          d="m50 2.5c-58.892 1.725-64.898 84.363-7.46 95h7.46 7.46c57.451-10.647 51.419-93.281-7.46-95z"
          fill={color}
        />
        <path
          d="m57.46 64.104h11.125l2.117-13.814h-13.242v-8.965c0-3.779 1.85-7.463 7.781-7.463h6.021v-11.761c-12.894-2.323-28.385-1.616-28.722 17.66v10.529h-12.123v13.814h12.123v33.396h7.46 7.46z"
          fill="#000"
        />
      </g>
    </g>
  </svg>
);
export default IconFacebook;
