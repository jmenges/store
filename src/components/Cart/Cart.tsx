"use client";

import CartItem from "@/components/Cart/CartItem";
import ShippingCostProgress from "@/components/Cart/ShippingCostProgress";
import Price from "@/components/Price";
import { useCart } from "@/components/context/cart-context";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getCurrencySymbolFromCode } from "@/lib/shopify/utils";
import { cn } from "@/lib/utils";
import { Cart } from "@/types/shopify";
import Link from "next/link";
import { useEffect } from "react";

import SolarCartLargeMinimalisticOutline from "~icons/solar/cart-large-minimalistic-outline.jsx";

type Props = { cart: Cart; cartIdUpdated: boolean; className?: string };

export default function Cart({ cart, cartIdUpdated, className }: Props) {
  const { cartOpen, toggleCart } = useCart();

  useEffect(() => {
    if (!cartIdUpdated) return;
    document.cookie = `cartId=${cart.id};`;
    console.log("cartId changed: ", cart.id);
  }, [cartIdUpdated, cart.id]);

  return (
    <Sheet open={cartOpen} onOpenChange={toggleCart}>
      <SheetTrigger
        className={cn(
          buttonVariants({ size: "icon", variant: "ghost" }),
          "pl-2 pr-1",
          className
        )}
      >
        <SolarCartLargeMinimalisticOutline className="h-4 w-4 stroke-current stroke-[0.5px]" />
        <span className="-mt-2 ml-0.5 text-xs ">{cart.totalQuantity}</span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-md flex border-b border-gray-200 px-4 py-4 font-normal">
            Cart
            <span className="-mt-[2px] ml-1 text-sm ">
              {cart.totalQuantity}
            </span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col flex-1 gap-4">
          <ShippingCostProgress
            total={Number(cart.cost.totalAmount.amount)}
            currencySymbol={getCurrencySymbolFromCode(
              cart.cost.totalAmount.currencyCode
            )}
            freeShippingFrom={100}
          />

          {/* Cart Items */}
          {cart.lines.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}

          <div className="mt-auto flex justify-between border-t border-gray-200 px-4 pt-4">
            <h3 className="text-lg font-semibold text-black">Subtotal</h3>
            <Price
              className="font-semibold text-black"
              amount={cart.cost.totalAmount.amount}
              currencyCode={cart.cost.totalAmount.currencyCode}
            />
          </div>
          <div className="mb-4 flex gap-2 px-4 [&>*]:flex-1">
            <Link
              onClick={toggleCart}
              href="/not-implemented"
              className={buttonVariants({ variant: "outline" })}
            >
              View Cart
            </Link>
            <Link
              onClick={toggleCart}
              href={"/not-implemented"}
              className={buttonVariants({ variant: "default" })}
            >
              Checkout
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
