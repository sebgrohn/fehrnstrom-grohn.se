import React, { useEffect, useState } from "react";
import c from "../common/classNames";
import Colophon, { ColophonDivider, ColophonLink } from "../common/Colophon";
import { GithubIcon, InstagramIcon } from "../common/Icons";
import Link from "../common/Link";
import PersonBox, { LinkWithIcon } from "../common/PersonBox";
import { Emph, Heading1, InlineBlockSpan } from "../common/Text";
import fehrnstromArkLogo from "../images/fehrnstrom_ark_logo.svg";

const fadeInStyles = (animate: boolean) => [
  animate ? "blur-none" : "blur-md",
  animate ? "scale-100" : "scale-150",
  animate ? "opacity-100" : "opacity-0",
];
const animateStyles = [
  "motion-reduce:transition-none",
  "ease-out",
  "delay-500",
  "duration-1000",
];

const IndexPage = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, [setAnimate]);

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
        <title>🌿 Fehrnström-Gröhn</title>
        <div
          className={c(
            ["w-full", "min-h-[50vh]"],
            ["px-8", "md:px-16"],
            [
              "flex",
              "flex-col",
              "items-center",
              "justify-center",
              "gap-8",
              "md:gap-16",
            ]
          )}
        >
          <div
            className={c(
              ["text-6xl", "md:text-7xl", "lg:text-8xl"],
              ...fadeInStyles(animate),
              animate ? "translate-y-0" : "-translate-y-1/2",
              animateStyles
            )}
          >
            🌿
          </div>
          <Heading1 className={c(...fadeInStyles(animate), animateStyles)}>
            <InlineBlockSpan
              className={c(
                animate ? "translate-x-0" : "-translate-x-1/2",
                animateStyles
              )}
            >
              Fehrnström
            </InlineBlockSpan>
            <InlineBlockSpan className={c(animateStyles)}>-</InlineBlockSpan>
            <InlineBlockSpan
              className={c(
                animate ? "translate-x-0" : "translate-x-1/2",
                animateStyles
              )}
            >
              Gröhn
            </InlineBlockSpan>
          </Heading1>
        </div>
        <div
          className={c(
            ["w-full", "max-w-7xl", "px-8", "md:px-16"],
            ["flex", "flex-row", "flex-wrap", "md:flex-nowrap"],
            ["justify-between", "gap-8", "md:gap-16"],
            ...fadeInStyles(animate),
            animate ? "translate-y-0" : "translate-y-1/2",
            animateStyles
          )}
        >
          <PersonBox
            title="Linnéa"
            email="linnea@fehrnstrom-grohn.se"
            fullName="Linnea Fehrnström-Gröhn"
          >
            <Link uri="https://www.fehrnstrom-ark.se/">
              <img
                className={c("inline-block", "w-40", "max-w-full")}
                src={fehrnstromArkLogo}
                alt="Fehrnström Arkitektur logotyp"
              />
            </Link>
          </PersonBox>
          <PersonBox title="Hus" email="hus@fehrnstrom-grohn.se" couldWrap>
            Följ vår husflytt av ett <Emph>1800-tals</Emph> timmerhus från
            Småland till Vårgårda.
            <br />
            <LinkWithIcon icon={<InstagramIcon />}>
              <Link uri="https://www.instagram.com/utsikten.nummer2/">
                @utsikten.nummer2
              </Link>
            </LinkWithIcon>
          </PersonBox>
          <PersonBox
            title="Sebastian"
            email="sebastian@fehrnstrom-grohn.se"
            fullName="Sebastian Fehrnström-Gröhn"
          >
            <LinkWithIcon icon={<GithubIcon />}>
              <Link uri="https://github.com/sebgrohn">github.com/sebgrohn</Link>
            </LinkWithIcon>
          </PersonBox>
        </div>
      </main>
      <footer
        className={c(
          ["px-8", "md:px-16", "pt-8", "pb-4", "md:py-8"],
          [
            "bg-gradient-to-b",
            "from-transparent",
            "via-teal-990",
            "to-teal-990",
          ]
        )}
      >
        <Colophon>
          Byggt med{" "}
          <ColophonLink uri="https://www.gatsbyjs.org/">Gatsby</ColophonLink>,{" "}
          <ColophonLink uri="https://tailwindcss.com/">
            Tailwind CSS
          </ColophonLink>{" "}
          och{" "}
          <ColophonLink uri="https://iconscout.com/unicons">
            Unicons
          </ColophonLink>
          <ColophonDivider />
          <ColophonLink uri="https://github.com/sebgrohn/fehrnstrom-grohn.se">
            Källkod
          </ColophonLink>
        </Colophon>
      </footer>
    </div>
  );
};

export default IndexPage;
