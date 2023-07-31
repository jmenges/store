import { CurrencyCode } from "@shopify/hydrogen-react/storefront-api-types";

export const getCurrencySymbolFromCode = (currency: CurrencyCode): string => {
  return (
    new Intl.NumberFormat(undefined, { style: "currency", currency })
      .formatToParts(1)
      .find((x) => x.type === "currency")?.value || ""
  );
};
