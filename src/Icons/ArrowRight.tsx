import React from "react";
import type { SVGProps } from "react";

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
      className="arrow-icon"
    >
      <path fill="currentColor" d="M10 17V7l5 5z"></path>
    </svg>
  );
}
