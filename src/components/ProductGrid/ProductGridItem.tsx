"use client";

import Price from "@/components/Price";
import { Button } from "@/components/ui/button";
import useWishlist from "@/hooks/useWishlist";
import { Product } from "@/types/shopify";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type Props = { product: Product; imageSizes?: string };

export default function ProductGridItem({ product, imageSizes = "" }: Props) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isProductInWishlist = isInWishlist(product.id);

  return (
    <div className="flex flex-col">
      <Link
        className="overflow-hidden group relative"
        href={`/products/${product.handle}`}
      >
        <Image
          src={product.images[0].url}
          alt={product.images[0].altText || product.title}
          width={product.images[0].width || 1}
          height={product.images[0].height || 1}
          sizes={imageSizes}
          className="scale-[103%] transition-all duration-500 hover:translate-x-1"
        />
        <div className="absolute bottom-4 left-4 transition-all origin-bottom-left opacity-0 group-hover:opacity-100 rotate-12 group-hover:rotate-0 translate-y-1/4 group-hover:translate-y-0 overflow-hidden duration-300">
          {!isProductInWishlist ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
                addToWishlist(product.id);
              }}
              size="icon"
            >
              <HeartIcon />
            </Button>
          ) : (
            <Button
              onClick={(e) => {
                e.preventDefault();
                removeFromWishlist(product.id);
              }}
              size="icon"
            >
              <HeartFilledIcon className="text-red-500" />
            </Button>
          )}
        </div>
      </Link>

      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1 mt-2 text-xl font-bold">{product.title}</p>
          <Price
            className="font-mono text-sm font-light"
            amount={product.variants[0].price.amount}
            currencyCode={product.variants[0].price.currencyCode}
          />
        </div>
      </div>
    </div>
  );
}
