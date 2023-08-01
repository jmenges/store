import { TAGS } from "@/lib/constants";
import { shopifyFetch } from "@/lib/shopify/api";
import { reshapeProducts } from "@/lib/shopify/operations/product";
import { getCollectionProductsQuery, getCollectionsQuery } from "@/lib/shopify/queries/collection";
import { removeEdgesAndNodes } from "@/lib/shopify/utils";
import { GetCollectionProductsOperation, GetCollectionsOperation } from "@/types/operations";
import { Collection, Product, ProductFilter, ShopifyCollection } from "@/types/shopify";

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

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
  filters,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
  filters?: ProductFilter[];
}): Promise<Product[]> {
  const res = await shopifyFetch<GetCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    tags: [TAGS.collections, TAGS.products],
    variables: {
      handle: collection,
      reverse,
      sortKey,
      filters,
    },
  });

  if (!res.body.data.collection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(
    removeEdgesAndNodes(res.body.data.collection.products)
  );
}
