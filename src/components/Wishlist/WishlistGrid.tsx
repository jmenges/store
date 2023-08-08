"use client";

import WishlistGridItem from "@/components/Wishlist/WishlistGridItem";
import { getProductsByIdsServer } from "@/components/Wishlist/actions";
import { buttonVariants } from "@/components/ui/button";
import useWishlist from "@/hooks/useWishlist";
import { cn } from "@/lib/utils";
import { Product } from "@/types/shopify";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";

type Props = { className?: string };

export default function WishlitGrid({ className }: Props) {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [products, setProducts] = useState<Product[]>([]);
  const [, startTransition] = useTransition();
  const [removingId, setRemovingId] = useState<string | null>(null);

  const handleRemoveFromWishlist = (productId: string) => {
    setRemovingId(productId);
    removeFromWishlist(productId);
  };

  useEffect(() => {
    // get products when wishlist changes
    startTransition(async () => {
      const wishlistProducts = await getProductsByIdsServer(
        wishlist.filter((id) => id !== null)
      );
      setProducts(wishlistProducts);
      setRemovingId(null); // we can clear the removing state after each call to the server
    });
  }, [wishlist]);

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12",
        className
      )}
    >
      {products.length > 0
        ? products.map((product) => (
            <WishlistGridItem
              handleRemoveFromWishlist={() =>
                handleRemoveFromWishlist(product.id)
              }
              className={removingId === product.id ? "bg-disabled-animate" : ""}
              key={product.handle}
              product={product}
            />
          ))
        : <div className="flex flex-col gap-2 col-span-2 lg:col-span-4 mt-6 items-start"><p className="text-lg lg:text-2xl text-black">There are currently no items added to your wishlist.</p><Link href="/products" className={cn(buttonVariants(),"w-auto")} >Explore Products</Link></div>}
    </div>
  );
}
