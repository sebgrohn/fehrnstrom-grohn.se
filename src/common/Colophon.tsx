import React, { ReactNode } from "react";
import c from "./classNames";
import Link from "./Link";

export const Colophon = ({ children }: { children: ReactNode }) => (
  <p
    className={c(
      "text-sm",
      "md:text-base",
      "lg:text-lg",
      "font-sans",
      "font-light",
      "text-center",
      "text-teal-700"
    )}
  >
    {children}
  </p>
);

export const ColophonDivider = () => (
  <span className={c("px-4", "text-teal-900")}>⧸</span>
);

export const ColophonLink = ({
  uri,
  children,
}: {
  uri: string;
  children: ReactNode;
}) => (
  <Link
    colorClassName={c(
      ["text-teal-600 hover:text-teal-300"],
      ["decoration-teal-600 hover:decoration-teal-300"]
    )}
    uri={uri}
  >
    {children}
  </Link>
);

export default Colophon;
