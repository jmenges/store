import { Progress } from '@/components/ui/progress';
import React from 'react';

type Props = { total: number; freeShippingFrom: number, currencySymbol: string };

export default function ShippingCostProgress({ total, freeShippingFrom, currencySymbol }: Props) {
  const progressValue = Math.min((total / freeShippingFrom) * 100, freeShippingFrom);

  const text =
    freeShippingFrom - total > 1
      ? `You are ${currencySymbol}${freeShippingFrom - total} away from free shipping.`
      : 'Free shipping will be applied at checkout.';

  return (
    <div className="px-4 py-4">
      <p className='text-center mb-2'>{text}</p>
      <Progress value={progressValue} />
    </div>
  );
}
