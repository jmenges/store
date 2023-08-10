import {
  ProductVariant as ShopifyProductVariant,
  Image as ShopifyImage,
  Product as StorefrontProduct,
  ProductOption as ShopifyProductOption,
  ProductFilter,
  Collection as StorefrontCollection,
  Cart as StorefrontCart,
  CartLine as StorefrontCartLine,
  CurrencyCode,
  Merchandise as StorefrontMerchandise,
} from "@shopify/hydrogen-react/storefront-api-types";

export type { ProductFilter, ShopifyImage };

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

export type Image = Pick<ShopifyImage, "id"> & {
  url: string;
  altText: string;
  width: number;
  height: number;
};

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
  "id" | "handle" | "title" | "products" | "image"
>;

export type Collection = Omit<ShopifyCollection, "products" | "image"> & {
  products?: Product[];
  productCount: number;
  image: Image;
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

/* Cart */
export type ShopifyCart = Pick<
  StorefrontCart,
  "id" | "checkoutUrl" | "cost" | "lines" | "totalQuantity"
>;

export type ShopifyMerchandise = Pick<
  StorefrontMerchandise,
  "id" | "title" | "image" | "selectedOptions" | "product"
>;

export type Merchandise = Omit<ShopifyMerchandise, "image"> & {
  image: Image;
};

export type ShoifyCartItem = Pick<
  StorefrontCartLine,
  "id" | "quantity" | "cost" | "merchandise"
>;

export type CartItem = Omit<ShoifyCartItem, "merchandise"> & {
  merchandise: Merchandise;
};

export type Cart = Omit<ShopifyCart, "lines"> & {
  lines: CartItem[];
};
