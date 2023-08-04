import Breadcrumbs from "@/components/Breadcrumbs";
import CollectionItems from "@/components/Collection/CollectionItems";
import ActiveFilterChips from "@/components/ProductGrid/ActiveFilterChips";
import MobileProductFilter from "@/components/ProductGrid/MobileProductFilter";
import ProductFilter from "@/components/ProductGrid/ProductFilter";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import ProductSorter from "@/components/ProductGrid/ProductSorter";
import { filterQueryKeys, sortOptions } from "@/lib/constants";
import { buildProductFilterFromQueryParms } from "@/lib/filter";
import {
  getCollectionProducts,
  getCollections,
} from "@/lib/shopify/operations/collection";
import { getProductTypes } from "@/lib/shopify/operations/product";
import { getShopCurrency } from "@/lib/shopify/operations/shop";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};
type Props = {
  params: { handle?: string[] };
  searchParams: SearchParams;
};

export default async function Collection({
  params: { handle },
  searchParams,
}: Props) {
  const queryParamSort = searchParams["sort"];
  const validSortOption = sortOptions.find(
    (option) => option.urlValue === queryParamSort
  );

  const collectionHandle = Array.isArray(handle) ? handle[0] : "all";

  // object entries is in the format [key, value | values][]
  const activeFilters = Object.entries(searchParams).filter((param) =>
    filterQueryKeys.includes(param[0])
  );

  const filters = buildProductFilterFromQueryParms(activeFilters);
  const productsData = getCollectionProducts({
    collection: collectionHandle,
    sortKey: validSortOption?.sortKey,
    reverse: validSortOption?.reverse,
    filters: filters,
  });

  const shopCurrencyData = getShopCurrency();
  const collectionsData = getCollections({});
  const productTypesData = getProductTypes();

  const [products, shopCurrency, collections, productTypes] = await Promise.all(
    [productsData, shopCurrencyData, collectionsData, productTypesData]
  );

  return (
    <main className="flex min-h-screen flex-col">
      <Breadcrumbs
        title="Collections"
        items={[
          { title: "Home", href: "/" },
          { title: "Shop", href: "/products" },
          { title: "Collections", href: "/collections" },
        ]}
      />
      <div className="container mx-auto">
        <div className="my-8 ml-8 max-sm:hidden">
          <CollectionItems
            activeHandle={collectionHandle}
            collections={collections}
          />
        </div>
        <main className="relative mb-12 flex">
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
                <span className="font-medium">
                  {
                    collections.find(
                      (collection) => collection.handle === collectionHandle
                    )?.productCount
                  }
                </span>
                .
              </p>
              <ProductSorter className="ml-auto min-w-[200px] flex-shrink-0" />
            </div>
            <ProductGrid className="pt-4" products={products} />
          </div>
          <ProductFilter
            currencySymbol={shopCurrency.symbol}
            activeFilters={activeFilters}
            productTypes={productTypes}
            className="max-md:hidden mt-12 top-0 sticky ml-8 h-fit w-1/4 pt-6"
          />
        </main>
      </div>
    </main>
  );
}
