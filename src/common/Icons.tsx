import { UilInstagram } from "@iconscout/react-unicons";
import { UitAt, UitGithubAlt } from "@iconscout/react-unicons-thinline";
import React from "react";
import c from "./classNames";

const iconStyles = [
  "inline-block",
  "w-5",
  "md:w-6",
  "h-5",
  "md:h-6",
  "stroke-teal-500",
];

export const AtIcon = () => <UitAt className={c(...iconStyles)} />;
export const InstagramIcon = () => (
  <UilInstagram className={c(...iconStyles)} />
);
export const GithubIcon = () => <UitGithubAlt className={c(...iconStyles)} />;
