import ProductGridItem from "@/components/ProductGrid/ProductGridItem";
import { cn } from "@/lib/utils";
import { Product } from "@/types/shopify";
import React from "react";

type Props = {
  products: Product[];
  className?: string;
  imageSizes?: string;
  priorityImagesCount?: number;
};

export default function ProductGrid({
  products,
  className,
  imageSizes,
  priorityImagesCount = 0,
}: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-12",
        className
      )}
    >
      {products.map((product, index) => (
        <ProductGridItem
          key={product.handle}
          product={product}
          imageSizes={imageSizes}
          priority={index <= priorityImagesCount}
        />
      ))}
    </div>
  );
}
