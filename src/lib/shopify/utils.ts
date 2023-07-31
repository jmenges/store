import { Connection } from "@/types/shopify";
import { CurrencyCode } from "@shopify/hydrogen-react/storefront-api-types";

export const getCurrencySymbolFromCode = (currency: CurrencyCode): string => {
  return (
    new Intl.NumberFormat(undefined, { style: "currency", currency })
      .formatToParts(1)
      .find((x) => x.type === "currency")?.value || ""
  );
};

export const removeEdgesAndNodes = (array: Connection<any>) => {
  return array.edges.map((edge) => edge?.node);
};
