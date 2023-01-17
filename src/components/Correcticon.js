import * as React from "react";

const Correcticon = (props) => (
  <svg
    width={11}
    height={11}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5.5} cy={5.5} r={5.5} fill={!props.status ? '#ABABAB' : '#4AE7A5'} />
    <path
      d="M3 6.18182L5.08333 8L8 4"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Correcticon;