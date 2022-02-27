import React, { ReactNode } from "react";
import c from "./classNames";

const Link = ({
  uri,
  children,
  colorClassName,
}: {
  uri: string;
  children: ReactNode;
  colorClassName?: string;
}) => (
  <a
    className={c(
      colorClassName ?? [
        "text-blue-400 hover:text-blue-100",
        "decoration-blue-400 hover:decoration-blue-100",
      ],
      [
        "underline",
        "underline-offset-4 hover:underline-offset-[6px]",
        "decoration-2",
        "decoration-solid hover:decoration-wavy",
      ],
      [
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-dashed",
        "focus-visible:outline-current",
      ],
      ["motion-reduce:transition-none", "duration-300"]
    )}
    href={uri}
  >
    {children}
  </a>
);

export const EmailLink = ({
  email,
  fullName,
  children,
}: {
  email: string;
  fullName?: string;
  children?: ReactNode;
}) => (
  <Link uri={`mailto:${fullName ? `${fullName} <${email}>` : email}`}>
    {children ?? email}
  </Link>
);

export default Link;
