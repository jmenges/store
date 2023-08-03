"use server";

import { Product } from "@/types/shopify";
import { getProducts } from "@/lib/shopify/operations/product";

export const getSearchResultsServer = async (
  term: string
): Promise<Product[]> => {
  const searchQuery = `title:${term}*`;
  const products = await getProducts({
    query: searchQuery,
    first: 6,
  });

  return products;
};
