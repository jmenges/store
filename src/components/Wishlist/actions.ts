"use server";

import { getProductsByIds } from "@/lib/shopify/operations/product";
import { Product } from "@/types/shopify";

export const getProductsByIdsServer = async (
  productIds: string[]
): Promise<Product[]> => {
  const products = await getProductsByIds({
    ids: productIds,
  });
  return products;
};
