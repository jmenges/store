import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const SearchOverlay = DialogPrimitive.Root;

const SearchOverlayTrigger = DialogPrimitive.Trigger;

const SearchOverlayClose = DialogPrimitive.Close;

interface SearchOverlayContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  onCloseClick: () => void;
}

const SearchOverlayContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SearchOverlayContentProps
>(({ className, onCloseClick, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "absolute z-50 gap-4 bg-background h-full transition-all flex flex-col inset-x-0 top-0 data-[state=closed]:w-0 data-[state=open]:w-full data-[state=open]:animate-grow data-[state=closed]:animate-shrink overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="flex items-center h-full px-4">
        {children}
        <DialogPrimitive.Close
          className={cn(
            buttonVariants({ variant: "icon", size: "sm" }),
            "h-9 opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary"
          )}
          onClick={onCloseClick}
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </div>
    </DialogPrimitive.Content>
  );
});
SearchOverlayContent.displayName = DialogPrimitive.Content.displayName;

export {
  SearchOverlay,
  SearchOverlayClose,
  SearchOverlayContent,
  SearchOverlayTrigger,
};
