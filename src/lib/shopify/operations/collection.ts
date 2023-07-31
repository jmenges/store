import { TAGS } from "@/lib/constants";
import { shopifyFetch } from "@/lib/shopify/api";
import { getCollectionsQuery } from "@/lib/shopify/queries/collection";
import { removeEdgesAndNodes } from "@/lib/shopify/utils";
import { GetCollectionsOperation } from "@/types/operations";
import { Collection, ShopifyCollection } from "@/types/shopify";

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

export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<GetCollectionsOperation>({
    query: getCollectionsQuery,
    tags: [TAGS.collections],
  });
  return reshapeCollections(removeEdgesAndNodes(res.body?.data?.collections));
}
