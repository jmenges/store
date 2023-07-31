import {
  ProductVariant as ShopifyProductVariant,
  Image as ShopifyImage,
  Product as StorefrontProduct,
  ProductOption as ShopifyProductOption,
  Collection as StorefrontCollection,
  CurrencyCode,
} from "@shopify/hydrogen-react/storefront-api-types";

export type Maybe<T> = T | null;

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type ProductVariant = Pick<
  ShopifyProductVariant,
  "id" | "title" | "availableForSale" | "selectedOptions" | "price"
>;

export type Image = Pick<
  ShopifyImage,
  "id" | "height" | "width" | "url" | "altText"
>;

export type ShopifyProduct = Pick<
  StorefrontProduct,
  | "id"
  | "handle"
  | "availableForSale"
  | "options"
  | "title"
  | "variants"
  | "descriptionHtml"
  | "priceRange"
  | "featuredImage"
  | "tags"
  | "productType"
  | "images"
  | "variants"
  | "metafields"
>;

export type ShopifyCollection = Pick<
  StorefrontCollection,
  "id" | "handle" | "title" | "image" | "products"
>;

export type Collection = Omit<ShopifyCollection, "products"> & {
  products?: Product[];
  productCount: number;
};

export type Product = Omit<ShopifyProduct, "images" | "variants"> & {
  variants: ProductVariant[];
  images: Image[];
};

export type ShopCurrency = {
  currencyCode: CurrencyCode;
  symbol: string;
};

export type PriceRange = {
  minPrice?: string;
  maxPrice?: string;
};

export type ProductOption = Pick<
  ShopifyProductOption,
  "id" | "name" | "values"
>;
