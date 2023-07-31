'use server';

import { TAGS } from '@/lib/constants';
import { addToCart, removeFromCart, updateCart } from '@/lib/shopify/operations/cart';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const addToCartServer = async (variantId: string, quantity: number) => {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) throw new Error('No cartId defined');

  try {
    const cart = await addToCart(cartId, [
      {
        merchandiseId: variantId,
        quantity,
      },
    ]);
  } catch (error) {
    console.log(error);
  }
  revalidateTag(TAGS.cart);
};

export const removeFromCartServer = async (lineIds: string[]) => {
  if (lineIds.length === 0) return;

  const cartId = cookies().get('cartId')?.value;
  if (!cartId) throw new Error('No cartId defined');

  try {
    const cart = await removeFromCart(cartId, lineIds);
  } catch (error) {
    console.log(error);
  }
  revalidateTag(TAGS.cart);
};

export const updateCartItemQuantityServer = async ({
  lineId,
  merchandiseId,
  newQuantity,
}: {
  lineId: string;
  merchandiseId: string;
  newQuantity: number;
}) => {
  const cartId = cookies().get('cartId')?.value;
  if (!cartId) throw new Error('No cartId defined');

  try {
    const cart = await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId,
        quantity: newQuantity,
      },
    ]);
  } catch (error) {
    console.log(error);
  }
  revalidateTag(TAGS.cart);
};
