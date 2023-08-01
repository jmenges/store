"use client";

import { addToCartServer } from "@/components/Cart/actions";
import { useCart } from "@/components/context/cart-context";
import NumberStepper from "@/components/ui/NumberStepper";
import Spinner from "@/components/ui/Spinner";
import { Button } from "@/components/ui/button";
import { ProductVariant } from "@/types/shopify";
import { useState, useTransition } from "react";

type Props = { productTitle: string; variant: ProductVariant };

export default function AddToCartButton({ productTitle, variant }: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  let [isPending, startTransition] = useTransition();

  const { toggleCart } = useCart();

  const onStepperValueChange = (newValue: number) => {
    setQuantity(newValue);
  };

  const addToCartClick = async () => {
    startTransition(async () => {
      await addToCartServer(variant.id, quantity);
      toggleCart();
    });
  };

  return (
    <div className="flex gap-4">
      <NumberStepper
        className="max-w-[100px]"
        initialValue={quantity}
        onValueChange={onStepperValueChange}
        disabled={isPending}
        minValue={1}
        maxValue={10}
      />
      <Button
        onClick={addToCartClick}
        className="min-w-[160px] transition-all"
      >
        {isPending ? (
          <Spinner className="mr-2 h-5 w-5 stroke-current text-white" />
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
}
