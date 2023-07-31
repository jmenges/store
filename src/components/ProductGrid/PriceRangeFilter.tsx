'use client';

import { Input } from '@/components/ui/input';
import useQueryParamUpdater from '@/hooks/useQueryParamUpdater';
import { getPriceRangeFromQuery, validatePriceRange } from '@/lib/filter';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

type Props = { currencySymbol: string; urlKey: string; queryValues: string[]; className?: string };

export default function PriceRangeFilter({
  currencySymbol,
  className,
  urlKey,
  queryValues = [],
}: Props) {
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [isPriceRangeInvalid, setIsPriceRangeInvalid] = useState<boolean>(false);

  const minPriceRef = useRef<string>(minPrice);
  minPriceRef.current = minPrice;
  const maxPriceRef = useRef<string>(maxPrice);
  maxPriceRef.current = maxPrice;

  /* Hooks */
  const { setQueryParamArray, removeFromQueryParams } = useQueryParamUpdater();

  /* Update queryParams based on checkbox changes */
  useEffect(() => {
    const activeValues: string[] = [];
    if (minPrice && minPrice !== '') {
      activeValues.push(`>=${minPrice}`);
    }
    if (maxPrice && maxPrice !== '') {
      activeValues.push(`<=${maxPrice}`);
    }

    const isPriceRangeValid = validatePriceRange({ minPrice, maxPrice });
    setIsPriceRangeInvalid(!isPriceRangeValid);

    if (isPriceRangeValid) setQueryParamArray(urlKey, activeValues);
  }, [minPrice, maxPrice, urlKey]);

  /* Handle filter updates based on external changes */
  useEffect(() => {
    const { minPrice, maxPrice } = getPriceRangeFromQuery(queryValues);

    if (!validatePriceRange({ minPrice, maxPrice })) {
      removeFromQueryParams(urlKey);
      return;
    }

    if (minPrice !== minPriceRef.current) {
      setMinPrice(minPrice || '');
    }
    if (maxPrice !== maxPriceRef.current) {
      setMaxPrice(maxPrice || '');
    }
  }, [queryValues]);

  return (
    <>
      <div className={cn('flex gap-2', className)}>
        <div
          className={cn(
            `relative flex after:absolute after:left-2 after:top-1/2 after:z-10 after:-translate-y-1/2 after:content-['${currencySymbol}']`,
            isPriceRangeInvalid ? 'shake' : ''
          )}
        >
          <Input
            onChange={(e) => {
              const inputNumber = e.target.value.replace(/\D/g, '');
              setMinPrice(inputNumber);
            }}
            type="text"
            value={minPrice}
            className={cn('pl-5 text-gray-700', isPriceRangeInvalid ? 'border-red-500' : '')}
            placeholder="Min Price"
          />
        </div>
        <div
          className={cn(
            `relative flex after:absolute after:left-2 after:top-1/2 after:z-10 after:-translate-y-1/2 after:content-['${currencySymbol}']`,
            isPriceRangeInvalid ? 'shake' : ''
          )}
        >
          <Input
            onChange={(e) => {
              const inputNumber = e.target.value.replace(/\D/g, '');
              setMaxPrice(inputNumber);
            }}
            type="text"
            className={cn('pl-5 text-gray-700', isPriceRangeInvalid ? 'border-red-500 ' : '')}
            value={maxPrice}
            placeholder="Max Price"
          />
        </div>
      </div>
      {isPriceRangeInvalid && (
        <p className="mx-4 mt-2 text-xs text-red-500">
          The Max Price has to be higher or equal to the Min Price.
        </p>
      )}
    </>
  );
}
