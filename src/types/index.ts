import { sortOptions } from "@/lib/constants";

export type SearchParams = { [key: string]: string | string[] | undefined };

export type Menu = {
  title: string;
  items: NavItem[];
};

export type NavItem = {
  title: string;
  href: string;
};

export type FilterItem = {
  readonly title: string;
  readonly urlKey: string;
  readonly multipleOptions: boolean;
  readonly queryKey: "productType" | "";
  readonly filterKey: string;
  readonly type: "LIST" | "PRICE_RANGE";
};

export type SortItem = {
  readonly title: string;
  readonly urlValue: string;
  readonly sortKey: "RELEVANCE" | "BEST_SELLING" | "CREATED_AT" | "PRICE";
  readonly reverse: boolean;
};

export type SortOptionValue = (typeof sortOptions)[number]["urlValue"];
