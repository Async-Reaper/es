import * as React from "react";
import { SVGAttributes } from "react";

export const FireIcon = React.memo(
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
          d="M13.786 6.69c-.02 1.253-.436 2.949-2.39 3.606.612-1.455.706-2.847.272-4.149C11.09 4.4 9.157 3.035 7.871 2.291c-.44-.255-1.003.062-.994.57.016.926-.265 2.28-1.633 3.648-1.821 1.82-2.744 3.7-2.744 5.589 0 2.37 1.667 5.402 5 5.402-3.367-3.367-.833-6.235-.833-6.235.705 4.928 4.156 6.235 5.833 6.235 1.426 0 4.167-1.041 4.167-5.373 0-2.61-1.11-4.592-1.988-5.75-.289-.38-.886-.164-.893.313z"
          fill={color}
        />
      </svg>
    );
  }
);

FireIcon.displayName = "FireIcon";
