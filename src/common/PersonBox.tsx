import React, { ReactNode } from "react";
import c from "./classNames";
import { AtIcon } from "./Icons";
import { EmailLink } from "./Link";
import { Heading2, InlineBlockSpan, Para } from "./Text";

export const LinkWithIcon = ({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) => (
  <>
    <InlineBlockSpan>{icon}</InlineBlockSpan>{" "}
    <InlineBlockSpan>{children}</InlineBlockSpan>
  </>
);

const PersonBox = ({
  title,
  email,
  fullName,
  couldWrap,
  children,
}: {
  title: string;
  email: string;
  fullName?: string;
  couldWrap?: boolean;
  children?: ReactNode;
}) => (
  <section
    className={c(
      ["flex-auto", "basis-2/5", "md:basis-full"],
      ["flex", "flex-col", "gap-4", "md:gap-8"],
      [couldWrap ? "order-last" : "order-none", "md:order-none"],
      "text-center"
    )}
  >
    <Heading2>{title}</Heading2>
    <Para>
      <LinkWithIcon icon={<AtIcon />}>
        <EmailLink email={email} fullName={fullName} />
      </LinkWithIcon>
    </Para>
    {children && <Para>{children}</Para>}
  </section>
);

export default PersonBox;
