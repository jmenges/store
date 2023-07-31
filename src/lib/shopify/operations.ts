import { TAGS } from "@/lib/constants";
import { shopifyFetch } from "@/lib/shopify/api";
import {
  getProductNodesQuery,
  getProductsQuery,
} from "@/lib/shopify/queries/product";
import {
  GetProductNodesOperation,
  GetProductsOperation,
} from "@/types/operations";
import { Connection, Product, ShopifyProduct } from "@/types/shopify";

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

/* Operations */
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

export async function getProductCount() {
  const res = await shopifyFetch<GetProductNodesOperation>({
    query: getProductNodesQuery,
    tags: [TAGS.products],
  });

  const count = res.body.data.products.edges.length;
  return count || 0;
}
