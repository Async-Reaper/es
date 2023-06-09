import * as React from "react";
import { SVGAttributes } from "react";

export const QuestionsIcon = React.memo(
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
          d="M22.5 4.5a18 18 0 100 36 18 18 0 000-36zM0 22.5C0 10.073 10.073 0 22.5 0S45 10.073 45 22.5 34.927 45 22.5 45 0 34.927 0 22.5z"
          fill={color}
        />
        <path
          d="M22.5 27a2.25 2.25 0 01-2.25-2.25V22.5a2.25 2.25 0 014.5 0v2.25A2.25 2.25 0 0122.5 27zm-3.375 5.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0z"
          fill={color}
        />
        <path
          d="M23.377 13.075c-2.153-.101-3.96 1.102-4.284 3.044a2.25 2.25 0 01-4.437-.738c.801-4.806 5.182-6.98 8.935-6.8 1.922.09 3.9.781 5.42 2.203 1.56 1.456 2.489 3.544 2.489 6.091 0 2.905-1.143 5.06-3.112 6.372-1.807 1.204-4.023 1.503-5.888 1.503a2.25 2.25 0 110-4.5c1.508 0 2.668-.263 3.393-.747.562-.376 1.107-1.035 1.107-2.628 0-1.39-.477-2.257-1.062-2.803-.623-.583-1.53-.945-2.56-.997z"
          fill={color}
        />
      </svg>
    );
  }
);
