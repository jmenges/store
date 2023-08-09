import { TAGS } from "@/lib/constants";
import { shopifyFetch } from "@/lib/shopify/api";
import { reshapeProducts } from "@/lib/shopify/operations/product";
import {
  getCollectionProductsQuery,
  getCollectionsQuery,
} from "@/lib/shopify/queries/collection";
import { removeEdgesAndNodes } from "@/lib/shopify/utils";
import {
  GetCollectionProductsOperation,
  GetCollectionsOperation,
} from "@/types/operations";
import {
  Collection,
  Product,
  ProductFilter,
  ShopifyCollection,
  ShopifyImage,
} from "@/types/shopify";

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

const reshapeImage = (image: ShopifyImage, collectionTitle: string) => {
  const filename = image.url.match(/.*\/(.*)\..*/)?.[1] || 0;
  if (!image?.width || !image?.height) {
    throw new Error("We espect all images to have width and height defined");
  }

  return {
    ...image,
    altText: image.altText || `${collectionTitle} - ${filename}`,
    width: image.width || 1,
    height: image.height || 1,
  };
};

const reshapeCollection = (collection: ShopifyCollection) => {
  const { products, image, ...rest } = collection;

  if (!image) throw new Error("Missing clollection image");

  return {
    ...rest,
    image: reshapeImage(image, collection.title), 
    productCount: products.edges.length,
  };
};

export async function getCollections({
  first,
}: {
  first?: number;
}): Promise<Collection[]> {
  const res = await shopifyFetch<GetCollectionsOperation>({
    query: getCollectionsQuery,
    tags: [TAGS.collections],
    variables: {
      first: first,
    },
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
