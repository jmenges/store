"use client";

import CheckboxFilter from "@/components/ProductGrid/CheckboxFilter";
import PriceRangeFilter from "@/components/ProductGrid/PriceRangeFilter";
import { buttonVariants } from "@/components/ui/button";
import { filters } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Collection } from "@/types/shopify";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export type ProductFilterProps = {
  currencySymbol: string;
  productTypes: string[];
  activeFilters: [string, string | string[] | undefined][];
  collections?: Collection[];
  className?: string;
};

export default function ProductFilter({
  productTypes,
  currencySymbol,
  collections,
  activeFilters,
  className,
}: ProductFilterProps) {
  /* Hooks */
  const searchParams = useSearchParams().toString();

  const productTypeFilter = filters.find(
    (filter) => filter.title === "Category"
  );
  const productTypeActiveValues =
    activeFilters
      .filter((filterPair) => filterPair[0] === productTypeFilter?.urlKey)
      ?.map((filterPair) => filterPair[1])
      .reduce((prev: string[], curr) => {
        if (!curr) return prev;
        if (Array.isArray(curr)) {
          return [...prev, ...curr];
        }
        return [...prev, curr];
      }, []) || [];

  // get values of price filter
  const priceActiveValues =
    activeFilters
      .filter((filterPair) => filterPair[0] === "price")
      ?.map((filterPair) => filterPair[1])
      .reduce((prev: string[], curr) => {
        if (!curr) return prev;
        if (Array.isArray(curr)) {
          return [...prev, ...curr];
        }
        return [...prev, curr];
      }, []) || [];

  return (
    <div className={cn("", className)}>
      <div>
        <p className="mb-4 font-semibold">{productTypeFilter?.title}</p>
        <CheckboxFilter
          urlKey={productTypeFilter?.urlKey!}
          options={productTypes}
          queryValues={productTypeActiveValues}
        />
      </div>
      {/* Prices */}
      <div>
        <p className="mb-2 mt-4 font-semibold">Price Filter</p>
        <PriceRangeFilter
          currencySymbol={currencySymbol}
          urlKey="price"
          queryValues={priceActiveValues}
        />
      </div>
      {/* Collections */}
      {!!collections && (
        <div>
          <p className="mb-2 mt-4 font-semibold">Collections</p>
          <div className="ml-4 mr-4 flex flex-col gap-1 text-sm">
            {collections.map((collection) => (
              <div className="flex" key={collection.handle}>
                <Link
                  className={cn(
                    buttonVariants({ variant: "link", size: "raw" }),
                    "font-normal"
                  )}
                  href={`/collections/${collection.handle}${
                    searchParams ? `/${searchParams}` : ""
                  }`}
                >
                  {collection.title}
                </Link>
                <p className="-mt-[3px] ml-0.5 text-xs">
                  {collection.productCount}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
