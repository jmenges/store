"use client";

import Chip from "@/components/ui/Chip";
import useQueryParamUpdater from "@/hooks/useQueryParamUpdater";
import {
  LazyMotion,
  domAnimation,
  AnimatePresence,
  m as motion,
} from "framer-motion";

type Props = {
  currencySymbol: string;
  activeFilters: [string, string | string[] | undefined][];
  className?: string;
};

export default function ActiveFilterChips({
  currencySymbol,
  activeFilters,
  className,
}: Props) {
  /* Hooks */
  const { removeFromQueryParams, removePairFromQueryParams } =
    useQueryParamUpdater();

  // in order to remove the a param from the queryParams, we have to know, if the option we are removing
  // is a single value or part of an array
  // eg. min-price => single, productTypes => multiple
  // for single values, we can delete the relevant queryParamter
  // should only one value of a filter with multiple conditions be selected, we can treat it as a single value filter
  // for multiple values, we need to remove only the specific key value pair

  return (
    <div className={className}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {activeFilters.length > 0 && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
              }}
              key="applied-filters"
            >
              <div className="flex items-center gap-2">
                <div className="relative top-0 text-sm font-medium">
                  {" "}
                  Applied Filters:{" "}
                </div>
                <AnimatePresence>
                  {activeFilters.map((activeFilter) => {
                    const [filterKey, filterValue] = activeFilter;

                    if (!filterValue) {
                      return;
                    }

                    // price filters need to be handled sepeartely
                    // either we have a single price filter or multiples
                    // we convert price=>=10&price=<=20 to one chip
                    // with the value minPrice - maxPrice
                    if (filterKey === "price") {
                      // handle double price filters
                      if (Array.isArray(filterValue)) {
                        try {
                          const values = filterValue.map((value) =>
                            decodeURIComponent(value)
                          );
                          const minPrice = values
                            .find((value) => value.startsWith(">="))
                            ?.slice(2);
                          const maxPrice = values
                            .find((value) => value.startsWith("<="))
                            ?.slice(2);

                          if (!minPrice || !maxPrice) {
                            throw new Error("Invalid price filter");
                          }

                          return (
                            <Chip
                              key={`${filterKey}-range`}
                              onRemoveClick={() => {
                                removeFromQueryParams(filterKey);
                              }}
                            >
                              {currencySymbol}
                              {minPrice} - {currencySymbol}
                              {maxPrice}
                            </Chip>
                          );
                        } catch (error) {
                          removeFromQueryParams(filterKey);
                          return;
                        }
                      }

                      // handle single price filters
                      try {
                        // console.log("asdF")
                        const filterDecoded = decodeURIComponent(filterValue);
                        const prefix = filterDecoded.slice(0, 2);
                        const value = filterDecoded.slice(2);

                        return (
                          <Chip
                            key={`${filterKey}-${filterValue}`}
                            onRemoveClick={() => {
                              removeFromQueryParams(filterKey);
                            }}
                          >
                            {prefix} {currencySymbol}
                            {value}
                          </Chip>
                        );
                      } catch (error) {
                        removeFromQueryParams(filterKey);
                        return;
                      }
                    }

                    // handle non price other filters with multiple values
                    if (Array.isArray(filterValue)) {
                      return filterValue.map((singleFilterValue) => (
                        <Chip
                          key={`${filterKey}-${singleFilterValue}`}
                          onRemoveClick={() => {
                            removePairFromQueryParams(
                              filterKey,
                              singleFilterValue
                            );
                          }}
                        >
                          {singleFilterValue}
                        </Chip>
                      ));
                    }

                    // handle non price filter with single value
                    return (
                      <Chip
                        key={`${filterKey}-${filterValue}`}
                        onRemoveClick={() => {
                          removeFromQueryParams(filterKey);
                        }}
                      >
                        {filterValue}
                      </Chip>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}
