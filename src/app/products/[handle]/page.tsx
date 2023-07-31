import { notFound, redirect } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { headers } from "next/headers";

import Price from "@/components/Price";
import { SearchParams } from "@/types";
import ProductImages from "@/components/Product/ProductImages";
import ProductRating from "@/components/Product/ProductRating";
import ProductOptions from "@/components/Product/ProductOptions";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { ProductOption } from "@shopify/hydrogen-react/storefront-api-types";
import { ProductVariant } from "@/types/shopify";
import {
  getProduct,
  getProductRecommendations,
} from "@/lib/shopify/operations/product";
import Breadcrumbs from "@/components/Breadcrumbs";

type ValidSearchParams = {
  [key: string]: string;
};

type Props = {
  params: { handle: string };
  searchParams: SearchParams;
};

export default async function Product({
  params: { handle },
  searchParams,
}: Props) {
  const product = await getProduct(handle);
  if (!product) return notFound();

  const productRecommendations = await getProductRecommendations(product.id);

  /* Validate the searchParams by checking, if the option & value pairs
   * exist for the product */
  const validSearchParams = getValidSearchParams(searchParams, product.options);
  const paramOptions = convertValidSearchParamsToOptions(validSearchParams);

  /* Get the closest or exact variant based on the sanitised searchParams */
  /* POSSIBLE IMPROVEMENT:
  /* how a toast message, if user directly navigates to a variant, that is not available */
  const activeVariant = getFirstAvailableVariantByOptions(
    paramOptions,
    product.variants
  );
  if (!activeVariant) throw new Error("No active variant");

  /* Update url query, if required */
  if (
    !areOptionsEqual(paramOptions, activeVariant.selectedOptions) ||
    Object.keys(validSearchParams).length !== Object.keys(searchParams).length
  ) {
    //get current url
    const headersList = headers();
    const headerUrl = headersList.get("x-url") || "";
    const urlWithoutQuery = headerUrl.split("?")[0];
    const query = buildQueryByOptions(activeVariant.selectedOptions);

    redirect(urlWithoutQuery + query);
  }

  return (
    <div className="">
      <Breadcrumbs
        title="Products"
        items={[
          { title: "Home", href: "/" },
          { title: "Shop", href: "/products" },
          {
            title: product.productType,
            href: `/products/?category=${product.productType}`,
          },
        ]}
      />

      <main className="container mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <ProductImages className="md:w-3/5" images={product.images} />
          <div className="md:w-2/5 p-4">
            <h1 className="mb-2 text-3xl font-bold">{product.title}</h1>
            <ProductRating className="mb-2" rating={4} />
            <Price
              className="mb-4 text-4xl font-bold"
              amount={activeVariant.price.amount}
              currencyCode={activeVariant.price.currencyCode}
            />
            <div
              className="mt-4 text-gray-500"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <Separator className="my-6" />
            {product.options.length > 0 && (
              <ProductOptions
                searchParams={validSearchParams}
                activeVariant={activeVariant}
                variants={product.variants}
                options={product.options}
              />
            )}
            <Separator className="my-6" />
          </div>
        </div>
        {/* Product Information */}
        <Tabs defaultValue="description" className="mb-8 mt-24 w-full">
          <TabsList className="space-x-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="additional-information">
              Additional Information
            </TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="whitespace-pre-wrap">
            {
              product.metafields?.find(
                (metafield) => metafield?.key === "long_description"
              )?.value
            }
          </TabsContent>
          <TabsContent
            value="additional-information"
            className="whitespace-pre-wrap"
          >
            {
              product.metafields?.find(
                (metafield) => metafield?.key === "additional_information"
              )?.value
            }
          </TabsContent>
          <TabsContent value="reviews">Change your password here.</TabsContent>
        </Tabs>
        {/* Related Products */}
        <div>
          <h3 className="mb-8 mt-24 text-2xl font-semibold">
            Related Products
          </h3>
          <ProductGrid
            className="md:grid-cols-4 lg:grid-cols-4"
            products={productRecommendations.slice(0, 4)}
          />
        </div>
      </main>
    </div>
  );
}

type Option = {
  name: string;
  value: string;
};

const containsExactOption = (
  searchOption: Option,
  options: Option[]
): boolean => {
  const matchedOption = options.find(
    (option) => option.name === searchOption.name
  );
  if (matchedOption?.value !== searchOption.value) {
    return false;
  }
  return true;
};

const areOptionsEqual = (
  firstOptions: Option[],
  secondOptions: Option[]
): boolean => {
  if (firstOptions.length !== secondOptions.length) return false;

  // sort both arrays asc by name
  firstOptions.sort((a, b) => (a.name > b.name ? 1 : -1));
  secondOptions.sort((a, b) => (a.name > b.name ? 1 : -1));

  // compare the arrays
  return firstOptions.every((firstOption, index) => {
    const secondOption = secondOptions[index];
    if (
      firstOption.name !== secondOption.name ||
      firstOption.value !== secondOption.value
    )
      return false;
    return true;
  });
};

const getValidSearchParams = (
  searchParams: SearchParams,
  productOptions: ProductOption[]
): ValidSearchParams => {
  let validSearchParams: { [key: string]: string } = {};
  const searchParamKeys = Object.keys(searchParams);
  if (searchParamKeys.length > 0) {
    productOptions.forEach((option) => {
      const paramOptionValue = String(searchParams[option.name]);
      if (
        paramOptionValue !== undefined &&
        option.values.includes(paramOptionValue)
      ) {
        // valid option, copy to validSearchParams
        validSearchParams[option.name] = paramOptionValue;
      }
    });
  }
  return validSearchParams;
};

const convertValidSearchParamsToOptions = (
  searchParams: ValidSearchParams
): Option[] => {
  let options: Option[] = [];
  Object.keys(searchParams).forEach((optionName) => {
    options.push({
      name: optionName,
      value: searchParams[optionName] || "",
    });
  });
  return options;
};

/* returns the first available variant by searching for the closest options */
const getFirstAvailableVariantByOptions = (
  options: Option[],
  variants: ProductVariant[]
): ProductVariant | undefined => {
  const availableVariants = variants.filter(
    (variant) => variant.availableForSale === true
  );
  // no variants available
  if (availableVariants.length === 0) return undefined;

  // no options provided, use first availbe one
  if (options.length === 0) return availableVariants[0];

  // search for closest variant
  const firstMatchedVariant = availableVariants.find((variant) => {
    // we find all variants, which contain at the minimum the exact options provided
    const variantMatchesOptions = options.every((option) => {
      if (!containsExactOption(option, variant.selectedOptions)) {
        // option not part of the selectedOptions for the variant
        return false;
      }
      return true;
    });
    if (variantMatchesOptions === true) {
      return variant;
    }
    return null;
  });
  return firstMatchedVariant;
};

const buildQueryByOptions = (options: Option[]): string => {
  let queryOptions: string[] = [];
  options.forEach((option) => {
    queryOptions.push(option.name + "=" + option.value);
  });
  return "?" + queryOptions.join("&");
};
