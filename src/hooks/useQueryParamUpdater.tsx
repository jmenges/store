"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useQueryParamUpdater() {
  /* Hooks */
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* Functions */
  const setQueryParamArray = useCallback(
    (key: string, values: string[]) => {
      // currentParams are stored with structure [key, value][]
      const currentParams = Array.from(searchParams.entries());
      //remove all params with matching key
      const filteredParams = currentParams.filter((param) => param[0] != key);
      const addParams = values.map((value) => [key, encodeURIComponent(value)]);
      const params = new URLSearchParams([...filteredParams, ...addParams]);

      router.replace(pathname + "?" + params.toString(), { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const setQueryParam = useCallback(
    async (key: string, value?: string | number) => {
      let newParams;
      const currentParams = Array.from(searchParams.entries());
      if (!value) {
        const paramsFiltered = currentParams.filter(
          (param) => param[0] !== key
        );
        newParams = new URLSearchParams(paramsFiltered);
      } else {
        newParams = new URLSearchParams(currentParams);
        newParams.set(key, String(value));
      }

      let params = newParams.toString();
      if (params !== "") params = "?" + params;

      // TODO: cannot navigate directly on page load
      // setTimeout is a temporary fix
      // better approach is to do it on the server
      setTimeout(() => {
        router.replace(pathname + params, { scroll: false });
      }, 0);
    },
    [searchParams, pathname, router]
  );

  const removeFromQueryParams = (key: string) => {
    setQueryParam(key);
  };

  const removePairFromQueryParams = useCallback(
    (key: string, value: string) => {
      const currentParams = Array.from(searchParams.entries());
      const filteredParams = currentParams.filter(
        (pair) => pair[0] === key && pair[1] !== value
      );
      const newParams = new URLSearchParams(filteredParams);

      router.push(pathname + "?" + newParams.toString(), { scroll: false });
    },
    [searchParams, pathname, router]
  );
  return {
    setQueryParamArray,
    setQueryParam,
    removeFromQueryParams,
    removePairFromQueryParams,
  };
}
