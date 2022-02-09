import React from "react";

const c = (...classNames) =>
  classNames.flatMap((cn) => (Array.isArray(cn) ? cn : [cn])).join(" ");

const IndexPage = () => (
  <main
    className={c(
      ["w-full", "min-h-screen"],
      ["bg-teal-975", "text-teal-50"],
      ["flex", "flex-col", "items-center", "justify-evenly"]
    )}
  >
    <title>🌿 Fehrnström-Gröhn</title>
    <div
      className={c(
        ["px-8", "md:px-16", "py-4", "md:py-8"],
        ["flex", "flex-col", "items-center", "gap-8", "md:gap-16", "lg:gap-32"]
      )}
    >
      <span className={c("text-5xl", "md:text-6xl", "lg:text-7xl")}>🌿</span>
      <h1 className={c("text-4xl", "md:text-5xl", "lg:text-6xl")}>
        Fehrnström-Gröhn
      </h1>
    </div>
    <div
      className={c(
        ["w-full", "lg:w-5/6", "px-8", "md:px-16", "py-4", "md:py-8"],
        ["flex", "flex-row", "justify-evenly", "gap-8", "md:gap-16"],
        ["text-base", "md:text-lg", "lg:text-xl"]
      )}
    >
      <div
        className={c("basis-1/3", ["flex", "flex-col", "gap-4", "md:gap-8"])}
      >
        <p>
          <a
            className={c(
              "underline",
              "underline-offset-4",
              "decoration-blue-300"
            )}
            href="mailto:%22Linnea Fehrnström-Gröhn <linnea@fehrnstrom-grohn.se>%22"
          >
            Linnéa
          </a>
        </p>
        <p>
          <a
            className={c(
              "underline",
              "underline-offset-4",
              "decoration-blue-300"
            )}
            href="https://www.fehrnstrom-ark.se/"
          >
            Fehrnström Arkitektur
          </a>
        </p>
      </div>
      <div
        className={c("basis-1/3", ["flex", "flex-col", "gap-4", "md:gap-8"])}
      >
        <p>
          <a
            className={c(
              "underline",
              "underline-offset-4",
              "decoration-blue-300"
            )}
            href="mailto:hus@fehrnstrom-grohn.se"
          >
            Hus
          </a>
        </p>
      </div>
      <div
        className={c("basis-1/3", ["flex", "flex-col", "gap-4", "md:gap-8"])}
      >
        <p>
          <a
            className={c(
              "underline",
              "underline-offset-4",
              "decoration-blue-300"
            )}
            href="mailto:%22Sebastian Fehrnström-Gröhn <sebastian@fehrnstrom-grohn.se>%22"
          >
            Sebastian
          </a>
        </p>
      </div>
    </div>
  </main>
);

export default IndexPage;
