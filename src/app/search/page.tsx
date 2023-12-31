import Breadcrumbs from "@/components/Breadcrumbs";
import ActiveFilterChips from "@/components/ProductGrid/ActiveFilterChips";
import MobileProductFilter from "@/components/ProductGrid/MobileProductFilter";
import ProductFilter from "@/components/ProductGrid/ProductFilter";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import ProductSorter from "@/components/ProductGrid/ProductSorter";
import { filterQueryKeys, sortOptions } from "@/lib/constants";
import { buildQueryFromQueryParms } from "@/lib/filter";
import { getCollections } from "@/lib/shopify/operations/collection";
import {
  getProductCount,
  getProductTypes,
  getProducts,
} from "@/lib/shopify/operations/product";
import { getShopCurrency } from "@/lib/shopify/operations/shop";
import { SearchParams } from "@/types";

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const queryParamSort = searchParams["sort"];
  const validSortOption = sortOptions.find(
    (option) => option.urlValue === queryParamSort
  );

  const queryParamSearchTerm = searchParams["term"];

  const searchQuery = `title:${queryParamSearchTerm}*`;

  // object entries is in the format [key, value | values][]
  const activeFilters = Object.entries(searchParams).filter((param) =>
    filterQueryKeys.includes(param[0])
  );

  const query = buildQueryFromQueryParms(activeFilters) + " AND " + searchQuery;

  const productsData = getProducts({
    query: query,
    sortKey: validSortOption?.sortKey,
    reverse: validSortOption?.reverse,
  });
  const productCountsData = getProductCount();
  const shopCurrencyData = getShopCurrency();
  const productTypesData = getProductTypes();

  const [products, productCounts, productTypes, shopCurrency] =
    await Promise.all([
      productsData,
      productCountsData,
      productTypesData,
      shopCurrencyData,
    ]);

  return (
    <div className="">
      <Breadcrumbs
        title={
          queryParamSearchTerm
            ? `Search results for: ${queryParamSearchTerm}`
            : "Search"
        }
        items={[
          { title: "Home", href: "/" },
          { title: "Search", href: "/search" },
        ]}
      />

      {/* Content */}
      <main className="container relative mx-auto mb-12 flex">
        <ProductFilter
          currencySymbol={shopCurrency.symbol}
          activeFilters={activeFilters}
          productTypes={productTypes}
          className="max-md:hidden sticky top-0 mr-8 h-fit w-1/4 pt-4"
        />
        <div className="w-3/4 flex-1">
          <div className="flex flex-wrap gap-y-2 w-full items-center">
            <MobileProductFilter
              productFilterProps={{
                currencySymbol: shopCurrency.symbol,
                activeFilters: activeFilters,
                productTypes: productTypes,
              }}
            />
            <p className="max-md:hidden">
              Showing <span className="font-medium">{products.length}</span>{" "}
              results from a total of&nbsp;
              <span className="font-medium">{productCounts}</span>.
            </p>
            <ProductSorter className="ml-auto min-w-[200px] flex-shrink-0" />
          </div>

          <ActiveFilterChips
            currencySymbol={shopCurrency.symbol}
            className="pt-2"
            activeFilters={activeFilters}
          />
          <ProductGrid
            className="pt-4"
            products={products}
            imageSizes="(min-width: 1440px) 285px, (min-width: 1040px) calc(21.05vw - 14px), (min-width: 780px) calc(37.5vw - 50px), calc(50vw - 40px)"
          />
        </div>
      </main>
    </div>
  );
}
