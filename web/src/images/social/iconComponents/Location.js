import * as React from "react";

function SvgLocation(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M350 700c193.3 0 350-156.7 350-350S543.3 0 350 0 0 156.7 0 350s156.7 350 350 350zM190 281.3c0-88.623 71.766-160.3 160.5-160.3S511 192.677 511 281.3C511 401.525 350.5 579 350.5 579S190 401.525 190 281.3zm103.179 0c0 31.602 25.68 57.25 57.321 57.25s57.321-25.648 57.321-57.25-25.68-57.25-57.321-57.25-57.321 25.648-57.321 57.25z"
      />
    </svg>
  );
}

export default SvgLocation;
