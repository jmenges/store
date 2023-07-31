import { Connection, ShopifyCollection, ShopifyProduct } from "@/types/shopify";
import { CurrencyCode } from "@shopify/hydrogen-react/storefront-api-types";

/* Products */
export type GetProductsOperation = {
  data: {
    products: Connection<ShopifyProduct>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type GetProductNodesOperation = {
  data: {
    products: Connection<{ id: string }>;
  };
};

export type GetProductTypesOperation = {
  data: {
    productTypes: Connection<string>;
  };
};

/* Shop */
export type GetShopCurrencyOperation = {
  data: {
    shop: {
      paymentSettings: {
        currencyCode: CurrencyCode;
      };
    };
  };
};

/* Collections */
export type GetCollectionsOperation = {
  data: {
    collections: Connection<ShopifyCollection>;
  };
};
