import { TAGS } from "@/lib/constants";
import { shopifyFetch } from "@/lib/shopify/api";
import {
  getProductNodesQuery,
  getProductQuery,
  getProductRecommendationsQuery,
  getProductTypesQuery,
  getProductsByIdsQuery,
  getProductsQuery,
} from "@/lib/shopify/queries/product";
import { removeEdgesAndNodes, reshapeImage, reshapeImages } from "@/lib/shopify/utils";
import {
  GetProductNodesOperation,
  GetProductOperation,
  GetProductRecommendationsOperation,
  GetProductTypesOperation,
  GetProductsByIdsOperation,
  GetProductsOperation,
} from "@/types/operations";
import {
  Product,
  ShopifyProduct
} from "@/types/shopify";

const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";

/*
 * Shared functions
 */

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

  const { images, variants, featuredImage,  ...rest } = product;

  return {
    ...rest,
    featuredImage: featuredImage ? reshapeImage(featuredImage, ""): undefined,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants),
  };
};

export const reshapeProducts = (products: ShopifyProduct[]) => {
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

export async function getProducts({
  query,
  reverse,
  sortKey,
  first,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
  first?: number;
}): Promise<Product[]> {
  const res = await shopifyFetch<GetProductsOperation>({
    query: getProductsQuery,
    tags: [TAGS.products],
    variables: {
      query,
      reverse,
      sortKey,
      first,
    },
  });

  return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}

export async function getProductsByIds({
  ids,
}: {
  ids: string[];
}): Promise<Product[]> {
  const res = await shopifyFetch<GetProductsByIdsOperation>({
    query: getProductsByIdsQuery,
    tags: [TAGS.products],
    variables: {
      ids,
    },
  });

  return reshapeProducts(res.body.data.nodes);
}

export async function getProductCount(): Promise<number> {
  const res = await shopifyFetch<GetProductNodesOperation>({
    query: getProductNodesQuery,
    tags: [TAGS.products],
  });

  const count = res.body.data.products.edges.length;
  return count || 0;
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<GetProductOperation>({
    query: getProductQuery,
    tags: [TAGS.products],
    variables: {
      handle,
    },
  });

  return reshapeProduct(res.body.data.product, false);
}

export async function getProductRecommendations(
  productId: string
): Promise<Product[]> {
  const res = await shopifyFetch<GetProductRecommendationsOperation>({
    query: getProductRecommendationsQuery,
    tags: [TAGS.products],
    variables: {
      productId,
    },
  });

  return reshapeProducts(res.body.data.productRecommendations);
}

export async function getProductTypes(): Promise<string[]> {
  const res = await shopifyFetch<GetProductTypesOperation>({
    query: getProductTypesQuery,
  });

  return removeEdgesAndNodes(res.body.data.productTypes);
}
