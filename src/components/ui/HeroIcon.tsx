import React from 'react';

export default function HeroIcon({ children }: { children: React.ReactNode }) {
  return (
    <i className="inline-flex [&>svg>path]:stroke-current [&>svg>path]:stroke-[1]">
      {children}
    </i>
  );
}
