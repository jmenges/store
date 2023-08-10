import { Connection, ShopifyImage, Image } from "@/types/shopify";
import { CurrencyCode } from "@shopify/hydrogen-react/storefront-api-types";

export const getCurrencySymbolFromCode = (currency: CurrencyCode): string => {
  return (
    new Intl.NumberFormat(undefined, { style: "currency", currency })
      .formatToParts(1)
      .find((x) => x.type === "currency")?.value || ""
  );
};

export const removeEdgesAndNodes = <T>(array: Connection<T>) => {
  return array.edges.map((edge) => edge?.node);
};

export const reshapeImage = (image: ShopifyImage, collectionTitle: string) => {
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

export const reshapeImages = (
  images: Connection<ShopifyImage>,
  productTitle: string
): Image[] => {
  const flattened = removeEdgesAndNodes(images);

  return flattened.map((image: ShopifyImage, index) => {
    const filename = image.url.match(/.*\/(.*)\..*/)?.[1] || index;
    if (!image?.width || !image?.height) {
      throw new Error("We espect all images to have width and height defined");
    }
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`,
      width: image.width || 1,
      height: image.height || 1,
    };
  });
};
