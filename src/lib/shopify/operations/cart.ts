import { TAGS } from "@/lib/constants";
import { shopifyFetch } from "@/lib/shopify/api";
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from "@/lib/shopify/mutations/cart";
import { getCartQuery } from "@/lib/shopify/queries/cart";
import { removeEdgesAndNodes, reshapeImage } from "@/lib/shopify/utils";
import {
  AddToCartOperation,
  CreateCartOperation,
  GetCartOperation,
  RemoveFromCartOperation,
  UpdateCartOperation,
} from "@/types/operations";
import { Cart, CartItem, ShoifyCartItem, ShopifyCart } from "@/types/shopify";

const reshapeCart = (cart: ShopifyCart): Cart => {
  if (!cart.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: "0.0",
      currencyCode: "EUR",
    };
  }

  return {
    ...cart,
    lines: reshapeCartItems(removeEdgesAndNodes(cart.lines)),
  };
};

const reshapeCartItems = (lines: ShoifyCartItem[]) => {
  return lines.map((item) => {
    if (!item.merchandise.image?.url) {
      throw new Error("Missing image in merchandise");
    }
    item.merchandise = {
      ...item.merchandise,
      image: reshapeImage(item.merchandise.image, item.merchandise.title),
    };
    return item as CartItem;
  });
};

export async function createCart(): Promise<Cart> {
  const res = await shopifyFetch<CreateCartOperation>({
    query: createCartMutation,
    cache: "no-store",
    tags: [TAGS.cart],
  });

  return reshapeCart(res.body.data.cartCreate.cart);
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<AddToCartOperation>({
    query: addToCartMutation,
    variables: {
      cartId,
      lines,
    },
    cache: "no-store",
  });
  return reshapeCart(res.body.data.cartLinesAdd.cart);
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[]
): Promise<Cart> {
  const res = await shopifyFetch<RemoveFromCartOperation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds,
    },
    cache: "no-store",
  });

  return reshapeCart(res.body.data.cartLinesRemove.cart);
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<UpdateCartOperation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines,
    },
    cache: "no-store",
  });

  return reshapeCart(res.body.data.cartLinesUpdate.cart);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const res = await shopifyFetch<GetCartOperation>({
    query: getCartQuery,
    variables: { cartId },
    cache: "no-store",
    tags: [TAGS.cart],
  });

  if (!res.body.data.cart) {
    return null;
  }

  return reshapeCart(res.body.data.cart);
}
