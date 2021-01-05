import * as React from "react";

function SvgPatreon(props) {
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
        d="M350 700c193.3 0 350-156.7 350-350S543.3 0 350 0 0 156.7 0 350s156.7 350 350 350zm145.769-515.096a144.38 144.38 0 00-80.144-24.404 144.549 144.549 0 00-144.551 144.55 144.378 144.378 0 00172.585 141.417 144.373 144.373 0 00105.209-196.761 144.378 144.378 0 00-53.099-64.802zM227.5 545.5h-70v-385h70v385z"
      />
    </svg>
  );
}

export default SvgPatreon;
