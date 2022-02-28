import { Link } from "gatsby";
import React from "react";
import c from "../common/classNames";
import { Heading1, Heading2 } from "../common/Text";

const NotFoundPage = () => {
  return (
    <div
      className={c(
        ["w-full", "min-h-screen"],
        ["bg-teal-975", "text-teal-50"],
        ["flex", "flex-col", "justify-between", "gap-16", "md:gap-32"]
      )}
    >
      <main
        className={c(
          ["grow"],
          [
            "flex",
            "flex-col",
            "items-center",
            "justify-evenly",
            "gap-8",
            "md:gap-16",
          ]
        )}
      >
        <title>Sidan finns inte – 🌿 Fehrnström-Gröhn</title>
        <div
          className={c(
            ["w-full", "min-h-[50vh]"],
            ["px-8", "md:px-16"],
            ["flex", "flex-col", "items-center", "justify-center"]
          )}
        >
          <Heading1>Sidan finns inte</Heading1>
        </div>
        <div
          className={c(
            ["w-full", "min-h-[50vh]"],
            ["px-8", "md:px-16"],
            ["flex", "flex-col", "items-center", "justify-between"]
          )}
        >
          <Heading2>
            <HomeLink uri="/">Gå tillbaka till startsidan</HomeLink>
          </Heading2>
        </div>
      </main>
    </div>
  );
};

const HomeLink = ({ uri, children }) => (
  <Link
    className={c(
      ["text-teal-600 hover:text-teal-300"],
      ["decoration-teal-600 hover:decoration-teal-300"],
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
    to={uri}
  >
    {children}
  </Link>
);

export default NotFoundPage;
