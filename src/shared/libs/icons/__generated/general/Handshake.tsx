import * as React from "react";
import { SVGAttributes } from "react";

export const HandshakeIcon = React.memo(
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
          d="M14.114 2.217a.995.995 0 00.197-.198h3.416l.047-.001a7.164 7.164 0 01.726 0h.051a5.091 5.091 0 012.194.492 6.965 6.965 0 013.12 2.43 6.943 6.943 0 011.073 5.797L20.563 6.42a1 1 0 00-.703-.288h-6.326a1.01 1.01 0 00-.604.203L10.417 8.24a1.298 1.298 0 01-1.946-.466 1.27 1.27 0 01.378-1.567l5.265-3.989zM7.532 16.98l-.018.018-1.298 1.29-.017.018a1.208 1.208 0 01-1.683-.018 1.19 1.19 0 010-1.689l1.299-1.29a1.208 1.208 0 011.7 0c.464.46.47 1.204.017 1.672zm-.384 2.265a1.189 1.189 0 00.017 1.672c.47.467 1.23.467 1.7 0l1.298-1.29a1.189 1.189 0 00-.186-1.84 1.208 1.208 0 00-1.496.134l-.017.017-1.299 1.29-.017.017zm-2.813-6.034a1.19 1.19 0 010 1.69l-1.298 1.29a1.208 1.208 0 01-1.7 0 1.189 1.189 0 010-1.69l1.298-1.29a1.208 1.208 0 011.7 0zm8.469 7.356c.47.466.47 1.222 0 1.689l-1.299 1.29a1.209 1.209 0 01-1.7 0 1.19 1.19 0 01-.23-1.37l.002-.004c.057-.113.133-.22.228-.315l1.299-1.29a1.208 1.208 0 011.7 0z"
          fill={color}
        />
        <path
          d="M4.126 4.441a8.238 8.238 0 016.817-2.331L7.64 4.61a3.27 3.27 0 00-.623 4.598 3.297 3.297 0 004.607.623l2.244-1.7h5.58l4.676 4.612a.73.73 0 00.048.053l1.533 1.534a1.918 1.918 0 01-2.58 2.833l-.129-.129a.677.677 0 00-.08-.068L21.46 15.51a.667.667 0 10-.943.943l1.534 1.533c.055.055.112.108.17.159l.059.058a1.359 1.359 0 01-1.922 1.922l-.225-.225a.667.667 0 00-1.138.484.665.665 0 00.195.487l.297.297a1.257 1.257 0 11-1.777 1.777l-.001-.001-.016-.016-.28-.28a.666.666 0 10-.943.943l.291.291a1.281 1.281 0 01-1.8 1.823l-1.908-1.814.7-.695a2.512 2.512 0 000-3.569 2.542 2.542 0 00-1.905-.737 2.508 2.508 0 00-.741-1.892 2.542 2.542 0 00-1.904-.737 2.508 2.508 0 00-.742-1.892 2.55 2.55 0 00-2.459-.652 2.506 2.506 0 00-.72-1.447 2.552 2.552 0 00-3.352-.21 8.127 8.127 0 012.196-7.62z"
          fill={color}
        />
      </svg>
    );
  }
);

HandshakeIcon.displayName = "HandshakeIcon";