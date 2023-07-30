type Menu = {
  title: string;
  items: NavItem[];
};

type NavItem = {
  title: string;
  href: string;
};

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
