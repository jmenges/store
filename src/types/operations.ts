import {
  Connection,
  ShopifyCart,
  ShopifyCollection,
  ShopifyProduct,
} from "@/types/shopify";
import {
  CurrencyCode,
  ProductFilter,
} from "@shopify/hydrogen-react/storefront-api-types";

/* Products */
export type GetProductsOperation = {
  data: {
    products: Connection<ShopifyProduct>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
    first?: number;
  };
};

export type GetProductsByIdsOperation = {
  data: {
    nodes: ShopifyProduct[];
  };
  variables: {
    ids: string[];
  };
};

export type GetProductOperation = {
  data: { product: ShopifyProduct };
  variables: {
    handle: string;
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
export type GetProductRecommendationsOperation = {
  data: {
    productRecommendations: ShopifyProduct[];
  };
  variables: {
    productId: string;
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
  variables: {
    first?: number;
  };
};

export type GetCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<ShopifyProduct>;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
    filters?: ProductFilter[];
  };
};

/* Cart */
export type GetCartOperation = {
  data: {
    cart: ShopifyCart;
  };
  variables: {
    cartId: string;
  };
};

export type CreateCartOperation = {
  data: { cartCreate: { cart: ShopifyCart } };
};

export type AddToCartOperation = {
  data: {
    cartLinesAdd: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type RemoveFromCartOperation = {
  data: {
    cartLinesRemove: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

export type UpdateCartOperation = {
  data: {
    cartLinesUpdate: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      id: string;
      merchandiseId: string;
      quantity: number;
    }[];
  };
};
