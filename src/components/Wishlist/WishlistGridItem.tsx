"use client";

import Price from "@/components/Price";
import { Button, buttonVariants } from "@/components/ui/button";
import useWishlist from "@/hooks/useWishlist";
import { cn } from "@/lib/utils";
import { Product } from "@/types/shopify";
import Image from "next/image";
import Link from "next/link";

import SolarTrashBin2Linear from "~icons/solar/trash-bin-2-linear";

type Props = {
  product: Product;
  handleRemoveFromWishlist: () => void;
  className?: string;
};

export default function WishlistGridItem({
  product,
  className,
  handleRemoveFromWishlist,
}: Props) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Link
        className="overflow-hidden group relative"
        href={`/products/${product.handle}`}
      >
        <Image
          src={product.images[0].url}
          alt={product.images[0].altText}
          width={product.images[0].width}
          height={product.images[0].height}
          sizes="50vw"
          className="scale-[103%] transition-all duration-500 hover:translate-x-1"
        />
        <div className="absolute bottom-0 right-0">
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleRemoveFromWishlist();
            }}
            variant="secondary"
            size="icon"
          >
            <SolarTrashBin2Linear className="svg-stroke-2 h-4 w-4 stroke-curren" />{" "}
          </Button>
        </div>
      </Link>

      <div className="flex flex-col items-start">
        <p className="mt-2 text-xl font-bold">{product.title}</p>
        <Price
          className="font-mono text-sm font-light"
          amount={product.variants[0].price.amount}
          currencyCode={product.variants[0].price.currencyCode}
        />
        <Link
          className={cn(buttonVariants({}), "mt-2 px-6")}
          href={`/products/${product.handle}`}
        >
          Select options
        </Link>
      </div>
    </div>
  );
}
