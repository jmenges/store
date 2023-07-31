"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useProductSorter from "@/hooks/useProductSorter";
import { sortOptions } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SortOptionValue } from "@/types";

export default function ProductSorter({ className }: { className?: string }) {
  /* Custom hook */
  const { activeOption, setActiveOption } = useProductSorter();

  /* Change handler */
  const onValueChange = (value: SortOptionValue) => {
    setActiveOption(value);
  };

  return (
    <div className={cn("flex items-center", className)}>
      <p className="mr-2 flex-shrink-0 text-sm">Sort by</p>
      <Select onValueChange={onValueChange} defaultValue={activeOption}>
        <SelectTrigger className="tablet:text-h4 relative inline-flex min-w-[160px] bg-transparent">
          <SelectValue />
        </SelectTrigger>
        <SelectContent sideOffset={14}>
          {sortOptions.map((option) => (
            <SelectItem key={option.title} value={option.urlValue}>
              {option.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
