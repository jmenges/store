
import ProductFilter, {
    ProductFilterProps,
} from "@/components/ProductGrid/ProductFilter";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import MaterialSymbolsFilterListRounded from '~icons/material-symbols/filter-list-rounded'

type Props = {
  className?: string;
  productFilterProps: ProductFilterProps;
};

export default function MobileProductFilter({
  className,
  productFilterProps,
}: Props) {
  return (
    <div className={cn("md:hidden flex", className)}>
      <Sheet>
        <SheetTrigger className="inline-flex gap-1 text-sm font-medium"><MaterialSymbolsFilterListRounded className="w-5 h-5"/>Filter</SheetTrigger>
        <SheetContent side="left">
          <ProductFilter {...productFilterProps} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
