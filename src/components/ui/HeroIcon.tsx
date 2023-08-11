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
      <i
        className="inline-flex [&>svg>path]:stroke-current [&>svg>path]:stroke-[2]"
        aria-hidden
      >
        {children}
      </i>
      {ariaAlt !== "" && <span className="sr-only">{ariaAlt}</span>}
    </>
  );
}
