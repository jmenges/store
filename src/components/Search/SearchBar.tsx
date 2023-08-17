"use client";

import { getSearchResultsServer } from "@/components/Search/actions";
import {
  SearchOverlay,
  SearchOverlayContent,
  SearchOverlayTrigger,
} from "@/components/ui/SearchOverlay";
import Spinner from "@/components/ui/Spinner";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Product } from "@/types/shopify";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState, useTransition } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";
import debounce from "lodash.debounce";
import HeroIcon from "@/components/ui/HeroIcon";

type Props = { className?: string };

import { validator } from "@exodus/schemasafe";
import { ProductSchema } from "@/validation/product";
const validate = validator(ProductSchema);

export default function SearchBar({ className }: Props) {
  /* State & Refs */
  const [isSearchBarVisible, setIsSearchBarVisible] = useState<boolean>(false);
  const [isResultsPopoverVisible, setIsResultsPopoverVisible] =
    useState<boolean>(false);
  const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  /* Hooks */
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  /* Functions */
  const showSearchBar = () => {
    setIsSearchBarVisible(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  };

  const hideSearchBar = () => {
    closeResultsPopover();
    setIsSearchBarVisible(false);
  };

  const closeResultsPopover = () => {
    setIsResultsPopoverVisible(false);
  };

  const openResultsPopover = () => {
    setIsResultsPopoverVisible(true);
  };

  const onTriggerSubmit = () => {
    formRef.current?.requestSubmit();
  };

  const handleInputChange = () => {
    if (!isSearchLoading) setIsSearchLoading(true);

    getSearchResutsDebounced();
  };

  const getSearchResults = () => {
    startTransition(async () => {
      const inputValue = inputRef.current?.value;
      let products: Product[] = [];

      if (inputValue) {
        try {
          const data = (await fetch(
            `/api/search?term=${encodeURIComponent(inputValue)}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          ).then((resp) => resp.json())) as { products: Product[] | undefined };

          if (data.products !== undefined) {
            data.products.forEach((product) => {
              if (!validate(product)) {
                throw new Error("Invalid api response");
              }
            });
            products = data.products;
          }
        } catch (error) {
          console.log(error);
        }
      }

      setSearchResults(products);
      setIsSearchLoading(false);
    });
  };

  const getSearchResutsDebounced = useMemo(() => {
    return debounce(getSearchResults, 200);
  }, []);

  const handleSearchResultClick = (productHandle: string) => {
    hideSearchBar();

    //clear search results
    setSearchResults([]);

    router.push(`/products/${productHandle}`);
  };

  return (
    <SearchOverlay open={isSearchBarVisible}>
      <SearchOverlayTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          className
        )}
        onClick={showSearchBar}
      >
        <HeroIcon ariaAlt="Search">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </HeroIcon>
      </SearchOverlayTrigger>
      <SearchOverlayContent
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
        onInteractOutside={hideSearchBar}
        onCloseClick={hideSearchBar}
        className="max-w-xl"
      >
        <div className="flex flex-1 relative">
          <form action="/search" className="w-full" ref={formRef}>
            <div className="relative">
              <label htmlFor="search" className="sr-only">
                Search:{" "}
              </label>
              <Input
                autoFocus={false}
                name="term"
                id="search"
                required
                onChange={() => {
                  handleInputChange();
                }}
                onFocusCapture={openResultsPopover}
                ref={inputRef}
                className=" ring-offset-white mr-0.5"
                placeholder="Search..."
              />
              {isSearchLoading && (
                <Spinner className="absolute right-2 top-1/2 -translate-y-1/2" />
              )}
            </div>
            <Popover open={isResultsPopoverVisible}>
              <PopoverTrigger className="w-full self-baseline absolute bottom-0 invisible"></PopoverTrigger>
              <PopoverContent
                onEscapeKeyDown={(e) => {
                  hideSearchBar();
                }}
                className="w-[var(--radix-popper-anchor-width)] overflow-hidden p-0"
                onOpenAutoFocus={(event) => {
                  event.preventDefault();
                }}
              >
                {searchResults.map((product) => (
                  <Button
                    variant="ghost"
                    className="w-full h-auto justify-start gap-4 text-sm"
                    onClick={() => {
                      handleSearchResultClick(product.handle);
                    }}
                    aria-label={`Navigate to ${product.title}`}
                    key={product.id}
                  >
                    <div>
                      {product.featuredImage?.url !== undefined && (
                        <Image
                          width={38}
                          height={51.06}
                          src={product.featuredImage?.url}
                          alt={product.featuredImage?.altText || ""}
                        />
                      )}
                    </div>
                    {product.title}
                  </Button>
                ))}
                <div className="flex items-center justify-between py-2 px-4 border-t border-muted">
                  <Button onClick={onTriggerSubmit} variant="link">
                    View all Results
                  </Button>
                  <span className="text-xs" aria-hidden>
                    Press enter
                  </span>
                </div>
              </PopoverContent>
            </Popover>
          </form>
        </div>
      </SearchOverlayContent>
    </SearchOverlay>
  );
}
