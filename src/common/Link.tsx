import React, { ReactNode } from "react";
import c from "./classNames";

const Link = ({ uri, children }: { uri: string; children: ReactNode }) => (
  <a
    className={c(
      ["text-blue-400 hover:text-blue-100"],
      [
        "underline",
        "underline-offset-4 hover:underline-offset-[6px]",
        "decoration-blue-400 hover:decoration-blue-100",
        "decoration-2",
        "decoration-solid hover:decoration-wavy",
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
