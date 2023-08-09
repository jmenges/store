"use client";

import DraggableScrollSection from "@/components/DraggableScrollSection";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types/shopify";
import Image from "next/image";
import React from "react";

import HeroIcon from "@/components/ui/HeroIcon";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  images: ImageType[];
  className?: string;
};

function ProductImages({ images, className }: Props) {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const lastImage = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative sm:ml-[25%] sm:w-3/4">
        <Image
          src={images[activeIndex].url}
          width={images[activeIndex].width}
          height={images[activeIndex].height}
          sizes="(min-width: 1440px) 583px, (min-width: 780px) 41.56vw, (min-width: 640px) calc(75vw - 36px), calc(100vw - 48px)"
          alt={images[activeIndex].altText}
          className="object-contain"
          priority
        />
        <Button
          className="absolute left-2 top-1/2"
          variant="outline"
          size="icon"
          onClick={lastImage}
        >
          <HeroIcon>
            <ChevronLeftIcon className="h-5 w-5" />
          </HeroIcon>
        </Button>
        <Button
          className="absolute right-2 top-1/2"
          variant="outline"
          size="icon"
          onClick={nextImage}
        >
          <HeroIcon>
            <ChevronRightIcon className="h-5 w-5" />
          </HeroIcon>
        </Button>
      </div>
      <DraggableScrollSection className="sm:absolute top-0 left-0 flex sm:max-h-full sm:w-1/4 sm:flex-col gap-2 max-sm:py-2 sm:px-4">
        {images.map((image, index) => (
          <button
            className={cn(
              "flex flex-shrink-0 transition-all max-sm:w-1/4",
              index === activeIndex ? "border-2 border-gray-300" : ""
            )}
            key={image.id}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1420px) 158px, (min-width: 780px) calc(14.19vw - 41px), (min-width: 640px) calc(25vw - 48px), calc(25vw - 16px)"
              alt={image.altText}
              className="object-contain"
            />
          </button>
        ))}
      </DraggableScrollSection>
    </div>
  );
}

export default ProductImages;
