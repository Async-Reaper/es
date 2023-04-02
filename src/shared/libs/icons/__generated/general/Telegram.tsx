import * as React from "react";
import { SVGAttributes } from "react";

export const TelegramIcon = React.memo(
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
          d="M14.505 9.37l-4.953 3.051a.499.499 0 00-.218.561l.536 1.882c.038.134.231.12.25-.018l.139-1.032a.848.848 0 01.262-.507l4.089-3.8c.076-.071-.015-.191-.104-.137z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.69 6.607a3.145 3.145 0 00-.183-.784 3.277 3.277 0 00-2.73-2.127 54.189 54.189 0 00-11.555 0 3.27 3.27 0 00-2.914 2.91 54.452 54.452 0 000 11.56c.078.745.41 1.44.941 1.97.527.53 1.223.863 1.969.942a54.19 54.19 0 0011.555 0 3.278 3.278 0 002.917-2.912c.41-3.842.41-7.717 0-11.56zM8.73 12.925l-2.535-.946a.299.299 0 01-.003-.56l10.402-4.012a.299.299 0 01.4.34l-1.866 8.979a.299.299 0 01-.468.18l-2.549-1.85a.421.421 0 00-.513.015l-1.413 1.152a.298.298 0 01-.474-.143l-.981-3.155z"
          fill={color}
        />
      </svg>
    );
  }
);

TelegramIcon.displayName = "TelegramIcon";
