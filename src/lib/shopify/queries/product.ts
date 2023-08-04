import productFragment from "../fragments/product";

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;

export const getProductNodesQuery = /* GraphQL */ `
  query getProductsNodes {
    products(first: 250) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
    $first: Int = 100
  ) {
    products(
      sortKey: $sortKey
      reverse: $reverse
      query: $query
      first: $first
    ) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductsByIdsQuery = /* GraphQL */ `
  query getProductsByIds($ids: [ID!]!) {
    nodes(ids: $ids) {
      ...product
    }
  }
  ${productFragment}
`;

export const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${productFragment}
`;

export const getProductTypesQuery = /* GraphQL */ `
  query getProductTypes {
    productTypes(first: 100) {
      edges {
        node
      }
    }
  }
`;
