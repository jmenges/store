"use client";

import {
  SearchOverlay,
  SearchOverlayContent,
  SearchOverlayTrigger,
} from "@/components/ui/SearchOverlay";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

type Props = {};

export default function SearchBar({}: Props) {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onOverlayOpen = () => {
    setShowOverlay(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  };

  const onOverlayClose = () => {
    onPopoverClose();
    setShowOverlay(false);
  };

  const onPopoverClose = () => {
    setShowPopover(false);
  };

  const onPopoverOpen = () => {
    setShowPopover(true);
  };

  return (
    <SearchOverlay open={showOverlay}>
      <SearchOverlayTrigger
        className={buttonVariants({ variant: "ghost", size: "sm" })}
        onClick={onOverlayOpen}
      >
        <MagnifyingGlassIcon className="w-4 h-4" />
      </SearchOverlayTrigger>
      <SearchOverlayContent
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
        onInteractOutside={onOverlayClose}
        onCloseClick={onOverlayClose}
        onEscapeKeyDown={(e) => {
          console.log(e);
          onOverlayClose();
        }}
        className=""
      >
        <div className="flex flex-1 relative">
          <Input
            autoFocus={false}
            onFocusCapture={onPopoverOpen}
            ref={inputRef}
            className=" ring-offset-white mr-0.5"
            placeholder="Search..."
          ></Input>
          <Popover open={showPopover}>
            <PopoverTrigger className="w-full self-baseline absolute bottom-0 invisible"></PopoverTrigger>
            <PopoverContent
              onEscapeKeyDown={(e)=>{onOverlayClose()}}
              className="w-[var(--radix-popper-anchor-width)] overflow-hidden flex items-center justify-between"
              onOpenAutoFocus={(event) => {
                event.preventDefault();
              }}
            >
              <Button variant="link">View all Results</Button>
              <span className="text-xs">Press enter</span>
            </PopoverContent>
          </Popover>
        </div>
      </SearchOverlayContent>
    </SearchOverlay>
  );
}
