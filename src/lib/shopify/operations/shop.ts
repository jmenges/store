import { shopifyFetch } from "@/lib/shopify/api";
import { getShopCurrencyQuery } from "@/lib/shopify/queries/shop";
import { getCurrencySymbolFromCode } from "@/lib/shopify/utils";
import { GetShopCurrencyOperation } from "@/types/operations";
import { ShopCurrency } from "@/types/shopify";

/**
 * Related to shop
 */
export async function getShopCurrency(): Promise<ShopCurrency> {
  const res = await shopifyFetch<GetShopCurrencyOperation>({
    query: getShopCurrencyQuery,
  });
  const currencyCode = res.body.data.shop.paymentSettings.currencyCode;

  return {
    currencyCode,
    symbol: getCurrencySymbolFromCode(currencyCode),
  };
}
