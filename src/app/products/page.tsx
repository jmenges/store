import ProductFilter from "@/components/ProductGrid/ProductFilter";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { filterQueryKeys } from "@/lib/constants";
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
  // object entries is in the format [key, value | values][]
  const activeFilters = Object.entries(searchParams).filter((param) =>
    filterQueryKeys.includes(param[0])
  );

  const query = buildQueryFromQueryParms(activeFilters);

  const productsData = getProducts({
    query,
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
      {/* Content */}
      <main className="container relative mx-auto mb-12 flex">
        <ProductFilter
          currencySymbol={shopCurrency.symbol}
          activeFilters={activeFilters}
          productTypes={productTypes}
          collections={collections}
          className="sticky top-0 mr-8 h-fit w-1/4 pt-4"
        />
        <div className="w-3/4 flex-1">
          <div className="text-sm">
            <div className="flex w-full items-center">
              <p>
                Showing <span className="font-medium">{products.length}</span>{" "}
                results from a total of
                <span className="font-medium">{productCounts}</span>.
              </p>
            </div>
            <ProductGrid className="pt-4" products={products} />;
          </div>
        </div>
      </main>
    </div>
  );
}
