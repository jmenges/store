"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

type Props = { children: React.ReactNode; className?: string };

export default function DraggableScrollSection({ children, className }: Props) {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  return (
    <div
      className={cn("relative overflow-y-hidden", className)}
      {...events}
      ref={ref}
    >
      {children}
    </div>
  );
}
