import * as React from "react";
import { SVGAttributes } from "react";

export const DevicesIcon = React.memo(
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
          d="M47.946 15.908l-11.01.01c-1.796 0-3.288 1.462-3.288 3.258v22.978c0 1.795 1.491 3.479 3.287 3.479h.016l10.987-.122c1.796 0 3.261-1.517 3.261-3.313l.013-22.995c0-1.802-1.464-3.295-3.266-3.295zm-6.471 1.608h1.945a.922.922 0 010 1.843h-1.945a.922.922 0 010-1.843zm-3.36.11a.96.96 0 011.304 0 .93.93 0 010 1.304.937.937 0 01-.654.272.933.933 0 01-.65-.272.934.934 0 01-.272-.65c0-.244.101-.484.272-.654zM42.447 44.5c-.763 0-1.384-.62-1.384-1.383a1.385 1.385 0 012.768 0c0 .763-.62 1.383-1.384 1.383zm6.873-3.938a.46.46 0 01-.46.46H35.952a.46.46 0 01-.46-.46v-19.36a.46.46 0 01.46-.46H48.86a.46.46 0 01.461.46v19.36z"
          fill="url(#devices_svg__a)"
        />
        <path
          d="M58.526 34.11h-2.753V3.51c0-2.08-1.696-3.51-3.778-3.51H7.005C4.922 0 3.227 1.429 3.227 3.511V34.11H.473c-.255 0-.473-.072-.473.183v.43c0 2.31 1.891 4.458 4.201 4.458h30.37v-6.914H5.991V4.148h47.016v28.118h-2.305v6.914h4.094c2.311 0 4.203-2.148 4.203-4.459v-.43c0-.253-.22-.182-.474-.182zM30.15 2.672a.92.92 0 01-1.571-.655c0-.244.096-.48.272-.65.34-.346.958-.346 1.3 0a.916.916 0 010 1.305z"
          fill="url(#devices_svg__b)"
        />
        <defs>
          <linearGradient
            id="devices_svg__a"
            x1={42.43}
            y1={15.908}
            x2={42.43}
            y2={45.633}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8C2DD7" />
            <stop offset={1} stopColor="#8951FE" />
          </linearGradient>
          <linearGradient
            id="devices_svg__b"
            x1={29.5}
            y1={0}
            x2={29.5}
            y2={39.18}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8C2DD7" />
            <stop offset={1} stopColor="#8951FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
