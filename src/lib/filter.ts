import { filters } from "@/lib/constants";
import {
  PriceRangeFilter,
  ProductFilter,
} from "@shopify/hydrogen-react/storefront-api-types";

type PriceRange = {
  minPrice?: string;
  maxPrice?: string;
};

export const getPriceRangeFromQuery = (queryValues: string[]): PriceRange => {
  try {
    const values = queryValues.map((value) => decodeURIComponent(value));
    const minPrice = values.find((value) => value.startsWith(">="))?.slice(2);
    const maxPrice = values.find((value) => value.startsWith("<="))?.slice(2);

    return {
      minPrice,
      maxPrice,
    };
  } catch (error) {
    return {};
  }
};

export const validatePriceRange = (range: PriceRange): boolean => {
  if (!range.minPrice || !range.maxPrice) return true;
  if (Number(range.maxPrice) >= Number(range.minPrice)) return true;
  return false;
};

// we need to build the query for products based on the activeFilters
// query uses the search syntax https://shopify.dev/docs/api/usage/search-syntax
// to combine multiple conditions the syntax is : query=key:value1 OR key:value2
// query=state:disabled AND ("sale shopper" OR VIP)
// officially supported query fields: https://shopify.dev/docs/api/admin-graphql/2023-07/queries/products
// various fields can not be used (price:<10) for example does not work
//
// supported filter parameters:
//         - `available_for_sale`
//         - `created_at`
//         - `product_type`
//         - `tag`
//         - `tag_not`
//         - `title`
//         - `updated_at`
//         - `variants.price`
//         - `vendor`
//
// information based on comment mobbile-buy-sdk-ios in:
// https://github.com/Shopify/mobile-buy-sdk-ios/blob/e6e85dcf8f9eb95baaa8336ad3d7967ea8c36ade/Buy/Generated/Storefront/QueryRoot.swift#L70
export const buildQueryFromQueryParms = (
  activeFilters: [string, string | string[] | undefined][]
): string => {
  let queryTerm = "";
  activeFilters.forEach((filterPair) => {
    const [filterQueryKey, filterValues] = filterPair;
    const filter = filters.find((filter) => filter.urlKey === filterQueryKey);

    if (!filter || !filterValues) return;

    let partialQuery = "";

    // handle price & productType filter seperately
    if (filter.urlKey === "price") {
      let priceQueryValues = [];
      if (!Array.isArray(filterValues)) {
        priceQueryValues = [filterValues];
      } else {
        priceQueryValues = [...filterValues];
      }
      const { minPrice, maxPrice } = getPriceRangeFromQuery(priceQueryValues);
      if (minPrice) {
        partialQuery += `${filter.filterKey}:>"${minPrice}"`;
      }
      if (filterValues.length > 1) {
        partialQuery += " AND ";
      }
      if (maxPrice) {
        partialQuery += `${filter.filterKey}:<"${maxPrice}"`;
      }
      partialQuery = `(${partialQuery})`;
      queryTerm += partialQuery;
      return;
    } else if (filter.type === "LIST" && Array.isArray(filterValues)) {
      // handle list filter => for now only productType
      const valueCount = filterValues.length;
      filterValues.forEach((value, index) => {
        partialQuery += `${filter.filterKey}:"${value}" `;
        if (index < valueCount - 1) partialQuery += ` OR `;
      });
      queryTerm += partialQuery;
      return;
    }
    queryTerm += `${filter.filterKey}:"${filterValues}" `;
  });

  return queryTerm;
};

// TODO: currently only price & productType filters are supported
// if required add more
export const buildProductFilterFromQueryParms = (
  activeFilters: [string, string | string[] | undefined][]
): ProductFilter[] => {
  let productFilters: ProductFilter[] = [];

  activeFilters.forEach((filterPair) => {
    let productFilter: ProductFilter = {};
    const [filterQueryKey, filterValues] = filterPair;
    const filter = filters.find((filter) => filter.urlKey === filterQueryKey);

    if (!filter || !filterValues) return;

    // handle price & productType filter seperately
    if (filter.urlKey === "price") {
      let priceRangeFilter: PriceRangeFilter = {};
      let priceQueryValues = [];
      if (!Array.isArray(filterValues)) {
        priceQueryValues = [filterValues];
      } else {
        priceQueryValues = [...filterValues];
      }
      const { minPrice, maxPrice } = getPriceRangeFromQuery(priceQueryValues);
      if (minPrice) {
        priceRangeFilter["min"] = Number(minPrice);
      }
      if (maxPrice) {
        priceRangeFilter["max"] = Number(maxPrice);
      }
      productFilter["price"] = priceRangeFilter;
      productFilters.push(productFilter);
      return;
    } else if (filter.type === "LIST" && Array.isArray(filterValues)) {
      filterValues.forEach((filterValue) => {
        let productFilter: ProductFilter = {};
        productFilter[filter.queryKey] = filterValue;
        productFilters.push(productFilter);
      });
      return;
    }

    productFilter[filter.queryKey] = filterValues;
    productFilters.push(productFilter);
    return;
    // queryTerm += `${filter.filterKey}:"${filterValues}" `;
  });

  return productFilters;
};
