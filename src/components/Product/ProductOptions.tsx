"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductOption, ProductVariant } from "@/types/shopify";
import Link from "next/link";

type Props = {
  activeVariant: ProductVariant;
  options: ProductOption[];
  searchParams: { [key: string]: string };
  variants: ProductVariant[];
};

export default function ProductOptions({
  activeVariant,
  variants,
  options,
  searchParams,
}: Props) {
  /*
   * Each option only replaces, its value inside the querystring
   * E.g. the name size option, changes the value of its query parameter in the url to Large
   */
  return (
    <div className="flex flex-wrap items-start justify-between gap-y-6 [&>*:nth-child(odd)]:pr-4">
      {options.map((option) => {
        // get the value for the given option of the active variant
        const selectedOption = activeVariant.selectedOptions.find(
          (selected) => selected.name === option.name
        )?.value;

        return (
          <div key={option.id} className="mb-2 flex basis-1/2 flex-col">
            <label className="mb-2 text-sm text-gray-600">
              Available {option.name}
            </label>
            <div className="flex gap-2">
              {option.values.map((value) => {
                let valueActive = value === selectedOption;
                // handle color options seperately
                if (option.name === "Color") {
                  return (
                    <ProductOptionColorLink
                      key={`${option.name}-${value}`}
                      color={value}
                      active={valueActive}
                      searchParams={searchParams}
                      optionName={option.name}
                      optionValue={value}
                    />
                  );
                }
                // other option types
                return (
                  <ProductOptionLink
                    key={`${option.name}-${value}`}
                    className={cn(
                      buttonVariants({
                        variant: valueActive ? "default" : "outline",
                      }),
                      "uppercase"
                    )}
                    searchParams={searchParams}
                    optionName={option.name}
                    optionValue={value}
                    label={value}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ProductOptionLink({
  optionName,
  optionValue,
  label,
  searchParams,
  children,
  ...props
}: {
  optionName: string;
  optionValue: string;
  label: string;
  searchParams: { [key: string]: string };
  [key: string]: any;
}) {
  const optionSearchParams = new URLSearchParams(searchParams);
  optionSearchParams.set(optionName, optionValue);

  return (
    <Link {...props} replace href={`?${optionSearchParams.toString()}`}>
      {label}
    </Link>
  );
}

export function ProductOptionColorLink({
  color,
  active = false,
  searchParams,
  ...props
}: {
  color: string;
  active?: boolean;
  searchParams: { [key: string]: string };
  [key: string]: any;
}) {
  const optionSearchParams = new URLSearchParams(searchParams);
  optionSearchParams.set("Color", color);

  const className = cn(
    buttonVariants({ variant: "default" }),
    "relative m-1 h-5 w-5 rounded-full p-0 focus-visible:ring-2 hover:scale-125 hover transition-all hover:shadow-gray-400",
    colorToClassName(color),
    active
      ? " after:absolute after:h-[160%] after:w-[160%] after:rounded-full after:border-2 after:border-black hover:scale-1"
      : ""
  );

  return (
    <Link
      className={className}
      {...props}
      replace
      href={`?${optionSearchParams.toString()}`}
    />
  );
}

const colorToClassName = (color: string): string => {
  switch (color.toLowerCase()) {
    case "red":
      return "!bg-red-900/80";
    case "purple":
      return "!bg-purple-900/80";
    case "ocean":
      return "!bg-blue-800/80";
    case "green":
      return "!bg-green-800/60";
    case "olive":
      return "!bg-lime-800/60";
    case "blue":
      return "!bg-blue-800/80";
    case "black":
      return "!bg-black/80";
    case "white":
      return "!bg-white";
    case "beige":
      return "!bg-amber-500/20";
    case "coast sand":
      return "!bg-[#d7bba2]";
    case "cream dream":
      return "!bg-[#f0e7e1]";
    case "offwhite":
      return "!bg-slate-100/30";
    case "gray":
      return "!bg-gray-800/20";
    case "solid gray":
      return "!bg-[#929292]";
    case "serenity green":
      return "!bg-[#afb8ab]";
    case "frozen mint":
      return "!bg-[#d1d8d2]";
    case "graphit gray":
      return "!bg-[#dbdadd]";
    case "pastel gray":
      return "!bg-[#dedede]";
    case "midnight black":
      return "!bg-[#242927]";
    case "brilliant white":
      return "!bg-[#f8fafb]";
    default:
      throw new Error(`Unkown color: ${color}. Cannot generate classname`);
  }
};
