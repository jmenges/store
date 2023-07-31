type Menu = {
  title: string;
  items: NavItem[];
};

type NavItem = {
  title: string;
  href: string;
};

export type FilterItem = {
  readonly title: string;
  readonly urlKey: string;
  readonly multipleOptions: boolean;
  readonly queryKey: string;
  readonly filterKey: string;
  readonly type: "LIST" | "PRICE_RANGE";
};

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

/* Tags */
export const TAGS = {
  collections: "collections",
  products: "products",
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
