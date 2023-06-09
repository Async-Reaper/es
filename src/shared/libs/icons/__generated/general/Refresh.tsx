import * as React from "react";
import { SVGAttributes } from "react";

export const RefreshIcon = React.memo(
  ({
    size = 24,
    color = "#4E5361",
    ...props
  }: SVGAttributes<SVGElement> & {
    size?: number,
  }) => {
    return (
      <svg width={size} height={size} fill="none" {...props}>
        <path
          d="M17.064 18.271a.476.476 0 00.725.19 8.527 8.527 0 002.239-2.639 7.987 7.987 0 00.289-7.052 8.398 8.398 0 00-1.953-2.736 9.181 9.181 0 00-4.665-2.321.52.52 0 01-.433-.506v-.284a.5.5 0 00-.773-.418L9.317 4.578a.5.5 0 000 .837l3.176 2.074a.5.5 0 00.773-.418v-.448c0-.313.285-.55.586-.466a6.58 6.58 0 012.744 1.534 6.067 6.067 0 011.41 1.976 5.76 5.76 0 01-.082 4.843 6.089 6.089 0 01-1.342 1.812.527.527 0 00-.13.602l.612 1.347zM3 12h.001a7.956 7.956 0 00.683 3.23 8.398 8.398 0 001.952 2.736c1.39 1.306 3.196 2.144 5.137 2.393a.52.52 0 01.46.51v.208a.5.5 0 00.772.419l3.178-2.074a.5.5 0 000-.837l-3.178-2.075a.5.5 0 00-.773.419v.565a.47.47 0 01-.551.474 6.625 6.625 0 01-3.276-1.659 6.066 6.066 0 01-1.41-1.976 5.755 5.755 0 01.082-4.844 6.084 6.084 0 011.34-1.811.527.527 0 00.131-.602L6.936 5.73a.476.476 0 00-.725-.19 8.526 8.526 0 00-2.239 2.639A7.986 7.986 0 003 12z"
          fill={color}
        />
      </svg>
    );
  }
);

RefreshIcon.displayName = "RefreshIcon";
