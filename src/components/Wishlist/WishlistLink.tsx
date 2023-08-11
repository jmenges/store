"use client";
import HeroIcon from "@/components/ui/HeroIcon";
import { buttonVariants } from "@/components/ui/button";
import useWishlist from "@/hooks/useWishlist";
import { cn } from "@/lib/utils";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type Props = { className?: string };

export default function WishlistLink({ className }: Props) {
  const { count: wishlistCount } = useWishlist();

  return (
    <Link
      href="/wishlist"
      className={cn(
        buttonVariants({ size: "icon", variant: "ghost" }),
        "pl-2 pr-1"
      )}
    >
      <HeroIcon ariaAlt="Navigate to wishlist">
        <HeartIcon className="w-4 h-4 text-black" />
      </HeroIcon>
      <span className="-mt-2 ml-0.5 text-xs" aria-hidden>{wishlistCount}</span>
    </Link>
  );
}
