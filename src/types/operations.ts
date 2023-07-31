import { Connection, ShopifyProduct } from "@/types/shopify";

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
