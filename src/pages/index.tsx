import React, { useEffect, useState } from "react";
import c from "../common/classNames";
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
  "delay-1000",
  "duration-1000",
];

const IndexPage = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, [setAnimate]);

  return (
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
          [
            "flex",
            "flex-col",
            "items-center",
            "gap-8",
            "md:gap-16",
            "lg:gap-32",
          ]
        )}
      >
        <span
          className={c(
            ["text-5xl", "md:text-6xl", "lg:text-7xl"],
            ...fadeInStyles(animate),
            animateStyles
          )}
        >
          🌿
        </span>
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
          ["w-full", "lg:w-5/6", "px-8", "md:px-16", "py-4", "md:py-8"],
          [
            "flex",
            "flex-none",
            "flex-row",
            "flex-wrap",
            "md:flex-nowrap",
            "justify-evenly",
            "gap-8",
            "md:gap-16",
          ]
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
            <br />
            fehrnstrom-ark.se
          </Link>
        </PersonBox>
        <PersonBox title="Hus" email="hus@fehrnstrom-grohn.se" couldWrap>
          Följ vår husflytt av ett <Emph>1800-tals</Emph> timmerhus från Småland
          till Vårgårda.
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
  );
};

export default IndexPage;
