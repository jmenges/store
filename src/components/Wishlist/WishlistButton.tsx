"use client";

import { Button } from "@/components/ui/button";
import useWishlist from "@/hooks/useWishlist";
import { cn } from "@/lib/utils";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

export const animation = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.2,
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

type Props = { productId: string; className?: string };

export default function WishlistButton({ productId, className }: Props) {
  const { wishlist, isInWishlist, addToWishlist, removeFromWishlist } =
    useWishlist();

  const MotionButton = useMemo(() => {
    return motion(Button);
  }, []);

  if (wishlist.length === 0) return;

  return (
    <>
      <AnimatePresence>
        {!isInWishlist(productId) ? (
          <MotionButton
            key="AddToWishlist"
            {...animation}
            onClick={(e) => {
              addToWishlist(productId);
            }}
            className={cn("!bg-transparent", className)}
            variant="icon"
            size="raw"
          >
            <HeartIcon className="w-6 h-6 mr-1" />
          </MotionButton>
        ) : (
          <MotionButton
            key="RemoveFromWishlist"
            {...animation}
            onClick={() => {
              removeFromWishlist(productId);
            }}
            className={cn("!bg-transparent", className)}
            variant="icon"
            size="raw"
          >
            <HeartSolidIcon className="w-6 h-6 mr-1 text-red-500" />
          </MotionButton>
        )}
      </AnimatePresence>
    </>
  );
}
