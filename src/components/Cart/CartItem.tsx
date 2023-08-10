"use client";

import {
  removeFromCartServer,
  updateCartItemQuantityServer,
} from "@/components/Cart/actions";
import Price from "@/components/Price";
import NumberStepper from "@/components/ui/NumberStepper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTransition } from "react";
import SolarTrashBin2Linear from "~icons/solar/trash-bin-2-linear";
import { CartItem } from "@/types/shopify";

type Props = { item: CartItem };

export default function CartItem({ item }: Props) {
  let [isPending, startTransition] = useTransition();

  const onRemoveClick = async () => {
    startTransition(() => {
      removeFromCartServer([item.id]);
    });
  };

  const onUpdateQuanity = async (newQuantity: number) => {
    startTransition(() => {
      updateCartItemQuantityServer({
        lineId: item.id,
        merchandiseId: item.merchandise.id,
        newQuantity,
      });
    });
  };

  return (
    <div
      className={cn(
        "flex gap-2 px-4 py-2 relative",
        isPending ? "bg-disabled-animate" : ""
      )}
    >
      <Image
        className="rounded-sm w-1/3"
        height={item.merchandise.image.height}
        width={item.merchandise.image.width}
        src={item.merchandise.image.url}
        alt={item.merchandise.image.altText}
      />
      <div className="flex flex-1 flex-col">
        {/* Info & Remove */}
        <div className="flex flex-1 items-start justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-black">
              {item.merchandise.product.title}
            </p>
            <p className="text-xs text-gray-500">
              {item.merchandise.title.replace("/", "•")}
            </p>
          </div>
          <Button
            onClick={onRemoveClick}
            size="raw"
            variant="ghost"
            disabled={isPending}
          >
            <SolarTrashBin2Linear className="svg-stroke-2 mt-1 h-4 w-4 stroke-current text-black" />
          </Button>
        </div>
        {/* Quantity & Price */}
        <div className="flex justify-between">
          <NumberStepper
            disabled={isPending}
            size="sm"
            className="max-w-[80px]"
            initialValue={item.quantity}
            onValueChange={onUpdateQuanity}
          />
          <Price
            amount={item.cost.totalAmount.amount}
            currencyCode={item.cost.totalAmount.currencyCode}
          />
        </div>
      </div>
    </div>
  );
}
