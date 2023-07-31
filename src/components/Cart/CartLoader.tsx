import Cart from '@/components/Cart/Cart';
import { createCart, getCart } from '@/lib/shopify/operations/cart';
import { cookies } from 'next/headers';

export default async function CartLoader() {
  const cartId = cookies().get('cartId')?.value;
  let cartIdUpdated = false;
  let cart;

  try {
    if (cartId) {
      cart = await getCart(cartId);
    }
  } catch (error) {
    console.log(error);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartIdUpdated = true;
  }

  return <Cart cartIdUpdated={cartIdUpdated} cart={cart}></Cart>;
}
