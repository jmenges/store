"use client";

import DraggableScrollSection from "@/components/DraggableScrollSection";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types/shopify";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { useIntersectionObserver } from "usehooks-ts";

import HeroIcon from "@/components/ui/HeroIcon";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  images: ImageType[];
  className?: string;
};

function ProductImages({ images, className }: Props) {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeThumbRef = useRef<HTMLButtonElement | null>(null);
  const entry = useIntersectionObserver(activeThumbRef, { threshold: 0.9 });
  const isVisible = !!entry?.isIntersecting;

  const updateActiveIndex = (newIndex: number) => {
    setIsLoading(true);
    activeThumbRef.current = thumbRefs.current[newIndex];
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (!isVisible)
      activeThumbRef.current?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
  }, [isVisible]);

  const lastImage = () => {
    const lastIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    updateActiveIndex(lastIndex);
  };

  const nextImage = () => {
    const nextIndex = (activeIndex + 1) % images.length;
    updateActiveIndex(nextIndex);
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative sm:ml-[25%] sm:w-3/4 overflow-clip">
        <Image
          key={`product-image-${activeIndex}`}
          src={images[activeIndex].url}
          width={images[activeIndex].width}
          height={images[activeIndex].height}
          sizes="(min-width: 1440px) 583px, (min-width: 780px) 41.56vw, (min-width: 640px) calc(75vw - 36px), calc(100vw - 48px)"
          blurDataURL={images[activeIndex].blurDataURL}
          placeholder="blur"
          alt={images[activeIndex].altText}
          className={cn(
            "object-contain duration-300 ease-in-out",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={handleImageLoaded}
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
            key={`product-thumb-${index}`}
            onClick={() => {
              if (activeIndex !== index) {
                updateActiveIndex(index);
              }
            }}
            ref={(el) => (thumbRefs.current[index] = el)}
          >
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1420px) 158px, (min-width: 780px) calc(14.19vw - 41px), (min-width: 640px) calc(25vw - 48px), calc(25vw - 16px)"
              alt={image.altText}
              className="object-contain"
              priority={index < 4}
            />
          </button>
        ))}
      </DraggableScrollSection>
    </div>
  );
}

export default ProductImages;
