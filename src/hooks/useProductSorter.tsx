'use client';

import { defaultSortOption, sortOptions } from '@/lib/constants';
import { SortOptionValue } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, useCallback, useEffect, useMemo, useState } from 'react';

export type Sorter = {
  activeOption: SortOptionValue;
  setActiveOption: Dispatch<SortOptionValue>;
};

export default function useProductSorter(): Sorter {
  /* State */
  const [activeOption, setActiveOption] = useState<SortOptionValue | null>(null);

  /**
   * Hooks
   */
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* Calculatations */
  const queryParamSort = useMemo(() => searchParams.get('sort'), [searchParams]);

  /* Set the local state based on the query parameter on initial render */
  useEffect(() => {
    if (queryParamSort !== null) {
      const validOption = sortOptions.find(
        (option) => option.urlValue === queryParamSort.toLowerCase()
      );
      //clear category from query params if invalid
      if (!validOption) {
        setSortQueryString();
        return;
      }

      setActiveOption(validOption.urlValue);
    } else {
      setActiveOption(defaultSortOption.urlValue);
    }
  }, []);

  /* Set query parameter based on active category */
  useEffect(() => {
    /* Guard clauses */
    if (
      activeOption === null ||
      (!queryParamSort && activeOption === 'upvotes-desc') ||
      queryParamSort === activeOption
    )
      return;

    /* Set query parameter based on active category */
    const nextOption = activeOption;
    setSortQueryString(nextOption);
  }, [activeOption, pathname, queryParamSort]);

  /**
   * Functions
   */
  const setSortQueryString = useCallback(
    (value?: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      if (value) {
        params.set('sort', value);
      } else {
        params.delete('sort');
      }
      router.push(pathname + '?' + params.toString(), { scroll: false });
    },
    [searchParams, pathname]
  );

  return {
    activeOption: activeOption || defaultSortOption.urlValue,
    setActiveOption,
  };
}
