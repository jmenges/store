import { cn } from "@/lib/utils";
import { Collection } from "@/types/shopify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { collection: Collection; active: boolean };

export default function CollectionItem({ collection, active }: Props) {
  return (
    <Link
      href={`/collections/${collection.handle}`}
      key={collection.handle}
      className="group flex flex-shrink-0 flex-col items-center justify-center p-4"
    >
      <Image
        src={collection.image.url}
        alt={collection.image.altText}
        width={collection.image.width}
        height={collection.image.height}
        sizes="(min-width: 1360px) 192px, calc(13.71vw + 8px)"
        className="rounded-full w-[15vw] h-[15vw] max-h-48 max-w-[12rem]"
      />
      <div className="inline-flex">
        <h2
          className={cn(
            "group-hover:animate-underline animate-underline mt-2 border-b",
            active ? " border-black" : "border-transparent"
          )}
        >
          {collection.title}
        </h2>
        <span className="text-xs mt-1 ml-0.5">{collection.productCount}</span>
      </div>
    </Link>
  );
}
