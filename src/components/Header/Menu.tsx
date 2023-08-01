import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = { className?: string };

export default function Menu({ className }: Props) {
  return (
    <div className={cn("flex gap-4 items-center text-sm", className)}>
      <Link href={"/products"}>Shop</Link>
      <Link href="/">
        <Image
          src="/StoreLogo.svg"
          width={100}
          height={40}
          alt="logo"
          className=""
        />
      </Link>
      <Link href="/collections">Collections</Link>
    </div>
  );
}
