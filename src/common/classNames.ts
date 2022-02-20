const concatClassNames = (...classNames: (string | string[])[]) =>
  classNames
    .flatMap((cn) => (Array.isArray(cn) ? cn : [cn]))
    .filter((cn) => cn)
    .join(" ");

const c = concatClassNames;

export default c;
