import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { getProductCount, getProducts } from "@/lib/shopify/operations";

export default async function Products() {
  const productsData = getProducts({});
  const productCountsData = getProductCount();

  const [products, productCounts] = await Promise.all([
    productsData,
    productCountsData,
  ]);

  return (
    <div className="mt-4">
      {/* Content */}
      <main className="container relative mx-auto mb-12 flex">
        <div className="w-4/4">
          <div className="text-sm">
            <div className="flex w-full items-center">
              <p>
                Showing <span className="font-medium">{products.length}</span> results from a total of <span className="font-medium">{productCounts}</span>.
              </p>
            </div>
            <ProductGrid className="pt-4" products={products} />;
          </div>
        </div>
      </main>
    </div>
  );
}
