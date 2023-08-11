import React from "react";

export default function HeroIcon({
  children,
  ariaAlt = "",
}: {
  children: React.ReactNode;
  ariaAlt?: string;
}) {
  return (
    <>
      <span
        className="inline-flex [&>svg>path]:stroke-current [&>svg>path]:stroke-[2]"
        aria-hidden
      >
        {children}
      </span>
      {ariaAlt !== "" && <span className="sr-only">{ariaAlt}</span>}
    </>
  );
}
