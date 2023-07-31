"use client";

import Price from "@/components/Price";
import { Product } from "@/types/shopify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { product: Product };

export default function ProductGridItem({ product }: Props) {
  return (
    <div className="flex flex-col">
      <Link className="overflow-hidden" href={`/products/${product.handle}`}>
        <Image
          src={product.images[0].url}
          alt={product.images[0].altText || product.title}
          width={1000}
          height={1000}
          className="scale-[103%] transition-all duration-500 hover:translate-x-1"
        />
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
