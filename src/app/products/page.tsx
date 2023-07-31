import Breadcrumbs from "@/components/Breadcrumbs";
import ActiveFilterChips from "@/components/ProductGrid/ActiveFilterChips";
import MobileProductFilter from "@/components/ProductGrid/MobileProductFilter";
import ProductFilter from "@/components/ProductGrid/ProductFilter";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import ProductSorter from "@/components/ProductGrid/ProductSorter";
import { filterQueryKeys, sortOptions } from "@/lib/constants";
import { buildQueryFromQueryParms } from "@/lib/filter";
import {
  getCollections,
  getProductCount,
  getProductTypes,
  getProducts,
  getShopCurrency,
} from "@/lib/shopify/operations";
import { SearchParams } from "@/types";

export default async function Products({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const queryParamSort = searchParams["sort"];
  const validSortOption = sortOptions.find(
    (option) => option.urlValue === queryParamSort
  );

  // object entries is in the format [key, value | values][]
  const activeFilters = Object.entries(searchParams).filter((param) =>
    filterQueryKeys.includes(param[0])
  );

  const query = buildQueryFromQueryParms(activeFilters);

  const productsData = getProducts({
    query,
    sortKey: validSortOption?.sortKey,
    reverse: validSortOption?.reverse,
  });

  const productCountsData = getProductCount();

  const shopCurrencyData = getShopCurrency();
  const collectionsData = getCollections();
  const productTypesData = getProductTypes();

  const [products, productCounts, productTypes, collections, shopCurrency] =
    await Promise.all([
      productsData,
      productCountsData,
      productTypesData,
      collectionsData,
      shopCurrencyData,
    ]);

  return (
    <div className="mt-4">
      <Breadcrumbs
        title="Products"
        items={[
          { title: "Home", href: "/" },
          { title: "Shop", href: "/products" },
        ]}
      />
      
      {/* Content */}
      <main className="container relative mx-auto mb-12 flex">
        <ProductFilter
          currencySymbol={shopCurrency.symbol}
          activeFilters={activeFilters}
          productTypes={productTypes}
          collections={collections}
          className="max-md:hidden sticky top-0 mr-8 h-fit w-1/4 pt-4"
        />
        <div className="w-3/4 flex-1">
          <div className="flex flex-wrap gap-y-2 w-full items-center">
            <MobileProductFilter
              productFilterProps={{
                currencySymbol: shopCurrency.symbol,
                activeFilters: activeFilters,
                productTypes: productTypes,
                collections: collections,
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
          <ProductGrid className="pt-4" products={products} />
        </div>
      </main>
    </div>
  );
}
