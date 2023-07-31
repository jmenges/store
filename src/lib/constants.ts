type Menu = {
  title: string;
  items: NavItem[];
};

type NavItem = {
  title: string;
  href: string;
};

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
