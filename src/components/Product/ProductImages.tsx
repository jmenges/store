"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Image as ImageType } from "@/types/shopify";
import DraggableScrollSection from "@/components/DraggableScrollSection";
import { cn } from "@/lib/utils";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import HeroIcon from "@/components/ui/HeroIcon";
import { Button } from "@/components/ui/button";

type Props = {
  images: ImageType[];
  className?: string;
};

function ProductImages({ images, className }: Props) {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const activeImageRef = useRef<ImageType>(images[0]);

  activeImageRef.current = images[activeIndex];

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const lastImage = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative sm:ml-[25%] sm:w-3/4">
        {activeImageRef.current.width && activeImageRef.current.height ? (
          <Image
            src={images[activeIndex].url}
            width={activeImageRef.current.width}
            height={activeImageRef.current.height}
            alt={images[activeIndex].altText || ""}
            className="object-contain"
          />
        ) : null}
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
            key={image.url}
            onClick={() => setActiveIndex(index)}
          >
            {image.width && image.height ? (
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.altText || ""}
                className="object-contain"
              />
            ) : null}
          </button>
        ))}
      </DraggableScrollSection>
    </div>
  );
}

export default ProductImages;
