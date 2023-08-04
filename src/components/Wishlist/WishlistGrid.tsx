"use client";

import WishlistGridItem from "@/components/Wishlist/WishlistGridItem";
import { getProductsByIdsServer } from "@/components/Wishlist/actions";
import useWishlist from "@/hooks/useWishlist";
import { cn } from "@/lib/utils";
import { Product } from "@/types/shopify";
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
      {products.map((product) => (
        <WishlistGridItem
          handleRemoveFromWishlist={() => handleRemoveFromWishlist(product.id)}
          className={removingId === product.id ? "bg-disabled-animate" : ""}
          key={product.handle}
          product={product}
        />
      ))}
    </div>
  );
}
