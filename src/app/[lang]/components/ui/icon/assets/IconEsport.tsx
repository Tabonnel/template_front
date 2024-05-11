import * as React from "react";

type Props = {
  color: ThemeColorsValues;
  size: number;
};

const IconEsport = ({ color, size }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 14"
  >
    <g fill="none" stroke={color}>
      <path d="M12.32 6.536c.638 1.544 1.197 3.545 1.18 4.643c-.024 1.48-.928 2.32-1.857 2.32c-.842-.395-1.858-2.32-2.785-2.32H5.142c-.927 0-1.943 1.925-2.786 2.32c-.928 0-1.832-.84-1.856-2.32c-.018-1.098.542-3.099 1.18-4.643m1.605-5.107v2.785a.93.93 0 0 0 .929.929h5.571a.929.929 0 0 0 .929-.929V1.43l-1.857.928L7 .5L5.142 2.357z" />
      <path d="M3.5 8.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
    </g>
  </svg>
);
export default IconEsport;
