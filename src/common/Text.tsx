import React, { ReactNode } from "react";
import c from "./classNames";

export const InlineBlockSpan = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <span className={c("inline-block", className)}>{children}</span>;

export const Para = ({ children }: { children: ReactNode }) => (
  <p
    className={c(
      "text-base",
      "md:text-lg",
      "lg:text-xl",
      "font-sans",
      "font-light"
    )}
  >
    {children}
  </p>
);

export const Emph = ({ children }: { children: ReactNode }) => (
  <span
    className={c(
      "font-medium",
      "bg-clip-text",
      "text-transparent",
      "bg-gradient-to-br",
      ["from-teal-300", "to-blue-400"]
    )}
  >
    {children}
  </span>
);

export const Heading1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={c(
      "text-4xl",
      "md:text-5xl",
      "lg:text-6xl",
      "font-poiret",
      className
    )}
  >
    {children}
  </h2>
);

export const Heading2 = ({ children }: { children: ReactNode }) => (
  <h2 className={c("text-3xl", "md:text-4xl", "lg:text-5xl", "font-poiret")}>
    {children}
  </h2>
);
