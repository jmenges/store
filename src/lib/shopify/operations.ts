import { TAGS } from "@/lib/constants";
import { shopifyFetch } from "@/lib/shopify/api";
import { getCollectionsQuery } from "@/lib/shopify/queries/collection";
import {
  getProductNodesQuery,
  getProductTypesQuery,
  getProductsQuery,
} from "@/lib/shopify/queries/product";
import { getShopCurrencyQuery } from "@/lib/shopify/queries/shop";
import { getCurrencySymbolFromCode } from "@/lib/shopify/utils";
import {
  GetCollectionsOperation,
  GetProductNodesOperation,
  GetProductTypesOperation,
  GetProductsOperation,
  GetShopCurrencyOperation,
} from "@/types/operations";
import {
  Collection,
  Connection,
  Product,
  ShopCurrency,
  ShopifyCollection,
  ShopifyProduct,
} from "@/types/shopify";

const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";

/*
 * Shared functions
 */

const removeEdgesAndNodes = (array: Connection<any>) => {
  return array.edges.map((edge) => edge?.node);
};

const reshapeProduct = (
  product: ShopifyProduct,
  filterHiddenProducts: boolean = true
) => {
  if (
    !product ||
    (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))
  ) {
    return undefined;
  }

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: removeEdgesAndNodes(images),
    variants: removeEdgesAndNodes(variants),
  };
};

const reshapeProducts = (products: ShopifyProduct[]) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};

const reshapeCollections = (collections: ShopifyCollection[]) => {
  const reshapedCollections = [];
  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeCollection(collection);

      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection);
      }
    }
  }

  return reshapedCollections;
};

const reshapeCollection = (collection: ShopifyCollection) => {
  const { products, ...rest } = collection;

  return {
    ...rest,
    productCount: products.edges.length,
  };
};

/* Operations */

/*
 * Related to Products
 */
export async function getProducts({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<GetProductsOperation>({
    query: getProductsQuery,
    tags: [TAGS.products],
    variables: {
      query,
      reverse,
      sortKey,
    },
  });

  return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}

export async function getProductCount(): Promise<number> {
  const res = await shopifyFetch<GetProductNodesOperation>({
    query: getProductNodesQuery,
    tags: [TAGS.products],
  });

  const count = res.body.data.products.edges.length;
  return count || 0;
}

export async function getProductTypes(): Promise<string[]> {
  const res = await shopifyFetch<GetProductTypesOperation>({
    query: getProductTypesQuery,
  });

  return removeEdgesAndNodes(res.body.data.productTypes);
}

/**
 * Related to shop
 */
export async function getShopCurrency(): Promise<ShopCurrency> {
  const res = await shopifyFetch<GetShopCurrencyOperation>({
    query: getShopCurrencyQuery,
  });
  const currencyCode = res.body.data.shop.paymentSettings.currencyCode;

  return {
    currencyCode,
    symbol: getCurrencySymbolFromCode(currencyCode),
  };
}

/**
 * Related to Collections
 */
export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<GetCollectionsOperation>({
    query: getCollectionsQuery,
    tags: [TAGS.collections],
  });
  return reshapeCollections(removeEdgesAndNodes(res.body?.data?.collections));
}
