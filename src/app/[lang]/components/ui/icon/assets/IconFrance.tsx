import * as React from "react";

type Props = {
  color: ThemeColorsValues;
  size: number;
};

const IconUsa = ({ size }: Props) => (
  <svg
    id="Layer_1"
    height={size}
    viewBox="0 0 512 512"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
  >
    <g>
      <path
        d="m361.813 489.171v-466.342c88.587 40.265 150.187 129.522 150.187 233.171s-61.6 192.906-150.187 233.171z"
        fill="#ed2939"
      />
      <path
        d="m150.187 22.829v466.342c-88.587-40.265-150.187-129.522-150.187-233.171s61.6-192.906 150.187-233.171z"
        fill="#002395"
      />
      <path
        d="m361.813 22.829v466.342a256.637 256.637 0 0 1 -211.626 0v-466.342a256.637 256.637 0 0 1 211.626 0z"
        fill="#f5f5f5"
      />
    </g>
  </svg>
);
export default IconUsa;
