import { FilterItem, Menu, SortItem } from "@/types";

/* Sorting */
export const defaultSortOption: SortItem = {
  title: "Relevance",
  urlValue: "",
  sortKey: "RELEVANCE",
  reverse: false,
};

export const sortOptions: readonly SortItem[] = [
  defaultSortOption,
  {
    title: "Trending",
    urlValue: "trending-desc",
    sortKey: "BEST_SELLING",
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    urlValue: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true,
  },
  {
    title: "Price: Low to high",
    urlValue: "price-asc",
    sortKey: "PRICE",
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    urlValue: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
] as const;

/* Filtering */
export const filters: readonly FilterItem[] = [
  {
    title: "Category",
    urlKey: "category",
    multipleOptions: true,
    queryKey: "productType",
    filterKey: "product_type",
    type: "LIST",
  },
  {
    title: "Price",
    urlKey: "price",
    multipleOptions: true,
    queryKey: "",
    filterKey: "variants.price",
    type: "LIST",
  },
];

export const filterQueryKeys = filters.map((filter) => filter.urlKey);

/* Tags */
export const TAGS = {
  collections: "collections",
  products: "products",
  cart: "cart"
};

/* Footer Nav */
export const footerNav: Menu[] = [
  {
    title: "Company",
    items: [
      { title: "About Us", href: "/" },
      { title: "Contact", href: "/" },
      { title: "FAQs", href: "/" },
    ],
  },
  {
    title: "Shopping",
    items: [
      { title: "Terms & Conditions", href: "/" },
      { title: "Privacy Policy", href: "/" },
      { title: "Shipping", href: "/" },
    ],
  },
];
