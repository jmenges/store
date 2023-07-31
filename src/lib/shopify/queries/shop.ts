export const getShopCurrencyQuery = /* GraphQL */ `
  query getShopCurrency {
    shop {
      moneyFormat
      paymentSettings {
        currencyCode
      }
    }
  }
`;
