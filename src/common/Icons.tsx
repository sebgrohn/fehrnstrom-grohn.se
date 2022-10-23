import { UilInstagram } from "@iconscout/react-unicons";
import {
  UitAt,
  UitGithubAlt,
  UitHouseUser,
} from "@iconscout/react-unicons-thinline";
import React from "react";
import c from "./classNames";

const iconStyles = ["inline-block", "w-5", "md:w-6", "h-5", "md:h-6"];
const thinIconStyles = [...iconStyles, "stroke-teal-500"];
const regularIconStyles = [...iconStyles, "fill-teal-500"];

export const AtIcon = () => <UitAt className={c(...thinIconStyles)} />;

export const InstagramIcon = () => (
  <UilInstagram className={c(...regularIconStyles)} />
);

export const GithubIcon = () => (
  <UitGithubAlt className={c(...thinIconStyles)} />
);

export const HomeIcon = () => <UitHouseUser className={c(...thinIconStyles)} />;
