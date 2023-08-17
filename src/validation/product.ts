import { Schema } from "@exodus/schemasafe";

export const ProductSchema: Schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  allOf: [
    {
      $ref: '#/definitions/Omit<ShopifyProduct,"variants"|"images">',
    },
    {
      properties: {
        images: {
          items: {
            $ref: "#/definitions/Image_1",
          },
          type: "array",
        },
        variants: {
          items: {
            $ref: "#/definitions/ProductVariant_1",
          },
          type: "array",
        },
      },
      type: "object",
    },
  ],
  definitions: {
    AppliedGiftCard: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "AppliedGiftCard",
              type: "string",
            },
            amountUsed: {
              description:
                "The amount that was taken from the gift card by applying it.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            amountUsedV2: {
              description:
                "The amount that was taken from the gift card by applying it.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            balance: {
              description: "The amount left on the gift card.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            balanceV2: {
              description: "The amount left on the gift card.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            lastCharacters: {
              description: "The last characters of the gift card.",
              type: "string",
            },
            presentmentAmountUsed: {
              description:
                "The amount that was applied to the checkout in its currency.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
      ],
      description: "Details about the gift card used on the checkout.",
    },
    Article: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          description:
            "Represents a resource that can be published to the Online Store sales channel.",
          properties: {
            onlineStoreUrl: {
              description:
                "The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          description:
            "Represents a resource that you can track the origin of the search traffic.",
          properties: {
            trackingParameters: {
              description:
                "A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Article",
              type: "string",
            },
            author: {
              description: "The article's author.",
              properties: {
                __typename: {
                  const: "ArticleAuthor",
                  type: "string",
                },
                bio: {
                  description: "The author's bio.",
                  type: "string",
                },
                email: {
                  description: "The author’s email.",
                  type: "string",
                },
                firstName: {
                  description: "The author's first name.",
                  type: "string",
                },
                lastName: {
                  description: "The author's last name.",
                  type: "string",
                },
                name: {
                  description: "The author's full name.",
                  type: "string",
                },
              },
              type: "object",
            },
            authorV2: {
              description: "The article's author.",
              properties: {
                __typename: {
                  const: "ArticleAuthor",
                  type: "string",
                },
                bio: {
                  description: "The author's bio.",
                  type: "string",
                },
                email: {
                  description: "The author’s email.",
                  type: "string",
                },
                firstName: {
                  description: "The author's first name.",
                  type: "string",
                },
                lastName: {
                  description: "The author's last name.",
                  type: "string",
                },
                name: {
                  description: "The author's full name.",
                  type: "string",
                },
              },
              type: "object",
            },
            blog: {
              $ref: "#/definitions/Blog",
              description: "The blog that the article belongs to.",
            },
            comments: {
              description: "List of comments posted on the article.",
              properties: {
                __typename: {
                  const: "CommentConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one Comment and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "CommentEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        $ref: "#/definitions/Comment",
                        description: "The item at the end of CommentEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description: "A list of the nodes contained in CommentEdge.",
                  items: {
                    $ref: "#/definitions/Comment",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            content: {
              description:
                "Stripped content of the article, single line with HTML tags removed.",
              type: "string",
            },
            contentHtml: {
              description:
                "The content of the article, complete with HTML formatting.",
              type: "string",
            },
            excerpt: {
              description:
                "Stripped excerpt of the article, single line with HTML tags removed.",
              type: "string",
            },
            excerptHtml: {
              description:
                "The excerpt of the article, complete with HTML formatting.",
              type: "string",
            },
            handle: {
              description:
                "A human-friendly unique string for the Article automatically generated from its title.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            image: {
              description: "The image associated with the article.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            onlineStoreUrl: {
              description:
                "The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.",
              type: "string",
            },
            publishedAt: {
              description: "The date and time when the article was published.",
              type: "string",
            },
            seo: {
              description: "The article’s SEO information.",
              properties: {
                __typename: {
                  const: "SEO",
                  type: "string",
                },
                description: {
                  description: "The meta description.",
                  type: "string",
                },
                title: {
                  description: "The SEO title.",
                  type: "string",
                },
              },
              type: "object",
            },
            tags: {
              description:
                "A categorization that a article can be tagged with.",
              items: {
                type: "string",
              },
              type: "array",
            },
            title: {
              description: "The article’s name.",
              type: "string",
            },
            trackingParameters: {
              description:
                "A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description: "An article in an online store blog.",
    },
    AutomaticDiscountApplication: {
      allOf: [
        {
          description:
            "Discount applications capture the intentions of a discount source at\nthe time of application.",
          properties: {
            allocationMethod: {
              $ref: "#/definitions/DiscountApplicationAllocationMethod",
              description:
                "The method by which the discount's value is allocated to its entitled items.",
            },
            targetSelection: {
              $ref: "#/definitions/DiscountApplicationTargetSelection",
              description:
                "Which lines of targetType that the discount is allocated over.",
            },
            targetType: {
              $ref: "#/definitions/DiscountApplicationTargetType",
              description:
                "The type of line that the discount is applicable towards.",
            },
            value: {
              $ref: "#/definitions/PricingValue",
              description: "The value of the discount application.",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "AutomaticDiscountApplication",
              type: "string",
            },
            allocationMethod: {
              $ref: "#/definitions/DiscountApplicationAllocationMethod",
              description:
                "The method by which the discount's value is allocated to its entitled items.",
            },
            targetSelection: {
              $ref: "#/definitions/DiscountApplicationTargetSelection",
              description:
                "Which lines of targetType that the discount is allocated over.",
            },
            targetType: {
              $ref: "#/definitions/DiscountApplicationTargetType",
              description:
                "The type of line that the discount is applicable towards.",
            },
            title: {
              description: "The title of the application.",
              type: "string",
            },
            value: {
              $ref: "#/definitions/PricingValue",
              description: "The value of the discount application.",
            },
          },
          type: "object",
        },
      ],
      description:
        "Automatic discount applications capture the intentions of a discount that was automatically applied.",
    },
    Blog: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          description:
            "Represents a resource that can be published to the Online Store sales channel.",
          properties: {
            onlineStoreUrl: {
              description:
                "The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Blog",
              type: "string",
            },
            articleByHandle: {
              $ref: "#/definitions/Article",
              description: "Find an article by its handle.",
            },
            articles: {
              description: "List of the blog's articles.",
              properties: {
                __typename: {
                  const: "ArticleConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one Article and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "ArticleEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        $ref: "#/definitions/Article",
                        description: "The item at the end of ArticleEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description: "A list of the nodes contained in ArticleEdge.",
                  items: {
                    $ref: "#/definitions/Article",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            authors: {
              description: "The authors who have contributed to the blog.",
              items: {
                description: "The author of an article.",
                properties: {
                  __typename: {
                    const: "ArticleAuthor",
                    type: "string",
                  },
                  bio: {
                    description: "The author's bio.",
                    type: "string",
                  },
                  email: {
                    description: "The author’s email.",
                    type: "string",
                  },
                  firstName: {
                    description: "The author's first name.",
                    type: "string",
                  },
                  lastName: {
                    description: "The author's last name.",
                    type: "string",
                  },
                  name: {
                    description: "The author's full name.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            handle: {
              description:
                "A human-friendly unique string for the Blog automatically generated from its title.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            onlineStoreUrl: {
              description:
                "The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.",
              type: "string",
            },
            seo: {
              description: "The blog's SEO information.",
              properties: {
                __typename: {
                  const: "SEO",
                  type: "string",
                },
                description: {
                  description: "The meta description.",
                  type: "string",
                },
                title: {
                  description: "The SEO title.",
                  type: "string",
                },
              },
              type: "object",
            },
            title: {
              description: "The blogs’s title.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description: "An online store blog.",
    },
    CardBrand: {
      description:
        "Card brand, such as Visa or Mastercard, which can be used for payments.",
      enum: [
        "AMERICAN_EXPRESS",
        "DINERS_CLUB",
        "DISCOVER",
        "JCB",
        "MASTERCARD",
        "VISA",
      ],
      type: "string",
    },
    Cart: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Cart",
              type: "string",
            },
            attribute: {
              description: "An attribute associated with the cart.",
              properties: {
                __typename: {
                  const: "Attribute",
                  type: "string",
                },
                key: {
                  description: "Key or name of the attribute.",
                  type: "string",
                },
                value: {
                  description: "Value of the attribute.",
                  type: "string",
                },
              },
              type: "object",
            },
            attributes: {
              description:
                "The attributes associated with the cart. Attributes are represented as key-value pairs.",
              items: {
                description: "Represents a generic custom attribute.",
                properties: {
                  __typename: {
                    const: "Attribute",
                    type: "string",
                  },
                  key: {
                    description: "Key or name of the attribute.",
                    type: "string",
                  },
                  value: {
                    description: "Value of the attribute.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            buyerIdentity: {
              description:
                "Information about the buyer that is interacting with the cart.",
              properties: {
                __typename: {
                  const: "CartBuyerIdentity",
                  type: "string",
                },
                countryCode: {
                  $ref: "#/definitions/Maybe_2",
                  description: "The country where the buyer is located.",
                },
                customer: {
                  $ref: "#/definitions/Customer",
                  description: "The customer account associated with the cart.",
                },
                deliveryAddressPreferences: {
                  description:
                    "An ordered set of delivery addresses tied to the buyer that is interacting with the cart.\nThe rank of the preferences is determined by the order of the addresses in the array. Preferences\ncan be used to populate relevant fields in the checkout flow.",
                  items: {
                    $ref: "#/definitions/MailingAddress",
                  },
                  type: "array",
                },
                email: {
                  description:
                    "The email address of the buyer that is interacting with the cart.",
                  type: "string",
                },
                phone: {
                  description:
                    "The phone number of the buyer that is interacting with the cart.",
                  type: "string",
                },
                walletPreferences: {
                  description:
                    "A set of wallet preferences tied to the buyer that is interacting with the cart.\nPreferences can be used to populate relevant payment fields in the checkout flow.",
                  items: {
                    type: "string",
                  },
                  type: "array",
                },
              },
              type: "object",
            },
            checkoutUrl: {
              description: "The URL of the checkout for the cart.",
              type: "string",
            },
            cost: {
              description:
                "The estimated costs that the buyer will pay at checkout. The costs are subject to change and changes will be reflected at checkout. The `cost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).",
              properties: {
                __typename: {
                  const: "CartCost",
                  type: "string",
                },
                checkoutChargeAmount: {
                  description:
                    "The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to `subtotalAmount`.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmount: {
                  description:
                    "The amount, before taxes and cart-level discounts, for the customer to pay.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmountEstimated: {
                  description: "Whether the subtotal amount is estimated.",
                  type: "boolean",
                },
                totalAmount: {
                  description: "The total amount for the customer to pay.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalAmountEstimated: {
                  description: "Whether the total amount is estimated.",
                  type: "boolean",
                },
                totalDutyAmount: {
                  description:
                    "The duty amount for the customer to pay at checkout.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalDutyAmountEstimated: {
                  description: "Whether the total duty amount is estimated.",
                  type: "boolean",
                },
                totalTaxAmount: {
                  description:
                    "The tax amount for the customer to pay at checkout.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalTaxAmountEstimated: {
                  description: "Whether the total tax amount is estimated.",
                  type: "boolean",
                },
              },
              type: "object",
            },
            createdAt: {
              description: "The date and time when the cart was created.",
              type: "string",
            },
            deliveryGroups: {
              description:
                "The delivery groups available for the cart, based on the buyer identity default\ndelivery address preference or the default address of the logged-in customer.",
              properties: {
                __typename: {
                  const: "CartDeliveryGroupConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "CartDeliveryGroupEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        description:
                          "The item at the end of CartDeliveryGroupEdge.",
                        properties: {
                          __typename: {
                            const: "CartDeliveryGroup",
                            type: "string",
                          },
                          cartLines: {
                            description:
                              "A list of cart lines for the delivery group.",
                            properties: {
                              __typename: {
                                const: "BaseCartLineConnection",
                                type: "string",
                              },
                              edges: {
                                description: "A list of edges.",
                                items: {
                                  description:
                                    "An auto-generated type which holds one BaseCartLine and a cursor during pagination.",
                                  properties: {
                                    __typename: {
                                      const: "BaseCartLineEdge",
                                      type: "string",
                                    },
                                    cursor: {
                                      description:
                                        "A cursor for use in pagination.",
                                      type: "string",
                                    },
                                    node: {
                                      anyOf: [
                                        {
                                          $ref: "#/definitions/CartLine",
                                          description:
                                            "Represents information about the merchandise in the cart.",
                                        },
                                        {
                                          $ref: "#/definitions/ComponentizableCartLine",
                                          description:
                                            "Represents information about the grouped merchandise in the cart.",
                                        },
                                      ],
                                      description:
                                        "The item at the end of BaseCartLineEdge.",
                                    },
                                  },
                                  type: "object",
                                },
                                type: "array",
                              },
                              nodes: {
                                description:
                                  "A list of the nodes contained in BaseCartLineEdge.",
                                items: {
                                  anyOf: [
                                    {
                                      $ref: "#/definitions/CartLine",
                                      description:
                                        "Represents information about the merchandise in the cart.",
                                    },
                                    {
                                      $ref: "#/definitions/ComponentizableCartLine",
                                      description:
                                        "Represents information about the grouped merchandise in the cart.",
                                    },
                                  ],
                                },
                                type: "array",
                              },
                              pageInfo: {
                                description:
                                  "Information to aid in pagination.",
                                properties: {
                                  __typename: {
                                    const: "PageInfo",
                                    type: "string",
                                  },
                                  endCursor: {
                                    description:
                                      "The cursor corresponding to the last node in edges.",
                                    type: "string",
                                  },
                                  hasNextPage: {
                                    description:
                                      "Whether there are more pages to fetch following the current page.",
                                    type: "boolean",
                                  },
                                  hasPreviousPage: {
                                    description:
                                      "Whether there are any pages prior to the current page.",
                                    type: "boolean",
                                  },
                                  startCursor: {
                                    description:
                                      "The cursor corresponding to the first node in edges.",
                                    type: "string",
                                  },
                                },
                                type: "object",
                              },
                            },
                            type: "object",
                          },
                          deliveryAddress: {
                            $ref: "#/definitions/MailingAddress",
                            description:
                              "The destination address for the delivery group.",
                          },
                          deliveryOptions: {
                            description:
                              "The delivery options available for the delivery group.",
                            items: {
                              description:
                                "Information about a delivery option.",
                              properties: {
                                __typename: {
                                  const: "CartDeliveryOption",
                                  type: "string",
                                },
                                code: {
                                  description:
                                    "The code of the delivery option.",
                                  type: "string",
                                },
                                deliveryMethodType: {
                                  $ref: "#/definitions/DeliveryMethodType",
                                  description:
                                    "The method for the delivery option.",
                                },
                                description: {
                                  description:
                                    "The description of the delivery option.",
                                  type: "string",
                                },
                                estimatedCost: {
                                  description:
                                    "The estimated cost for the delivery option.",
                                  properties: {
                                    __typename: {
                                      const: "MoneyV2",
                                      type: "string",
                                    },
                                    amount: {
                                      description: "Decimal money amount.",
                                      type: "string",
                                    },
                                    currencyCode: {
                                      $ref: "#/definitions/CurrencyCode",
                                      description: "Currency of the money.",
                                    },
                                  },
                                  type: "object",
                                },
                                handle: {
                                  description:
                                    "The unique identifier of the delivery option.",
                                  type: "string",
                                },
                                title: {
                                  description:
                                    "The title of the delivery option.",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            type: "array",
                          },
                          id: {
                            description: "The ID for the delivery group.",
                            type: "string",
                          },
                          selectedDeliveryOption: {
                            description:
                              "The selected delivery option for the delivery group.",
                            properties: {
                              __typename: {
                                const: "CartDeliveryOption",
                                type: "string",
                              },
                              code: {
                                description: "The code of the delivery option.",
                                type: "string",
                              },
                              deliveryMethodType: {
                                $ref: "#/definitions/DeliveryMethodType",
                                description:
                                  "The method for the delivery option.",
                              },
                              description: {
                                description:
                                  "The description of the delivery option.",
                                type: "string",
                              },
                              estimatedCost: {
                                description:
                                  "The estimated cost for the delivery option.",
                                properties: {
                                  __typename: {
                                    const: "MoneyV2",
                                    type: "string",
                                  },
                                  amount: {
                                    description: "Decimal money amount.",
                                    type: "string",
                                  },
                                  currencyCode: {
                                    $ref: "#/definitions/CurrencyCode",
                                    description: "Currency of the money.",
                                  },
                                },
                                type: "object",
                              },
                              handle: {
                                description:
                                  "The unique identifier of the delivery option.",
                                type: "string",
                              },
                              title: {
                                description:
                                  "The title of the delivery option.",
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in CartDeliveryGroupEdge.",
                  items: {
                    description:
                      "Information about the options available for one or more line items to be delivered to a specific address.",
                    properties: {
                      __typename: {
                        const: "CartDeliveryGroup",
                        type: "string",
                      },
                      cartLines: {
                        description:
                          "A list of cart lines for the delivery group.",
                        properties: {
                          __typename: {
                            const: "BaseCartLineConnection",
                            type: "string",
                          },
                          edges: {
                            description: "A list of edges.",
                            items: {
                              description:
                                "An auto-generated type which holds one BaseCartLine and a cursor during pagination.",
                              properties: {
                                __typename: {
                                  const: "BaseCartLineEdge",
                                  type: "string",
                                },
                                cursor: {
                                  description:
                                    "A cursor for use in pagination.",
                                  type: "string",
                                },
                                node: {
                                  anyOf: [
                                    {
                                      $ref: "#/definitions/CartLine",
                                      description:
                                        "Represents information about the merchandise in the cart.",
                                    },
                                    {
                                      $ref: "#/definitions/ComponentizableCartLine",
                                      description:
                                        "Represents information about the grouped merchandise in the cart.",
                                    },
                                  ],
                                  description:
                                    "The item at the end of BaseCartLineEdge.",
                                },
                              },
                              type: "object",
                            },
                            type: "array",
                          },
                          nodes: {
                            description:
                              "A list of the nodes contained in BaseCartLineEdge.",
                            items: {
                              anyOf: [
                                {
                                  $ref: "#/definitions/CartLine",
                                  description:
                                    "Represents information about the merchandise in the cart.",
                                },
                                {
                                  $ref: "#/definitions/ComponentizableCartLine",
                                  description:
                                    "Represents information about the grouped merchandise in the cart.",
                                },
                              ],
                            },
                            type: "array",
                          },
                          pageInfo: {
                            description: "Information to aid in pagination.",
                            properties: {
                              __typename: {
                                const: "PageInfo",
                                type: "string",
                              },
                              endCursor: {
                                description:
                                  "The cursor corresponding to the last node in edges.",
                                type: "string",
                              },
                              hasNextPage: {
                                description:
                                  "Whether there are more pages to fetch following the current page.",
                                type: "boolean",
                              },
                              hasPreviousPage: {
                                description:
                                  "Whether there are any pages prior to the current page.",
                                type: "boolean",
                              },
                              startCursor: {
                                description:
                                  "The cursor corresponding to the first node in edges.",
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                        },
                        type: "object",
                      },
                      deliveryAddress: {
                        $ref: "#/definitions/MailingAddress",
                        description:
                          "The destination address for the delivery group.",
                      },
                      deliveryOptions: {
                        description:
                          "The delivery options available for the delivery group.",
                        items: {
                          description: "Information about a delivery option.",
                          properties: {
                            __typename: {
                              const: "CartDeliveryOption",
                              type: "string",
                            },
                            code: {
                              description: "The code of the delivery option.",
                              type: "string",
                            },
                            deliveryMethodType: {
                              $ref: "#/definitions/DeliveryMethodType",
                              description:
                                "The method for the delivery option.",
                            },
                            description: {
                              description:
                                "The description of the delivery option.",
                              type: "string",
                            },
                            estimatedCost: {
                              description:
                                "The estimated cost for the delivery option.",
                              properties: {
                                __typename: {
                                  const: "MoneyV2",
                                  type: "string",
                                },
                                amount: {
                                  description: "Decimal money amount.",
                                  type: "string",
                                },
                                currencyCode: {
                                  $ref: "#/definitions/CurrencyCode",
                                  description: "Currency of the money.",
                                },
                              },
                              type: "object",
                            },
                            handle: {
                              description:
                                "The unique identifier of the delivery option.",
                              type: "string",
                            },
                            title: {
                              description: "The title of the delivery option.",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        type: "array",
                      },
                      id: {
                        description: "The ID for the delivery group.",
                        type: "string",
                      },
                      selectedDeliveryOption: {
                        description:
                          "The selected delivery option for the delivery group.",
                        properties: {
                          __typename: {
                            const: "CartDeliveryOption",
                            type: "string",
                          },
                          code: {
                            description: "The code of the delivery option.",
                            type: "string",
                          },
                          deliveryMethodType: {
                            $ref: "#/definitions/DeliveryMethodType",
                            description: "The method for the delivery option.",
                          },
                          description: {
                            description:
                              "The description of the delivery option.",
                            type: "string",
                          },
                          estimatedCost: {
                            description:
                              "The estimated cost for the delivery option.",
                            properties: {
                              __typename: {
                                const: "MoneyV2",
                                type: "string",
                              },
                              amount: {
                                description: "Decimal money amount.",
                                type: "string",
                              },
                              currencyCode: {
                                $ref: "#/definitions/CurrencyCode",
                                description: "Currency of the money.",
                              },
                            },
                            type: "object",
                          },
                          handle: {
                            description:
                              "The unique identifier of the delivery option.",
                            type: "string",
                          },
                          title: {
                            description: "The title of the delivery option.",
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            discountAllocations: {
              description:
                "The discounts that have been applied to the entire cart.",
              items: {
                anyOf: [
                  {
                    $ref: "#/definitions/CartAutomaticDiscountAllocation",
                    description:
                      "The discounts automatically applied to the cart line based on prerequisites that have been met.",
                  },
                  {
                    $ref: "#/definitions/CartCodeDiscountAllocation",
                    description:
                      "The discount that has been applied to the cart line using a discount code.",
                  },
                  {
                    $ref: "#/definitions/CartCustomDiscountAllocation",
                    description:
                      "The discounts automatically applied to the cart line based on prerequisites that have been met.",
                  },
                ],
              },
              type: "array",
            },
            discountCodes: {
              description:
                "The case-insensitive discount codes that the customer added at checkout.",
              items: {
                description: "The discount codes applied to the cart.",
                properties: {
                  __typename: {
                    const: "CartDiscountCode",
                    type: "string",
                  },
                  applicable: {
                    description:
                      "Whether the discount code is applicable to the cart's current contents.",
                    type: "boolean",
                  },
                  code: {
                    description: "The code for the discount.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            estimatedCost: {
              description:
                "The estimated costs that the buyer will pay at checkout.\nThe estimated costs are subject to change and changes will be reflected at checkout.\nThe `estimatedCost` field uses the `buyerIdentity` field to determine\n[international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).",
              properties: {
                __typename: {
                  const: "CartEstimatedCost",
                  type: "string",
                },
                checkoutChargeAmount: {
                  description:
                    "The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to`subtotal_amount`.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmount: {
                  description:
                    "The estimated amount, before taxes and discounts, for the customer to pay.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalAmount: {
                  description:
                    "The estimated total amount for the customer to pay.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalDutyAmount: {
                  description:
                    "The estimated duty amount for the customer to pay at checkout.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalTaxAmount: {
                  description:
                    "The estimated tax amount for the customer to pay at checkout.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            lines: {
              description:
                "A list of lines containing information about the items the customer intends to purchase.",
              properties: {
                __typename: {
                  const: "BaseCartLineConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one BaseCartLine and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "BaseCartLineEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        anyOf: [
                          {
                            $ref: "#/definitions/CartLine",
                            description:
                              "Represents information about the merchandise in the cart.",
                          },
                          {
                            $ref: "#/definitions/ComponentizableCartLine",
                            description:
                              "Represents information about the grouped merchandise in the cart.",
                          },
                        ],
                        description: "The item at the end of BaseCartLineEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in BaseCartLineEdge.",
                  items: {
                    anyOf: [
                      {
                        $ref: "#/definitions/CartLine",
                        description:
                          "Represents information about the merchandise in the cart.",
                      },
                      {
                        $ref: "#/definitions/ComponentizableCartLine",
                        description:
                          "Represents information about the grouped merchandise in the cart.",
                      },
                    ],
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            note: {
              description:
                "A note that is associated with the cart. For example, the note can be a personalized message to the buyer.",
              type: "string",
            },
            totalQuantity: {
              description: "The total number of items in the cart.",
              type: "number",
            },
            updatedAt: {
              description: "The date and time when the cart was updated.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "A cart represents the merchandise that a buyer intends to purchase,\nand the estimated cost associated with the cart. Learn how to\n[interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)\nduring a customer's session.",
    },
    CartAutomaticDiscountAllocation: {
      allOf: [
        {
          description: "The discounts that have been applied to the cart line.",
          properties: {
            discountedAmount: {
              description:
                "The discounted amount that has been applied to the cart line.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "CartAutomaticDiscountAllocation",
              type: "string",
            },
            discountedAmount: {
              description:
                "The discounted amount that has been applied to the cart line.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            title: {
              description: "The title of the allocated discount.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "The discounts automatically applied to the cart line based on prerequisites that have been met.",
    },
    CartCodeDiscountAllocation: {
      allOf: [
        {
          description: "The discounts that have been applied to the cart line.",
          properties: {
            discountedAmount: {
              description:
                "The discounted amount that has been applied to the cart line.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "CartCodeDiscountAllocation",
              type: "string",
            },
            code: {
              description: "The code used to apply the discount.",
              type: "string",
            },
            discountedAmount: {
              description:
                "The discounted amount that has been applied to the cart line.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
      ],
      description:
        "The discount that has been applied to the cart line using a discount code.",
    },
    CartCustomDiscountAllocation: {
      allOf: [
        {
          description: "The discounts that have been applied to the cart line.",
          properties: {
            discountedAmount: {
              description:
                "The discounted amount that has been applied to the cart line.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "CartCustomDiscountAllocation",
              type: "string",
            },
            discountedAmount: {
              description:
                "The discounted amount that has been applied to the cart line.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            title: {
              description: "The title of the allocated discount.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "The discounts automatically applied to the cart line based on prerequisites that have been met.",
    },
    CartLine: {
      allOf: [
        {
          description: "Represents a cart line common fields.",
          properties: {
            attribute: {
              description: "An attribute associated with the cart line.",
              properties: {
                __typename: {
                  const: "Attribute",
                  type: "string",
                },
                key: {
                  description: "Key or name of the attribute.",
                  type: "string",
                },
                value: {
                  description: "Value of the attribute.",
                  type: "string",
                },
              },
              type: "object",
            },
            attributes: {
              description:
                "The attributes associated with the cart line. Attributes are represented as key-value pairs.",
              items: {
                description: "Represents a generic custom attribute.",
                properties: {
                  __typename: {
                    const: "Attribute",
                    type: "string",
                  },
                  key: {
                    description: "Key or name of the attribute.",
                    type: "string",
                  },
                  value: {
                    description: "Value of the attribute.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            cost: {
              description:
                "The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout.",
              properties: {
                __typename: {
                  const: "CartLineCost",
                  type: "string",
                },
                amountPerQuantity: {
                  description: "The amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                compareAtAmountPerQuantity: {
                  description: "The compare at amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmount: {
                  description:
                    "The cost of the merchandise line before line-level discounts.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalAmount: {
                  description: "The total cost of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            discountAllocations: {
              description:
                "The discounts that have been applied to the cart line.",
              items: {
                anyOf: [
                  {
                    $ref: "#/definitions/CartAutomaticDiscountAllocation",
                    description:
                      "The discounts automatically applied to the cart line based on prerequisites that have been met.",
                  },
                  {
                    $ref: "#/definitions/CartCodeDiscountAllocation",
                    description:
                      "The discount that has been applied to the cart line using a discount code.",
                  },
                  {
                    $ref: "#/definitions/CartCustomDiscountAllocation",
                    description:
                      "The discounts automatically applied to the cart line based on prerequisites that have been met.",
                  },
                ],
              },
              type: "array",
            },
            estimatedCost: {
              description:
                "The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.",
              properties: {
                __typename: {
                  const: "CartLineEstimatedCost",
                  type: "string",
                },
                amount: {
                  description: "The amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                compareAtAmount: {
                  description: "The compare at amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmount: {
                  description:
                    "The estimated cost of the merchandise line before discounts.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalAmount: {
                  description:
                    "The estimated total cost of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            merchandise: {
              $ref: "#/definitions/ProductVariant",
              description:
                "The merchandise that the buyer intends to purchase.",
            },
            quantity: {
              description:
                "The quantity of the merchandise that the customer intends to purchase.",
              type: "number",
            },
            sellingPlanAllocation: {
              description:
                "The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased.",
              properties: {
                __typename: {
                  const: "SellingPlanAllocation",
                  type: "string",
                },
                checkoutChargeAmount: {
                  description:
                    "The checkout charge amount due for the purchase.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                priceAdjustments: {
                  description:
                    "A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it.",
                  items: {
                    description:
                      "The resulting prices for variants when they're purchased with a specific selling plan.",
                    properties: {
                      __typename: {
                        const: "SellingPlanAllocationPriceAdjustment",
                        type: "string",
                      },
                      compareAtPrice: {
                        description:
                          "The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      perDeliveryPrice: {
                        description:
                          "The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      price: {
                        description:
                          "The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      unitPrice: {
                        description:
                          "The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                remainingBalanceChargeAmount: {
                  description:
                    "The remaining balance charge amount due for the purchase.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                sellingPlan: {
                  description:
                    "A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.",
                  properties: {
                    __typename: {
                      const: "SellingPlan",
                      type: "string",
                    },
                    checkoutCharge: {
                      description: "The initial payment due for the purchase.",
                      properties: {
                        __typename: {
                          const: "SellingPlanCheckoutCharge",
                          type: "string",
                        },
                        type: {
                          $ref: "#/definitions/SellingPlanCheckoutChargeType",
                          description:
                            "The charge type for the checkout charge.",
                        },
                        value: {
                          $ref: "#/definitions/SellingPlanCheckoutChargeValue",
                          description:
                            "The charge value for the checkout charge.",
                        },
                      },
                      type: "object",
                    },
                    description: {
                      description: "The description of the selling plan.",
                      type: "string",
                    },
                    id: {
                      description: "A globally-unique ID.",
                      type: "string",
                    },
                    name: {
                      description:
                        "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.",
                      type: "string",
                    },
                    options: {
                      description:
                        "The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                      items: {
                        description: "An option provided by a Selling Plan.",
                        properties: {
                          __typename: {
                            const: "SellingPlanOption",
                            type: "string",
                          },
                          name: {
                            description:
                              'The name of the option (ie "Delivery every").',
                            type: "string",
                          },
                          value: {
                            description:
                              'The value of the option (ie "Month").',
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                    priceAdjustments: {
                      description:
                        "The price adjustments that a selling plan makes when a variant is purchased with a selling plan.",
                      items: {
                        description:
                          "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.",
                        properties: {
                          __typename: {
                            const: "SellingPlanPriceAdjustment",
                            type: "string",
                          },
                          adjustmentValue: {
                            $ref: "#/definitions/SellingPlanPriceAdjustmentValue",
                            description:
                              "The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.",
                          },
                          orderCount: {
                            description:
                              "The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.",
                            type: "number",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                    recurringDeliveries: {
                      description:
                        "Whether purchasing the selling plan will result in multiple deliveries.",
                      type: "boolean",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "CartLine",
              type: "string",
            },
            attribute: {
              description: "An attribute associated with the cart line.",
              properties: {
                __typename: {
                  const: "Attribute",
                  type: "string",
                },
                key: {
                  description: "Key or name of the attribute.",
                  type: "string",
                },
                value: {
                  description: "Value of the attribute.",
                  type: "string",
                },
              },
              type: "object",
            },
            attributes: {
              description:
                "The attributes associated with the cart line. Attributes are represented as key-value pairs.",
              items: {
                description: "Represents a generic custom attribute.",
                properties: {
                  __typename: {
                    const: "Attribute",
                    type: "string",
                  },
                  key: {
                    description: "Key or name of the attribute.",
                    type: "string",
                  },
                  value: {
                    description: "Value of the attribute.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            cost: {
              description:
                "The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout.",
              properties: {
                __typename: {
                  const: "CartLineCost",
                  type: "string",
                },
                amountPerQuantity: {
                  description: "The amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                compareAtAmountPerQuantity: {
                  description: "The compare at amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmount: {
                  description:
                    "The cost of the merchandise line before line-level discounts.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalAmount: {
                  description: "The total cost of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            discountAllocations: {
              description:
                "The discounts that have been applied to the cart line.",
              items: {
                anyOf: [
                  {
                    $ref: "#/definitions/CartAutomaticDiscountAllocation",
                    description:
                      "The discounts automatically applied to the cart line based on prerequisites that have been met.",
                  },
                  {
                    $ref: "#/definitions/CartCodeDiscountAllocation",
                    description:
                      "The discount that has been applied to the cart line using a discount code.",
                  },
                  {
                    $ref: "#/definitions/CartCustomDiscountAllocation",
                    description:
                      "The discounts automatically applied to the cart line based on prerequisites that have been met.",
                  },
                ],
              },
              type: "array",
            },
            estimatedCost: {
              description:
                "The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.",
              properties: {
                __typename: {
                  const: "CartLineEstimatedCost",
                  type: "string",
                },
                amount: {
                  description: "The amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                compareAtAmount: {
                  description: "The compare at amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmount: {
                  description:
                    "The estimated cost of the merchandise line before discounts.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalAmount: {
                  description:
                    "The estimated total cost of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            merchandise: {
              $ref: "#/definitions/ProductVariant",
              description:
                "The merchandise that the buyer intends to purchase.",
            },
            quantity: {
              description:
                "The quantity of the merchandise that the customer intends to purchase.",
              type: "number",
            },
            sellingPlanAllocation: {
              description:
                "The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased.",
              properties: {
                __typename: {
                  const: "SellingPlanAllocation",
                  type: "string",
                },
                checkoutChargeAmount: {
                  description:
                    "The checkout charge amount due for the purchase.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                priceAdjustments: {
                  description:
                    "A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it.",
                  items: {
                    description:
                      "The resulting prices for variants when they're purchased with a specific selling plan.",
                    properties: {
                      __typename: {
                        const: "SellingPlanAllocationPriceAdjustment",
                        type: "string",
                      },
                      compareAtPrice: {
                        description:
                          "The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      perDeliveryPrice: {
                        description:
                          "The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      price: {
                        description:
                          "The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      unitPrice: {
                        description:
                          "The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                remainingBalanceChargeAmount: {
                  description:
                    "The remaining balance charge amount due for the purchase.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                sellingPlan: {
                  description:
                    "A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.",
                  properties: {
                    __typename: {
                      const: "SellingPlan",
                      type: "string",
                    },
                    checkoutCharge: {
                      description: "The initial payment due for the purchase.",
                      properties: {
                        __typename: {
                          const: "SellingPlanCheckoutCharge",
                          type: "string",
                        },
                        type: {
                          $ref: "#/definitions/SellingPlanCheckoutChargeType",
                          description:
                            "The charge type for the checkout charge.",
                        },
                        value: {
                          $ref: "#/definitions/SellingPlanCheckoutChargeValue",
                          description:
                            "The charge value for the checkout charge.",
                        },
                      },
                      type: "object",
                    },
                    description: {
                      description: "The description of the selling plan.",
                      type: "string",
                    },
                    id: {
                      description: "A globally-unique ID.",
                      type: "string",
                    },
                    name: {
                      description:
                        "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.",
                      type: "string",
                    },
                    options: {
                      description:
                        "The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                      items: {
                        description: "An option provided by a Selling Plan.",
                        properties: {
                          __typename: {
                            const: "SellingPlanOption",
                            type: "string",
                          },
                          name: {
                            description:
                              'The name of the option (ie "Delivery every").',
                            type: "string",
                          },
                          value: {
                            description:
                              'The value of the option (ie "Month").',
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                    priceAdjustments: {
                      description:
                        "The price adjustments that a selling plan makes when a variant is purchased with a selling plan.",
                      items: {
                        description:
                          "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.",
                        properties: {
                          __typename: {
                            const: "SellingPlanPriceAdjustment",
                            type: "string",
                          },
                          adjustmentValue: {
                            $ref: "#/definitions/SellingPlanPriceAdjustmentValue",
                            description:
                              "The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.",
                          },
                          orderCount: {
                            description:
                              "The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.",
                            type: "number",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                    recurringDeliveries: {
                      description:
                        "Whether purchasing the selling plan will result in multiple deliveries.",
                      type: "boolean",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
      ],
      description: "Represents information about the merchandise in the cart.",
    },
    Checkout: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Checkout",
              type: "string",
            },
            appliedGiftCards: {
              description: "The gift cards used on the checkout.",
              items: {
                $ref: "#/definitions/AppliedGiftCard",
              },
              type: "array",
            },
            availableShippingRates: {
              description:
                "The available shipping rates for this Checkout.\nShould only be used when checkout `requiresShipping` is `true` and\nthe shipping address is valid.",
              properties: {
                __typename: {
                  const: "AvailableShippingRates",
                  type: "string",
                },
                ready: {
                  description:
                    "Whether or not the shipping rates are ready.\nThe `shippingRates` field is `null` when this value is `false`.\nThis field should be polled until its value becomes `true`.",
                  type: "boolean",
                },
                shippingRates: {
                  description:
                    "The fetched shipping rates. `null` until the `ready` field is `true`.",
                  items: {
                    description: "A shipping rate to be applied to a checkout.",
                    properties: {
                      __typename: {
                        const: "ShippingRate",
                        type: "string",
                      },
                      handle: {
                        description:
                          "Human-readable unique identifier for this shipping rate.",
                        type: "string",
                      },
                      price: {
                        description: "Price of this shipping rate.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      priceV2: {
                        description: "Price of this shipping rate.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      title: {
                        description: "Title of this shipping rate.",
                        type: "string",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
              },
              type: "object",
            },
            buyerIdentity: {
              description:
                "The identity of the customer associated with the checkout.",
              properties: {
                __typename: {
                  const: "CheckoutBuyerIdentity",
                  type: "string",
                },
                countryCode: {
                  $ref: "#/definitions/Maybe_2",
                  description:
                    "The country code for the checkout. For example, `CA`.",
                },
              },
              type: "object",
            },
            completedAt: {
              description: "The date and time when the checkout was completed.",
              type: "string",
            },
            createdAt: {
              description: "The date and time when the checkout was created.",
              type: "string",
            },
            currencyCode: {
              $ref: "#/definitions/CurrencyCode",
              description: "The currency code for the checkout.",
            },
            customAttributes: {
              description:
                "A list of extra information that is added to the checkout.",
              items: {
                description: "Represents a generic custom attribute.",
                properties: {
                  __typename: {
                    const: "Attribute",
                    type: "string",
                  },
                  key: {
                    description: "Key or name of the attribute.",
                    type: "string",
                  },
                  value: {
                    description: "Value of the attribute.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            discountApplications: {
              description: "Discounts that have been applied on the checkout.",
              properties: {
                __typename: {
                  const: "DiscountApplicationConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one DiscountApplication and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "DiscountApplicationEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        anyOf: [
                          {
                            $ref: "#/definitions/AutomaticDiscountApplication",
                            description:
                              "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                          },
                          {
                            $ref: "#/definitions/DiscountCodeApplication",
                            description:
                              "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                          },
                          {
                            $ref: "#/definitions/ManualDiscountApplication",
                            description:
                              "Manual discount applications capture the intentions of a discount that was manually created.",
                          },
                          {
                            $ref: "#/definitions/ScriptDiscountApplication",
                            description:
                              "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                          },
                        ],
                        description:
                          "The item at the end of DiscountApplicationEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in DiscountApplicationEdge.",
                  items: {
                    anyOf: [
                      {
                        $ref: "#/definitions/AutomaticDiscountApplication",
                        description:
                          "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                      },
                      {
                        $ref: "#/definitions/DiscountCodeApplication",
                        description:
                          "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                      },
                      {
                        $ref: "#/definitions/ManualDiscountApplication",
                        description:
                          "Manual discount applications capture the intentions of a discount that was manually created.",
                      },
                      {
                        $ref: "#/definitions/ScriptDiscountApplication",
                        description:
                          "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                      },
                    ],
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            email: {
              description: "The email attached to this checkout.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            lineItems: {
              description:
                "A list of line item objects, each one containing information about an item in the checkout.",
              properties: {
                __typename: {
                  const: "CheckoutLineItemConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "CheckoutLineItemEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        $ref: "#/definitions/CheckoutLineItem",
                        description:
                          "The item at the end of CheckoutLineItemEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in CheckoutLineItemEdge.",
                  items: {
                    $ref: "#/definitions/CheckoutLineItem",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            lineItemsSubtotalPrice: {
              description:
                "The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            note: {
              description: "The note associated with the checkout.",
              type: "string",
            },
            order: {
              $ref: "#/definitions/Order",
              description: "The resulting order from a paid checkout.",
            },
            orderStatusUrl: {
              description:
                "The Order Status Page for this Checkout, null when checkout is not completed.",
              type: "string",
            },
            paymentDue: {
              description:
                "The amount left to be paid. This is equal to the cost of the line items, taxes, and shipping, minus discounts and gift cards.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            paymentDueV2: {
              description:
                "The amount left to be paid. This is equal to the cost of the line items, duties, taxes, and shipping, minus discounts and gift cards.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            ready: {
              description:
                "Whether or not the Checkout is ready and can be completed. Checkouts may\nhave asynchronous operations that can take time to finish. If you want\nto complete a checkout or ensure all the fields are populated and up to\ndate, polling is required until the value is true.",
              type: "boolean",
            },
            requiresShipping: {
              description:
                "States whether or not the fulfillment requires shipping.",
              type: "boolean",
            },
            shippingAddress: {
              $ref: "#/definitions/MailingAddress",
              description:
                "The shipping address to where the line items will be shipped.",
            },
            shippingDiscountAllocations: {
              description:
                "The discounts that have been allocated onto the shipping line by discount applications.",
              items: {
                description:
                  "An amount discounting the line that has been allocated by a discount.",
                properties: {
                  __typename: {
                    const: "DiscountAllocation",
                    type: "string",
                  },
                  allocatedAmount: {
                    description: "Amount of discount allocated.",
                    properties: {
                      __typename: {
                        const: "MoneyV2",
                        type: "string",
                      },
                      amount: {
                        description: "Decimal money amount.",
                        type: "string",
                      },
                      currencyCode: {
                        $ref: "#/definitions/CurrencyCode",
                        description: "Currency of the money.",
                      },
                    },
                    type: "object",
                  },
                  discountApplication: {
                    anyOf: [
                      {
                        $ref: "#/definitions/AutomaticDiscountApplication",
                        description:
                          "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                      },
                      {
                        $ref: "#/definitions/DiscountCodeApplication",
                        description:
                          "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                      },
                      {
                        $ref: "#/definitions/ManualDiscountApplication",
                        description:
                          "Manual discount applications capture the intentions of a discount that was manually created.",
                      },
                      {
                        $ref: "#/definitions/ScriptDiscountApplication",
                        description:
                          "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                      },
                    ],
                    description:
                      "The discount this allocated amount originated from.",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            shippingLine: {
              description:
                "Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object.",
              properties: {
                __typename: {
                  const: "ShippingRate",
                  type: "string",
                },
                handle: {
                  description:
                    "Human-readable unique identifier for this shipping rate.",
                  type: "string",
                },
                price: {
                  description: "Price of this shipping rate.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                priceV2: {
                  description: "Price of this shipping rate.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                title: {
                  description: "Title of this shipping rate.",
                  type: "string",
                },
              },
              type: "object",
            },
            subtotalPrice: {
              description: "The price at checkout before shipping and taxes.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            subtotalPriceV2: {
              description:
                "The price at checkout before duties, shipping, and taxes.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            taxExempt: {
              description: "Whether the checkout is tax exempt.",
              type: "boolean",
            },
            taxesIncluded: {
              description:
                "Whether taxes are included in the line item and shipping line prices.",
              type: "boolean",
            },
            totalDuties: {
              description:
                "The sum of all the duties applied to the line items in the checkout.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalPrice: {
              description:
                "The sum of all the prices of all the items in the checkout, including taxes and duties.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalPriceV2: {
              description:
                "The sum of all the prices of all the items in the checkout, including taxes and duties.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalTax: {
              description:
                "The sum of all the taxes applied to the line items and shipping lines in the checkout.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalTaxV2: {
              description:
                "The sum of all the taxes applied to the line items and shipping lines in the checkout.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            updatedAt: {
              description:
                "The date and time when the checkout was last updated.",
              type: "string",
            },
            webUrl: {
              description:
                "The url pointing to the checkout accessible from the web.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "A container for all the information required to checkout items and pay.",
    },
    CheckoutLineItem: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "CheckoutLineItem",
              type: "string",
            },
            customAttributes: {
              description:
                "Extra information in the form of an array of Key-Value pairs about the line item.",
              items: {
                description: "Represents a generic custom attribute.",
                properties: {
                  __typename: {
                    const: "Attribute",
                    type: "string",
                  },
                  key: {
                    description: "Key or name of the attribute.",
                    type: "string",
                  },
                  value: {
                    description: "Value of the attribute.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            discountAllocations: {
              description:
                "The discounts that have been allocated onto the checkout line item by discount applications.",
              items: {
                description:
                  "An amount discounting the line that has been allocated by a discount.",
                properties: {
                  __typename: {
                    const: "DiscountAllocation",
                    type: "string",
                  },
                  allocatedAmount: {
                    description: "Amount of discount allocated.",
                    properties: {
                      __typename: {
                        const: "MoneyV2",
                        type: "string",
                      },
                      amount: {
                        description: "Decimal money amount.",
                        type: "string",
                      },
                      currencyCode: {
                        $ref: "#/definitions/CurrencyCode",
                        description: "Currency of the money.",
                      },
                    },
                    type: "object",
                  },
                  discountApplication: {
                    anyOf: [
                      {
                        $ref: "#/definitions/AutomaticDiscountApplication",
                        description:
                          "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                      },
                      {
                        $ref: "#/definitions/DiscountCodeApplication",
                        description:
                          "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                      },
                      {
                        $ref: "#/definitions/ManualDiscountApplication",
                        description:
                          "Manual discount applications capture the intentions of a discount that was manually created.",
                      },
                      {
                        $ref: "#/definitions/ScriptDiscountApplication",
                        description:
                          "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                      },
                    ],
                    description:
                      "The discount this allocated amount originated from.",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            quantity: {
              description: "The quantity of the line item.",
              type: "number",
            },
            title: {
              description:
                "Title of the line item. Defaults to the product's title.",
              type: "string",
            },
            unitPrice: {
              description: "Unit price of the line item.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            variant: {
              $ref: "#/definitions/ProductVariant",
              description: "Product variant of the line item.",
            },
          },
          type: "object",
        },
      ],
      description:
        "A single line item in the checkout, grouped by variant and attributes.",
    },
    Collection: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          description:
            "Represents a resource that can be published to the Online Store sales channel.",
          properties: {
            onlineStoreUrl: {
              description:
                "The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          description:
            "Represents a resource that you can track the origin of the search traffic.",
          properties: {
            trackingParameters: {
              description:
                "A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Collection",
              type: "string",
            },
            description: {
              description:
                "Stripped description of the collection, single line with HTML tags removed.",
              type: "string",
            },
            descriptionHtml: {
              description:
                "The description of the collection, complete with HTML formatting.",
              type: "string",
            },
            handle: {
              description:
                "A human-friendly unique string for the collection automatically generated from its title.\nLimit of 255 characters.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            image: {
              description: "Image associated with the collection.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            onlineStoreUrl: {
              description:
                "The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.",
              type: "string",
            },
            products: {
              description: "List of products in the collection.",
              properties: {
                __typename: {
                  const: "ProductConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one Product and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "ProductEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        $ref: "#/definitions/Product_1",
                        description: "The item at the end of ProductEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                filters: {
                  description: "A list of available filters.",
                  items: {
                    description:
                      "A filter that is supported on the parent field.",
                    properties: {
                      __typename: {
                        const: "Filter",
                        type: "string",
                      },
                      id: {
                        description: "A unique identifier.",
                        type: "string",
                      },
                      label: {
                        description: "A human-friendly string for this filter.",
                        type: "string",
                      },
                      type: {
                        $ref: "#/definitions/FilterType",
                        description:
                          "An enumeration that denotes the type of data this filter represents.",
                      },
                      values: {
                        description: "The list of values for this filter.",
                        items: {
                          description: "A selectable value within a filter.",
                          properties: {
                            __typename: {
                              const: "FilterValue",
                              type: "string",
                            },
                            count: {
                              description:
                                "The number of results that match this filter value.",
                              type: "number",
                            },
                            id: {
                              description: "A unique identifier.",
                              type: "string",
                            },
                            input: {
                              description:
                                "An input object that can be used to filter by this value on the parent field.\n\nThe value is provided as a helper for building dynamic filtering UI. For example, if you have a list of selected `FilterValue` objects, you can combine their respective `input` values to use in a subsequent query.",
                            },
                            label: {
                              description:
                                "A human-friendly string for this filter value.",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        type: "array",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description: "A list of the nodes contained in ProductEdge.",
                  items: {
                    $ref: "#/definitions/Product_1",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            seo: {
              description: "The collection's SEO information.",
              properties: {
                __typename: {
                  const: "SEO",
                  type: "string",
                },
                description: {
                  description: "The meta description.",
                  type: "string",
                },
                title: {
                  description: "The SEO title.",
                  type: "string",
                },
              },
              type: "object",
            },
            title: {
              description: "The collection’s name. Limit of 255 characters.",
              type: "string",
            },
            trackingParameters: {
              description:
                "A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.",
              type: "string",
            },
            updatedAt: {
              description:
                "The date and time when the collection was last modified.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse.",
    },
    Comment: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Comment",
              type: "string",
            },
            author: {
              description: "The comment’s author.",
              properties: {
                __typename: {
                  const: "CommentAuthor",
                  type: "string",
                },
                email: {
                  description: "The author's email.",
                  type: "string",
                },
                name: {
                  description: "The author’s name.",
                  type: "string",
                },
              },
              type: "object",
            },
            content: {
              description:
                "Stripped content of the comment, single line with HTML tags removed.",
              type: "string",
            },
            contentHtml: {
              description:
                "The content of the comment, complete with HTML formatting.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description: "A comment on an article.",
    },
    ComponentizableCartLine: {
      allOf: [
        {
          description: "Represents a cart line common fields.",
          properties: {
            attribute: {
              description: "An attribute associated with the cart line.",
              properties: {
                __typename: {
                  const: "Attribute",
                  type: "string",
                },
                key: {
                  description: "Key or name of the attribute.",
                  type: "string",
                },
                value: {
                  description: "Value of the attribute.",
                  type: "string",
                },
              },
              type: "object",
            },
            attributes: {
              description:
                "The attributes associated with the cart line. Attributes are represented as key-value pairs.",
              items: {
                description: "Represents a generic custom attribute.",
                properties: {
                  __typename: {
                    const: "Attribute",
                    type: "string",
                  },
                  key: {
                    description: "Key or name of the attribute.",
                    type: "string",
                  },
                  value: {
                    description: "Value of the attribute.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            cost: {
              description:
                "The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout.",
              properties: {
                __typename: {
                  const: "CartLineCost",
                  type: "string",
                },
                amountPerQuantity: {
                  description: "The amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                compareAtAmountPerQuantity: {
                  description: "The compare at amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmount: {
                  description:
                    "The cost of the merchandise line before line-level discounts.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalAmount: {
                  description: "The total cost of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            discountAllocations: {
              description:
                "The discounts that have been applied to the cart line.",
              items: {
                anyOf: [
                  {
                    $ref: "#/definitions/CartAutomaticDiscountAllocation",
                    description:
                      "The discounts automatically applied to the cart line based on prerequisites that have been met.",
                  },
                  {
                    $ref: "#/definitions/CartCodeDiscountAllocation",
                    description:
                      "The discount that has been applied to the cart line using a discount code.",
                  },
                  {
                    $ref: "#/definitions/CartCustomDiscountAllocation",
                    description:
                      "The discounts automatically applied to the cart line based on prerequisites that have been met.",
                  },
                ],
              },
              type: "array",
            },
            estimatedCost: {
              description:
                "The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.",
              properties: {
                __typename: {
                  const: "CartLineEstimatedCost",
                  type: "string",
                },
                amount: {
                  description: "The amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                compareAtAmount: {
                  description: "The compare at amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmount: {
                  description:
                    "The estimated cost of the merchandise line before discounts.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalAmount: {
                  description:
                    "The estimated total cost of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            merchandise: {
              $ref: "#/definitions/ProductVariant",
              description:
                "The merchandise that the buyer intends to purchase.",
            },
            quantity: {
              description:
                "The quantity of the merchandise that the customer intends to purchase.",
              type: "number",
            },
            sellingPlanAllocation: {
              description:
                "The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased.",
              properties: {
                __typename: {
                  const: "SellingPlanAllocation",
                  type: "string",
                },
                checkoutChargeAmount: {
                  description:
                    "The checkout charge amount due for the purchase.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                priceAdjustments: {
                  description:
                    "A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it.",
                  items: {
                    description:
                      "The resulting prices for variants when they're purchased with a specific selling plan.",
                    properties: {
                      __typename: {
                        const: "SellingPlanAllocationPriceAdjustment",
                        type: "string",
                      },
                      compareAtPrice: {
                        description:
                          "The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      perDeliveryPrice: {
                        description:
                          "The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      price: {
                        description:
                          "The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      unitPrice: {
                        description:
                          "The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                remainingBalanceChargeAmount: {
                  description:
                    "The remaining balance charge amount due for the purchase.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                sellingPlan: {
                  description:
                    "A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.",
                  properties: {
                    __typename: {
                      const: "SellingPlan",
                      type: "string",
                    },
                    checkoutCharge: {
                      description: "The initial payment due for the purchase.",
                      properties: {
                        __typename: {
                          const: "SellingPlanCheckoutCharge",
                          type: "string",
                        },
                        type: {
                          $ref: "#/definitions/SellingPlanCheckoutChargeType",
                          description:
                            "The charge type for the checkout charge.",
                        },
                        value: {
                          $ref: "#/definitions/SellingPlanCheckoutChargeValue",
                          description:
                            "The charge value for the checkout charge.",
                        },
                      },
                      type: "object",
                    },
                    description: {
                      description: "The description of the selling plan.",
                      type: "string",
                    },
                    id: {
                      description: "A globally-unique ID.",
                      type: "string",
                    },
                    name: {
                      description:
                        "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.",
                      type: "string",
                    },
                    options: {
                      description:
                        "The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                      items: {
                        description: "An option provided by a Selling Plan.",
                        properties: {
                          __typename: {
                            const: "SellingPlanOption",
                            type: "string",
                          },
                          name: {
                            description:
                              'The name of the option (ie "Delivery every").',
                            type: "string",
                          },
                          value: {
                            description:
                              'The value of the option (ie "Month").',
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                    priceAdjustments: {
                      description:
                        "The price adjustments that a selling plan makes when a variant is purchased with a selling plan.",
                      items: {
                        description:
                          "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.",
                        properties: {
                          __typename: {
                            const: "SellingPlanPriceAdjustment",
                            type: "string",
                          },
                          adjustmentValue: {
                            $ref: "#/definitions/SellingPlanPriceAdjustmentValue",
                            description:
                              "The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.",
                          },
                          orderCount: {
                            description:
                              "The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.",
                            type: "number",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                    recurringDeliveries: {
                      description:
                        "Whether purchasing the selling plan will result in multiple deliveries.",
                      type: "boolean",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "ComponentizableCartLine",
              type: "string",
            },
            attribute: {
              description: "An attribute associated with the cart line.",
              properties: {
                __typename: {
                  const: "Attribute",
                  type: "string",
                },
                key: {
                  description: "Key or name of the attribute.",
                  type: "string",
                },
                value: {
                  description: "Value of the attribute.",
                  type: "string",
                },
              },
              type: "object",
            },
            attributes: {
              description:
                "The attributes associated with the cart line. Attributes are represented as key-value pairs.",
              items: {
                description: "Represents a generic custom attribute.",
                properties: {
                  __typename: {
                    const: "Attribute",
                    type: "string",
                  },
                  key: {
                    description: "Key or name of the attribute.",
                    type: "string",
                  },
                  value: {
                    description: "Value of the attribute.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            cost: {
              description:
                "The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout.",
              properties: {
                __typename: {
                  const: "CartLineCost",
                  type: "string",
                },
                amountPerQuantity: {
                  description: "The amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                compareAtAmountPerQuantity: {
                  description: "The compare at amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmount: {
                  description:
                    "The cost of the merchandise line before line-level discounts.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalAmount: {
                  description: "The total cost of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            discountAllocations: {
              description:
                "The discounts that have been applied to the cart line.",
              items: {
                anyOf: [
                  {
                    $ref: "#/definitions/CartAutomaticDiscountAllocation",
                    description:
                      "The discounts automatically applied to the cart line based on prerequisites that have been met.",
                  },
                  {
                    $ref: "#/definitions/CartCodeDiscountAllocation",
                    description:
                      "The discount that has been applied to the cart line using a discount code.",
                  },
                  {
                    $ref: "#/definitions/CartCustomDiscountAllocation",
                    description:
                      "The discounts automatically applied to the cart line based on prerequisites that have been met.",
                  },
                ],
              },
              type: "array",
            },
            estimatedCost: {
              description:
                "The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.",
              properties: {
                __typename: {
                  const: "CartLineEstimatedCost",
                  type: "string",
                },
                amount: {
                  description: "The amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                compareAtAmount: {
                  description: "The compare at amount of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                subtotalAmount: {
                  description:
                    "The estimated cost of the merchandise line before discounts.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                totalAmount: {
                  description:
                    "The estimated total cost of the merchandise line.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            lineComponents: {
              description: "The components of the line item.",
              items: {
                $ref: "#/definitions/CartLine",
              },
              type: "array",
            },
            merchandise: {
              $ref: "#/definitions/ProductVariant",
              description:
                "The merchandise that the buyer intends to purchase.",
            },
            quantity: {
              description:
                "The quantity of the merchandise that the customer intends to purchase.",
              type: "number",
            },
            sellingPlanAllocation: {
              description:
                "The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased.",
              properties: {
                __typename: {
                  const: "SellingPlanAllocation",
                  type: "string",
                },
                checkoutChargeAmount: {
                  description:
                    "The checkout charge amount due for the purchase.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                priceAdjustments: {
                  description:
                    "A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it.",
                  items: {
                    description:
                      "The resulting prices for variants when they're purchased with a specific selling plan.",
                    properties: {
                      __typename: {
                        const: "SellingPlanAllocationPriceAdjustment",
                        type: "string",
                      },
                      compareAtPrice: {
                        description:
                          "The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      perDeliveryPrice: {
                        description:
                          "The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      price: {
                        description:
                          "The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      unitPrice: {
                        description:
                          "The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                remainingBalanceChargeAmount: {
                  description:
                    "The remaining balance charge amount due for the purchase.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                sellingPlan: {
                  description:
                    "A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.",
                  properties: {
                    __typename: {
                      const: "SellingPlan",
                      type: "string",
                    },
                    checkoutCharge: {
                      description: "The initial payment due for the purchase.",
                      properties: {
                        __typename: {
                          const: "SellingPlanCheckoutCharge",
                          type: "string",
                        },
                        type: {
                          $ref: "#/definitions/SellingPlanCheckoutChargeType",
                          description:
                            "The charge type for the checkout charge.",
                        },
                        value: {
                          $ref: "#/definitions/SellingPlanCheckoutChargeValue",
                          description:
                            "The charge value for the checkout charge.",
                        },
                      },
                      type: "object",
                    },
                    description: {
                      description: "The description of the selling plan.",
                      type: "string",
                    },
                    id: {
                      description: "A globally-unique ID.",
                      type: "string",
                    },
                    name: {
                      description:
                        "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.",
                      type: "string",
                    },
                    options: {
                      description:
                        "The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                      items: {
                        description: "An option provided by a Selling Plan.",
                        properties: {
                          __typename: {
                            const: "SellingPlanOption",
                            type: "string",
                          },
                          name: {
                            description:
                              'The name of the option (ie "Delivery every").',
                            type: "string",
                          },
                          value: {
                            description:
                              'The value of the option (ie "Month").',
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                    priceAdjustments: {
                      description:
                        "The price adjustments that a selling plan makes when a variant is purchased with a selling plan.",
                      items: {
                        description:
                          "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.",
                        properties: {
                          __typename: {
                            const: "SellingPlanPriceAdjustment",
                            type: "string",
                          },
                          adjustmentValue: {
                            $ref: "#/definitions/SellingPlanPriceAdjustmentValue",
                            description:
                              "The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.",
                          },
                          orderCount: {
                            description:
                              "The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.",
                            type: "number",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                    recurringDeliveries: {
                      description:
                        "Whether purchasing the selling plan will result in multiple deliveries.",
                      type: "boolean",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
      ],
      description:
        "Represents information about the grouped merchandise in the cart.",
    },
    CountryCode: {
      description:
        "The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.\nIf a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision\nof another country. For example, the territories associated with Spain are represented by the country code `ES`,\nand the territories associated with the United States of America are represented by the country code `US`.",
      enum: [
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AN",
        "AO",
        "AR",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BV",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GW",
        "GY",
        "HK",
        "HM",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PS",
        "PT",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW",
        "ZZ",
      ],
      type: "string",
    },
    CurrencyCode: {
      description:
        "The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,\nand non-standard codes.",
      enum: [
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BRL",
        "BSD",
        "BTN",
        "BWP",
        "BYN",
        "BYR",
        "BZD",
        "CAD",
        "CDF",
        "CHF",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "GBP",
        "GEL",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JEP",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KID",
        "KMF",
        "KRW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LTL",
        "LVL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRU",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLL",
        "SOS",
        "SRD",
        "SSP",
        "STD",
        "STN",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "USD",
        "UYU",
        "UZS",
        "VED",
        "VEF",
        "VES",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XCD",
        "XOF",
        "XPF",
        "XXX",
        "YER",
        "ZAR",
        "ZMW",
      ],
      type: "string",
    },
    Customer: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Customer",
              type: "string",
            },
            acceptsMarketing: {
              description:
                "Indicates whether the customer has consented to be sent marketing material via email.",
              type: "boolean",
            },
            addresses: {
              description: "A list of addresses for the customer.",
              properties: {
                __typename: {
                  const: "MailingAddressConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one MailingAddress and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "MailingAddressEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        $ref: "#/definitions/MailingAddress",
                        description:
                          "The item at the end of MailingAddressEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in MailingAddressEdge.",
                  items: {
                    $ref: "#/definitions/MailingAddress",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            createdAt: {
              description: "The date and time when the customer was created.",
              type: "string",
            },
            defaultAddress: {
              $ref: "#/definitions/MailingAddress",
              description: "The customer’s default address.",
            },
            displayName: {
              description: "The customer’s name, email or phone number.",
              type: "string",
            },
            email: {
              description: "The customer’s email address.",
              type: "string",
            },
            firstName: {
              description: "The customer’s first name.",
              type: "string",
            },
            id: {
              description: "A unique ID for the customer.",
              type: "string",
            },
            lastIncompleteCheckout: {
              $ref: "#/definitions/Checkout",
              description:
                "The customer's most recently updated, incomplete checkout.",
            },
            lastName: {
              description: "The customer’s last name.",
              type: "string",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            numberOfOrders: {
              description:
                "The number of orders that the customer has made at the store in their lifetime.",
              type: "string",
            },
            orders: {
              description: "The orders associated with the customer.",
              properties: {
                __typename: {
                  const: "OrderConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one Order and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "OrderEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        $ref: "#/definitions/Order",
                        description: "The item at the end of OrderEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description: "A list of the nodes contained in OrderEdge.",
                  items: {
                    $ref: "#/definitions/Order",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
                totalCount: {
                  description: "The total count of Orders.",
                  type: "string",
                },
              },
              type: "object",
            },
            phone: {
              description: "The customer’s phone number.",
              type: "string",
            },
            tags: {
              description:
                "A comma separated list of tags that have been added to the customer.\nAdditional access scope required: unauthenticated_read_customer_tags.",
              items: {
                type: "string",
              },
              type: "array",
            },
            updatedAt: {
              description:
                "The date and time when the customer information was updated.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout.",
    },
    DeliveryMethodType: {
      description: "List of different delivery method types.",
      enum: ["LOCAL", "NONE", "PICKUP_POINT", "PICK_UP", "RETAIL", "SHIPPING"],
      type: "string",
    },
    DigitalWallet: {
      description:
        "Digital wallet, such as Apple Pay, which can be used for accelerated checkouts.",
      enum: ["ANDROID_PAY", "APPLE_PAY", "GOOGLE_PAY", "SHOPIFY_PAY"],
      type: "string",
    },
    DiscountApplicationAllocationMethod: {
      description:
        "The method by which the discount's value is allocated onto its entitled lines.",
      enum: ["ACROSS", "EACH", "ONE"],
      type: "string",
    },
    DiscountApplicationTargetSelection: {
      description:
        "The lines on the order to which the discount is applied, of the type defined by\nthe discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of\n`LINE_ITEM`, applies the discount on all line items that are entitled to the discount.\nThe value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.",
      enum: ["ALL", "ENTITLED", "EXPLICIT"],
      type: "string",
    },
    DiscountApplicationTargetType: {
      description:
        "The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.",
      enum: ["LINE_ITEM", "SHIPPING_LINE"],
      type: "string",
    },
    DiscountCodeApplication: {
      allOf: [
        {
          description:
            "Discount applications capture the intentions of a discount source at\nthe time of application.",
          properties: {
            allocationMethod: {
              $ref: "#/definitions/DiscountApplicationAllocationMethod",
              description:
                "The method by which the discount's value is allocated to its entitled items.",
            },
            targetSelection: {
              $ref: "#/definitions/DiscountApplicationTargetSelection",
              description:
                "Which lines of targetType that the discount is allocated over.",
            },
            targetType: {
              $ref: "#/definitions/DiscountApplicationTargetType",
              description:
                "The type of line that the discount is applicable towards.",
            },
            value: {
              $ref: "#/definitions/PricingValue",
              description: "The value of the discount application.",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "DiscountCodeApplication",
              type: "string",
            },
            allocationMethod: {
              $ref: "#/definitions/DiscountApplicationAllocationMethod",
              description:
                "The method by which the discount's value is allocated to its entitled items.",
            },
            applicable: {
              description:
                "Specifies whether the discount code was applied successfully.",
              type: "boolean",
            },
            code: {
              description:
                "The string identifying the discount code that was used at the time of application.",
              type: "string",
            },
            targetSelection: {
              $ref: "#/definitions/DiscountApplicationTargetSelection",
              description:
                "Which lines of targetType that the discount is allocated over.",
            },
            targetType: {
              $ref: "#/definitions/DiscountApplicationTargetType",
              description:
                "The type of line that the discount is applicable towards.",
            },
            value: {
              $ref: "#/definitions/PricingValue",
              description: "The value of the discount application.",
            },
          },
          type: "object",
        },
      ],
      description:
        "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
    },
    ExternalVideo: {
      allOf: [
        {
          description: "Represents a media interface.",
          properties: {
            alt: {
              description:
                "A word or phrase to share the nature or contents of a media.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            mediaContentType: {
              $ref: "#/definitions/MediaContentType",
              description: "The media content type.",
            },
            presentation: {
              $ref: "#/definitions/MediaPresentation",
              description: "The presentation for a media.",
            },
            previewImage: {
              description: "The preview image for the media.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "ExternalVideo",
              type: "string",
            },
            alt: {
              description:
                "A word or phrase to share the nature or contents of a media.",
              type: "string",
            },
            embedUrl: {
              description:
                "The embed URL of the video for the respective host.",
              type: "string",
            },
            embeddedUrl: {
              description: "The URL.",
              type: "string",
            },
            host: {
              $ref: "#/definitions/MediaHost",
              description: "The host of the external video.",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            mediaContentType: {
              $ref: "#/definitions/MediaContentType",
              description: "The media content type.",
            },
            originUrl: {
              description:
                "The origin URL of the video on the respective host.",
              type: "string",
            },
            presentation: {
              $ref: "#/definitions/MediaPresentation",
              description: "The presentation for a media.",
            },
            previewImage: {
              description: "The preview image for the media.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
      ],
      description: "Represents a video hosted outside of Shopify.",
    },
    FilterType: {
      description:
        "The type of data that the filter group represents.\n\nFor more information, refer to [Filter products in a collection with the Storefront API]\n(https://shopify.dev/custom-storefronts/products-collections/filter-products).",
      enum: ["BOOLEAN", "LIST", "PRICE_RANGE"],
      type: "string",
    },
    GenericFile: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "GenericFile",
              type: "string",
            },
            alt: {
              description:
                "A word or phrase to indicate the contents of a file.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            mimeType: {
              description: "The MIME type of the file.",
              type: "string",
            },
            originalFileSize: {
              description: "The size of the original file in bytes.",
              type: "number",
            },
            previewImage: {
              description: "The preview image for the file.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
            url: {
              description: "The URL of the file.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON.",
    },
    Image_1: {
      allOf: [
        {
          $ref: '#/definitions/Pick<Image,"id">',
        },
        {
          properties: {
            altText: {
              type: "string",
            },
            blurDataURL: {
              type: "string",
            },
            height: {
              type: "number",
            },
            url: {
              type: "string",
            },
            width: {
              type: "number",
            },
          },
          type: "object",
        },
      ],
    },
    Location: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Location",
              type: "string",
            },
            address: {
              description: "The address of the location.",
              properties: {
                __typename: {
                  const: "LocationAddress",
                  type: "string",
                },
                address1: {
                  description:
                    "The first line of the address for the location.",
                  type: "string",
                },
                address2: {
                  description:
                    "The second line of the address for the location.",
                  type: "string",
                },
                city: {
                  description: "The city of the location.",
                  type: "string",
                },
                country: {
                  description: "The country of the location.",
                  type: "string",
                },
                countryCode: {
                  description: "The country code of the location.",
                  type: "string",
                },
                formatted: {
                  description:
                    "A formatted version of the address for the location.",
                  items: {
                    type: "string",
                  },
                  type: "array",
                },
                latitude: {
                  description: "The latitude coordinates of the location.",
                  type: "number",
                },
                longitude: {
                  description: "The longitude coordinates of the location.",
                  type: "number",
                },
                phone: {
                  description: "The phone number of the location.",
                  type: "string",
                },
                province: {
                  description: "The province of the location.",
                  type: "string",
                },
                provinceCode: {
                  description:
                    "The code for the province, state, or district of the address of the location.",
                  type: "string",
                },
                zip: {
                  description: "The ZIP code of the location.",
                  type: "string",
                },
              },
              type: "object",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            name: {
              description: "The name of the location.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description: "Represents a location where product inventory is held.",
    },
    MailingAddress: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "MailingAddress",
              type: "string",
            },
            address1: {
              description:
                "The first line of the address. Typically the street address or PO Box number.",
              type: "string",
            },
            address2: {
              description:
                "The second line of the address. Typically the number of the apartment, suite, or unit.",
              type: "string",
            },
            city: {
              description: "The name of the city, district, village, or town.",
              type: "string",
            },
            company: {
              description:
                "The name of the customer's company or organization.",
              type: "string",
            },
            country: {
              description: "The name of the country.",
              type: "string",
            },
            countryCode: {
              description:
                "The two-letter code for the country of the address.\n\nFor example, US.",
              type: "string",
            },
            countryCodeV2: {
              $ref: "#/definitions/Maybe_2",
              description:
                "The two-letter code for the country of the address.\n\nFor example, US.",
            },
            firstName: {
              description: "The first name of the customer.",
              type: "string",
            },
            formatted: {
              description:
                "A formatted version of the address, customized by the provided arguments.",
              items: {
                type: "string",
              },
              type: "array",
            },
            formattedArea: {
              description:
                "A comma-separated list of the values for city, province, and country.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            lastName: {
              description: "The last name of the customer.",
              type: "string",
            },
            latitude: {
              description: "The latitude coordinate of the customer address.",
              type: "number",
            },
            longitude: {
              description: "The longitude coordinate of the customer address.",
              type: "number",
            },
            name: {
              description:
                "The full name of the customer, based on firstName and lastName.",
              type: "string",
            },
            phone: {
              description:
                "A unique phone number for the customer.\n\nFormatted using E.164 standard. For example, _+16135551111_.",
              type: "string",
            },
            province: {
              description:
                "The region of the address, such as the province, state, or district.",
              type: "string",
            },
            provinceCode: {
              description:
                "The two-letter code for the region.\n\nFor example, ON.",
              type: "string",
            },
            zip: {
              description: "The zip or postal code of the address.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description: "Represents a mailing address for customers and shipping.",
    },
    ManualDiscountApplication: {
      allOf: [
        {
          description:
            "Discount applications capture the intentions of a discount source at\nthe time of application.",
          properties: {
            allocationMethod: {
              $ref: "#/definitions/DiscountApplicationAllocationMethod",
              description:
                "The method by which the discount's value is allocated to its entitled items.",
            },
            targetSelection: {
              $ref: "#/definitions/DiscountApplicationTargetSelection",
              description:
                "Which lines of targetType that the discount is allocated over.",
            },
            targetType: {
              $ref: "#/definitions/DiscountApplicationTargetType",
              description:
                "The type of line that the discount is applicable towards.",
            },
            value: {
              $ref: "#/definitions/PricingValue",
              description: "The value of the discount application.",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "ManualDiscountApplication",
              type: "string",
            },
            allocationMethod: {
              $ref: "#/definitions/DiscountApplicationAllocationMethod",
              description:
                "The method by which the discount's value is allocated to its entitled items.",
            },
            description: {
              description: "The description of the application.",
              type: "string",
            },
            targetSelection: {
              $ref: "#/definitions/DiscountApplicationTargetSelection",
              description:
                "Which lines of targetType that the discount is allocated over.",
            },
            targetType: {
              $ref: "#/definitions/DiscountApplicationTargetType",
              description:
                "The type of line that the discount is applicable towards.",
            },
            title: {
              description: "The title of the application.",
              type: "string",
            },
            value: {
              $ref: "#/definitions/PricingValue",
              description: "The value of the discount application.",
            },
          },
          type: "object",
        },
      ],
      description:
        "Manual discount applications capture the intentions of a discount that was manually created.",
    },
    Market: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Market",
              type: "string",
            },
            handle: {
              description:
                "A human-readable unique string for the market automatically generated from its title.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
      ],
      description:
        "A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual overview](/docs/apps/markets).",
    },
    Maybe: {
      description: "The accepted types of unit of measurement.",
      enum: ["AREA", "LENGTH", "VOLUME", "WEIGHT"],
      type: "string",
    },
    Maybe_1: {
      description:
        "The valid units of measurement for a unit price measurement.",
      enum: ["CL", "CM", "G", "KG", "L", "M", "M2", "M3", "MG", "ML", "MM"],
      type: "string",
    },
    Maybe_2: {
      description:
        "The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.\nIf a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision\nof another country. For example, the territories associated with Spain are represented by the country code `ES`,\nand the territories associated with the United States of America are represented by the country code `US`.",
      enum: [
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AN",
        "AO",
        "AR",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BV",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GW",
        "GY",
        "HK",
        "HM",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PS",
        "PT",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW",
        "ZZ",
      ],
      type: "string",
    },
    Maybe_3: {
      description: "Represents the reason for the order's cancellation.",
      enum: ["CUSTOMER", "DECLINED", "FRAUD", "INVENTORY", "OTHER"],
      type: "string",
    },
    Maybe_4: {
      description: "Represents the order's current financial status.",
      enum: [
        "AUTHORIZED",
        "PAID",
        "PARTIALLY_PAID",
        "PARTIALLY_REFUNDED",
        "PENDING",
        "REFUNDED",
        "VOIDED",
      ],
      type: "string",
    },
    MediaContentType: {
      description: "The possible content types for a media object.",
      enum: ["EXTERNAL_VIDEO", "IMAGE", "MODEL_3D", "VIDEO"],
      type: "string",
    },
    MediaHost: {
      description: "Host for a Media Resource.",
      enum: ["VIMEO", "YOUTUBE"],
      type: "string",
    },
    MediaImage: {
      allOf: [
        {
          description: "Represents a media interface.",
          properties: {
            alt: {
              description:
                "A word or phrase to share the nature or contents of a media.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            mediaContentType: {
              $ref: "#/definitions/MediaContentType",
              description: "The media content type.",
            },
            presentation: {
              $ref: "#/definitions/MediaPresentation",
              description: "The presentation for a media.",
            },
            previewImage: {
              description: "The preview image for the media.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "MediaImage",
              type: "string",
            },
            alt: {
              description:
                "A word or phrase to share the nature or contents of a media.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            image: {
              description: "The image for the media.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
            mediaContentType: {
              $ref: "#/definitions/MediaContentType",
              description: "The media content type.",
            },
            presentation: {
              $ref: "#/definitions/MediaPresentation",
              description: "The presentation for a media.",
            },
            previewImage: {
              description: "The preview image for the media.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
      ],
      description: "Represents a Shopify hosted image.",
    },
    MediaPresentation: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "MediaPresentation",
              type: "string",
            },
            asJson: {
              description: "A JSON object representing a presentation view.",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description: "A media presentation.",
    },
    Metafield: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Metafield",
              type: "string",
            },
            createdAt: {
              description:
                "The date and time when the storefront metafield was created.",
              type: "string",
            },
            description: {
              description: "The description of a metafield.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            key: {
              description:
                "The unique identifier for the metafield within its namespace.",
              type: "string",
            },
            namespace: {
              description:
                "The container for a group of metafields that the metafield is associated with.",
              type: "string",
            },
            parentResource: {
              $ref: "#/definitions/MetafieldParentResource",
              description:
                "The type of resource that the metafield is attached to.",
            },
            reference: {
              $ref: "#/definitions/MetafieldReference",
              description:
                "Returns a reference object if the metafield's type is a resource reference.",
            },
            references: {
              description:
                "A list of reference objects if the metafield's type is a resource reference list.",
              properties: {
                __typename: {
                  const: "MetafieldReferenceConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one MetafieldReference and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "MetafieldReferenceEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        $ref: "#/definitions/MetafieldReference",
                        description:
                          "The item at the end of MetafieldReferenceEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in MetafieldReferenceEdge.",
                  items: {
                    $ref: "#/definitions/MetafieldReference",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            type: {
              description:
                "The type name of the metafield.\nRefer to the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).",
              type: "string",
            },
            updatedAt: {
              description:
                "The date and time when the metafield was last updated.",
              type: "string",
            },
            value: {
              description:
                "The data stored in the metafield. Always stored as a string, regardless of the metafield's type.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are\ncomprised of keys, values, and value types.",
    },
    MetafieldParentResource: {
      anyOf: [
        {
          $ref: "#/definitions/Blog",
          description: "An online store blog.",
        },
        {
          $ref: "#/definitions/Article",
          description: "An article in an online store blog.",
        },
        {
          $ref: "#/definitions/ProductVariant",
          description:
            "A product variant represents a different version of a product, such as differing sizes or differing colors.",
        },
        {
          $ref: "#/definitions/Cart",
          description:
            "A cart represents the merchandise that a buyer intends to purchase,\nand the estimated cost associated with the cart. Learn how to\n[interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)\nduring a customer's session.",
        },
        {
          $ref: "#/definitions/Customer",
          description:
            "A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout.",
        },
        {
          $ref: "#/definitions/Order",
          description:
            "An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.",
        },
        {
          $ref: "#/definitions/Collection",
          description:
            "A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse.",
        },
        {
          $ref: "#/definitions/Market",
          description:
            "A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual overview](/docs/apps/markets).",
        },
        {
          $ref: "#/definitions/Location",
          description: "Represents a location where product inventory is held.",
        },
        {
          $ref: "#/definitions/Page",
          description:
            "Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store.",
        },
        {
          $ref: "#/definitions/Product_1",
          description:
            "A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.\nFor example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).",
        },
        {
          $ref: "#/definitions/Shop",
          description:
            "Shop represents a collection of the general settings and information about the shop.",
        },
      ],
      description: "A resource that the metafield belongs to.",
    },
    MetafieldReference: {
      anyOf: [
        {
          $ref: "#/definitions/ProductVariant",
          description:
            "A product variant represents a different version of a product, such as differing sizes or differing colors.",
        },
        {
          $ref: "#/definitions/MediaImage",
          description: "Represents a Shopify hosted image.",
        },
        {
          $ref: "#/definitions/Collection",
          description:
            "A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse.",
        },
        {
          $ref: "#/definitions/GenericFile",
          description:
            "The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON.",
        },
        {
          $ref: "#/definitions/Video",
          description: "Represents a Shopify hosted video.",
        },
        {
          $ref: "#/definitions/Page",
          description:
            "Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store.",
        },
        {
          $ref: "#/definitions/Product_1",
          description:
            "A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.\nFor example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).",
        },
        {
          $ref: "#/definitions/Metaobject",
          description:
            "An instance of a user-defined model based on a MetaobjectDefinition.",
        },
      ],
      description:
        "Returns the resource which is being referred to by a metafield.",
    },
    Metaobject: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Metaobject",
              type: "string",
            },
            field: {
              description: "Accesses a field of the object by key.",
              properties: {
                __typename: {
                  const: "MetaobjectField",
                  type: "string",
                },
                key: {
                  description: "The field key.",
                  type: "string",
                },
                reference: {
                  $ref: "#/definitions/MetafieldReference",
                  description:
                    "A referenced object if the field type is a resource reference.",
                },
                references: {
                  description:
                    "A list of referenced objects if the field type is a resource reference list.",
                  properties: {
                    __typename: {
                      const: "MetafieldReferenceConnection",
                      type: "string",
                    },
                    edges: {
                      description: "A list of edges.",
                      items: {
                        description:
                          "An auto-generated type which holds one MetafieldReference and a cursor during pagination.",
                        properties: {
                          __typename: {
                            const: "MetafieldReferenceEdge",
                            type: "string",
                          },
                          cursor: {
                            description: "A cursor for use in pagination.",
                            type: "string",
                          },
                          node: {
                            $ref: "#/definitions/MetafieldReference",
                            description:
                              "The item at the end of MetafieldReferenceEdge.",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                    nodes: {
                      description:
                        "A list of the nodes contained in MetafieldReferenceEdge.",
                      items: {
                        $ref: "#/definitions/MetafieldReference",
                      },
                      type: "array",
                    },
                    pageInfo: {
                      description: "Information to aid in pagination.",
                      properties: {
                        __typename: {
                          const: "PageInfo",
                          type: "string",
                        },
                        endCursor: {
                          description:
                            "The cursor corresponding to the last node in edges.",
                          type: "string",
                        },
                        hasNextPage: {
                          description:
                            "Whether there are more pages to fetch following the current page.",
                          type: "boolean",
                        },
                        hasPreviousPage: {
                          description:
                            "Whether there are any pages prior to the current page.",
                          type: "boolean",
                        },
                        startCursor: {
                          description:
                            "The cursor corresponding to the first node in edges.",
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                  },
                  type: "object",
                },
                type: {
                  description:
                    "The type name of the field.\nSee the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).",
                  type: "string",
                },
                value: {
                  description: "The field value.",
                  type: "string",
                },
              },
              type: "object",
            },
            fields: {
              description:
                "All object fields with defined values.\nOmitted object keys can be assumed null, and no guarantees are made about field order.",
              items: {
                description: "Provides the value of a Metaobject field.",
                properties: {
                  __typename: {
                    const: "MetaobjectField",
                    type: "string",
                  },
                  key: {
                    description: "The field key.",
                    type: "string",
                  },
                  reference: {
                    $ref: "#/definitions/MetafieldReference",
                    description:
                      "A referenced object if the field type is a resource reference.",
                  },
                  references: {
                    description:
                      "A list of referenced objects if the field type is a resource reference list.",
                    properties: {
                      __typename: {
                        const: "MetafieldReferenceConnection",
                        type: "string",
                      },
                      edges: {
                        description: "A list of edges.",
                        items: {
                          description:
                            "An auto-generated type which holds one MetafieldReference and a cursor during pagination.",
                          properties: {
                            __typename: {
                              const: "MetafieldReferenceEdge",
                              type: "string",
                            },
                            cursor: {
                              description: "A cursor for use in pagination.",
                              type: "string",
                            },
                            node: {
                              $ref: "#/definitions/MetafieldReference",
                              description:
                                "The item at the end of MetafieldReferenceEdge.",
                            },
                          },
                          type: "object",
                        },
                        type: "array",
                      },
                      nodes: {
                        description:
                          "A list of the nodes contained in MetafieldReferenceEdge.",
                        items: {
                          $ref: "#/definitions/MetafieldReference",
                        },
                        type: "array",
                      },
                      pageInfo: {
                        description: "Information to aid in pagination.",
                        properties: {
                          __typename: {
                            const: "PageInfo",
                            type: "string",
                          },
                          endCursor: {
                            description:
                              "The cursor corresponding to the last node in edges.",
                            type: "string",
                          },
                          hasNextPage: {
                            description:
                              "Whether there are more pages to fetch following the current page.",
                            type: "boolean",
                          },
                          hasPreviousPage: {
                            description:
                              "Whether there are any pages prior to the current page.",
                            type: "boolean",
                          },
                          startCursor: {
                            description:
                              "The cursor corresponding to the first node in edges.",
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: {
                    description:
                      "The type name of the field.\nSee the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).",
                    type: "string",
                  },
                  value: {
                    description: "The field value.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            handle: {
              description:
                "The unique handle of the metaobject. Useful as a custom ID.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            type: {
              description:
                "The type of the metaobject. Defines the namespace of its associated metafields.",
              type: "string",
            },
            updatedAt: {
              description:
                "The date and time when the metaobject was last updated.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "An instance of a user-defined model based on a MetaobjectDefinition.",
    },
    Model3d: {
      allOf: [
        {
          description: "Represents a media interface.",
          properties: {
            alt: {
              description:
                "A word or phrase to share the nature or contents of a media.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            mediaContentType: {
              $ref: "#/definitions/MediaContentType",
              description: "The media content type.",
            },
            presentation: {
              $ref: "#/definitions/MediaPresentation",
              description: "The presentation for a media.",
            },
            previewImage: {
              description: "The preview image for the media.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Model3d",
              type: "string",
            },
            alt: {
              description:
                "A word or phrase to share the nature or contents of a media.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            mediaContentType: {
              $ref: "#/definitions/MediaContentType",
              description: "The media content type.",
            },
            presentation: {
              $ref: "#/definitions/MediaPresentation",
              description: "The presentation for a media.",
            },
            previewImage: {
              description: "The preview image for the media.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
            sources: {
              description: "The sources for a 3d model.",
              items: {
                description:
                  "Represents a source for a Shopify hosted 3d model.",
                properties: {
                  __typename: {
                    const: "Model3dSource",
                    type: "string",
                  },
                  filesize: {
                    description: "The filesize of the 3d model.",
                    type: "number",
                  },
                  format: {
                    description: "The format of the 3d model.",
                    type: "string",
                  },
                  mimeType: {
                    description: "The MIME type of the 3d model.",
                    type: "string",
                  },
                  url: {
                    description: "The URL of the 3d model.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
          },
          type: "object",
        },
      ],
      description: "Represents a Shopify hosted 3D model.",
    },
    'Omit<ShopifyProduct,"variants"|"images">': {
      properties: {
        availableForSale: {
          description:
            "Indicates if at least one product variant is available for sale.",
          type: "boolean",
        },
        descriptionHtml: {
          description:
            "The description of the product, complete with HTML formatting.",
          type: "string",
        },
        featuredImage: {
          description:
            "The featured image for the product.\n\nThis field is functionally equivalent to `images(first: 1)`.",
          properties: {
            __typename: {
              const: "Image",
              type: "string",
            },
            altText: {
              description:
                "A word or phrase to share the nature or contents of an image.",
              type: "string",
            },
            height: {
              description:
                "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
              type: "number",
            },
            id: {
              description: "A unique ID for the image.",
              type: "string",
            },
            originalSrc: {
              description:
                "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
              type: "string",
            },
            src: {
              description: "The location of the image as a URL.",
              type: "string",
            },
            transformedSrc: {
              description:
                'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
              type: "string",
            },
            url: {
              description:
                'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
              type: "string",
            },
            width: {
              description:
                "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
              type: "number",
            },
          },
          type: "object",
        },
        handle: {
          description:
            "A human-friendly unique string for the Product automatically generated from its title.\nThey are used by the Liquid templating language to refer to objects.",
          type: "string",
        },
        id: {
          description: "A globally-unique ID.",
          type: "string",
        },
        metafields: {
          description:
            "The metafields associated with the resource matching the supplied list of namespaces and keys.",
          items: {
            $ref: "#/definitions/Metafield",
          },
          type: "array",
        },
        options: {
          description: "List of product options.",
          items: {
            $ref: "#/definitions/ProductOption",
          },
          type: "array",
        },
        priceRange: {
          description: "The price range.",
          properties: {
            __typename: {
              const: "ProductPriceRange",
              type: "string",
            },
            maxVariantPrice: {
              description: "The highest variant's price.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            minVariantPrice: {
              description: "The lowest variant's price.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        productType: {
          description:
            "A categorization that a product can be tagged with, commonly used for filtering and searching.",
          type: "string",
        },
        tags: {
          description:
            "A comma separated list of tags that have been added to the product.\nAdditional access scope required for private apps: unauthenticated_read_product_tags.",
          items: {
            type: "string",
          },
          type: "array",
        },
        title: {
          description: "The product’s title.",
          type: "string",
        },
      },
      type: "object",
    },
    Order: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Order",
              type: "string",
            },
            billingAddress: {
              $ref: "#/definitions/MailingAddress",
              description: "The address associated with the payment method.",
            },
            cancelReason: {
              $ref: "#/definitions/Maybe_3",
              description:
                "The reason for the order's cancellation. Returns `null` if the order wasn't canceled.",
            },
            canceledAt: {
              description:
                "The date and time when the order was canceled. Returns null if the order wasn't canceled.",
              type: "string",
            },
            currencyCode: {
              $ref: "#/definitions/CurrencyCode",
              description: "The code of the currency used for the payment.",
            },
            currentSubtotalPrice: {
              description:
                "The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            currentTotalDuties: {
              description:
                "The total cost of duties for the order, including refunds.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            currentTotalPrice: {
              description:
                "The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            currentTotalTax: {
              description:
                "The total of all taxes applied to the order, excluding taxes for returned line items.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            customAttributes: {
              description:
                "A list of the custom attributes added to the order.",
              items: {
                description: "Represents a generic custom attribute.",
                properties: {
                  __typename: {
                    const: "Attribute",
                    type: "string",
                  },
                  key: {
                    description: "Key or name of the attribute.",
                    type: "string",
                  },
                  value: {
                    description: "Value of the attribute.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            customerLocale: {
              description:
                "The locale code in which this specific order happened.",
              type: "string",
            },
            customerUrl: {
              description:
                "The unique URL that the customer can use to access the order.",
              type: "string",
            },
            discountApplications: {
              description: "Discounts that have been applied on the order.",
              properties: {
                __typename: {
                  const: "DiscountApplicationConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one DiscountApplication and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "DiscountApplicationEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        anyOf: [
                          {
                            $ref: "#/definitions/AutomaticDiscountApplication",
                            description:
                              "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                          },
                          {
                            $ref: "#/definitions/DiscountCodeApplication",
                            description:
                              "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                          },
                          {
                            $ref: "#/definitions/ManualDiscountApplication",
                            description:
                              "Manual discount applications capture the intentions of a discount that was manually created.",
                          },
                          {
                            $ref: "#/definitions/ScriptDiscountApplication",
                            description:
                              "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                          },
                        ],
                        description:
                          "The item at the end of DiscountApplicationEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in DiscountApplicationEdge.",
                  items: {
                    anyOf: [
                      {
                        $ref: "#/definitions/AutomaticDiscountApplication",
                        description:
                          "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                      },
                      {
                        $ref: "#/definitions/DiscountCodeApplication",
                        description:
                          "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                      },
                      {
                        $ref: "#/definitions/ManualDiscountApplication",
                        description:
                          "Manual discount applications capture the intentions of a discount that was manually created.",
                      },
                      {
                        $ref: "#/definitions/ScriptDiscountApplication",
                        description:
                          "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                      },
                    ],
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            edited: {
              description:
                "Whether the order has had any edits applied or not.",
              type: "boolean",
            },
            email: {
              description: "The customer's email address.",
              type: "string",
            },
            financialStatus: {
              $ref: "#/definitions/Maybe_4",
              description: "The financial status of the order.",
            },
            fulfillmentStatus: {
              $ref: "#/definitions/OrderFulfillmentStatus",
              description: "The fulfillment status for the order.",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            lineItems: {
              description: "List of the order’s line items.",
              properties: {
                __typename: {
                  const: "OrderLineItemConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one OrderLineItem and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "OrderLineItemEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        description:
                          "The item at the end of OrderLineItemEdge.",
                        properties: {
                          __typename: {
                            const: "OrderLineItem",
                            type: "string",
                          },
                          currentQuantity: {
                            description:
                              "The number of entries associated to the line item minus the items that have been removed.",
                            type: "number",
                          },
                          customAttributes: {
                            description:
                              "List of custom attributes associated to the line item.",
                            items: {
                              description:
                                "Represents a generic custom attribute.",
                              properties: {
                                __typename: {
                                  const: "Attribute",
                                  type: "string",
                                },
                                key: {
                                  description: "Key or name of the attribute.",
                                  type: "string",
                                },
                                value: {
                                  description: "Value of the attribute.",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            type: "array",
                          },
                          discountAllocations: {
                            description:
                              "The discounts that have been allocated onto the order line item by discount applications.",
                            items: {
                              description:
                                "An amount discounting the line that has been allocated by a discount.",
                              properties: {
                                __typename: {
                                  const: "DiscountAllocation",
                                  type: "string",
                                },
                                allocatedAmount: {
                                  description: "Amount of discount allocated.",
                                  properties: {
                                    __typename: {
                                      const: "MoneyV2",
                                      type: "string",
                                    },
                                    amount: {
                                      description: "Decimal money amount.",
                                      type: "string",
                                    },
                                    currencyCode: {
                                      $ref: "#/definitions/CurrencyCode",
                                      description: "Currency of the money.",
                                    },
                                  },
                                  type: "object",
                                },
                                discountApplication: {
                                  anyOf: [
                                    {
                                      $ref: "#/definitions/AutomaticDiscountApplication",
                                      description:
                                        "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                                    },
                                    {
                                      $ref: "#/definitions/DiscountCodeApplication",
                                      description:
                                        "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                                    },
                                    {
                                      $ref: "#/definitions/ManualDiscountApplication",
                                      description:
                                        "Manual discount applications capture the intentions of a discount that was manually created.",
                                    },
                                    {
                                      $ref: "#/definitions/ScriptDiscountApplication",
                                      description:
                                        "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                                    },
                                  ],
                                  description:
                                    "The discount this allocated amount originated from.",
                                },
                              },
                              type: "object",
                            },
                            type: "array",
                          },
                          discountedTotalPrice: {
                            description:
                              "The total price of the line item, including discounts, and displayed in the presentment currency.",
                            properties: {
                              __typename: {
                                const: "MoneyV2",
                                type: "string",
                              },
                              amount: {
                                description: "Decimal money amount.",
                                type: "string",
                              },
                              currencyCode: {
                                $ref: "#/definitions/CurrencyCode",
                                description: "Currency of the money.",
                              },
                            },
                            type: "object",
                          },
                          originalTotalPrice: {
                            description:
                              "The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency.",
                            properties: {
                              __typename: {
                                const: "MoneyV2",
                                type: "string",
                              },
                              amount: {
                                description: "Decimal money amount.",
                                type: "string",
                              },
                              currencyCode: {
                                $ref: "#/definitions/CurrencyCode",
                                description: "Currency of the money.",
                              },
                            },
                            type: "object",
                          },
                          quantity: {
                            description:
                              "The number of products variants associated to the line item.",
                            type: "number",
                          },
                          title: {
                            description:
                              "The title of the product combined with title of the variant.",
                            type: "string",
                          },
                          variant: {
                            $ref: "#/definitions/ProductVariant",
                            description:
                              "The product variant object associated to the line item.",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in OrderLineItemEdge.",
                  items: {
                    description:
                      "Represents a single line in an order. There is one line item for each distinct product variant.",
                    properties: {
                      __typename: {
                        const: "OrderLineItem",
                        type: "string",
                      },
                      currentQuantity: {
                        description:
                          "The number of entries associated to the line item minus the items that have been removed.",
                        type: "number",
                      },
                      customAttributes: {
                        description:
                          "List of custom attributes associated to the line item.",
                        items: {
                          description: "Represents a generic custom attribute.",
                          properties: {
                            __typename: {
                              const: "Attribute",
                              type: "string",
                            },
                            key: {
                              description: "Key or name of the attribute.",
                              type: "string",
                            },
                            value: {
                              description: "Value of the attribute.",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        type: "array",
                      },
                      discountAllocations: {
                        description:
                          "The discounts that have been allocated onto the order line item by discount applications.",
                        items: {
                          description:
                            "An amount discounting the line that has been allocated by a discount.",
                          properties: {
                            __typename: {
                              const: "DiscountAllocation",
                              type: "string",
                            },
                            allocatedAmount: {
                              description: "Amount of discount allocated.",
                              properties: {
                                __typename: {
                                  const: "MoneyV2",
                                  type: "string",
                                },
                                amount: {
                                  description: "Decimal money amount.",
                                  type: "string",
                                },
                                currencyCode: {
                                  $ref: "#/definitions/CurrencyCode",
                                  description: "Currency of the money.",
                                },
                              },
                              type: "object",
                            },
                            discountApplication: {
                              anyOf: [
                                {
                                  $ref: "#/definitions/AutomaticDiscountApplication",
                                  description:
                                    "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                                },
                                {
                                  $ref: "#/definitions/DiscountCodeApplication",
                                  description:
                                    "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                                },
                                {
                                  $ref: "#/definitions/ManualDiscountApplication",
                                  description:
                                    "Manual discount applications capture the intentions of a discount that was manually created.",
                                },
                                {
                                  $ref: "#/definitions/ScriptDiscountApplication",
                                  description:
                                    "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                                },
                              ],
                              description:
                                "The discount this allocated amount originated from.",
                            },
                          },
                          type: "object",
                        },
                        type: "array",
                      },
                      discountedTotalPrice: {
                        description:
                          "The total price of the line item, including discounts, and displayed in the presentment currency.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      originalTotalPrice: {
                        description:
                          "The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      quantity: {
                        description:
                          "The number of products variants associated to the line item.",
                        type: "number",
                      },
                      title: {
                        description:
                          "The title of the product combined with title of the variant.",
                        type: "string",
                      },
                      variant: {
                        $ref: "#/definitions/ProductVariant",
                        description:
                          "The product variant object associated to the line item.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            name: {
              description:
                "Unique identifier for the order that appears on the order.\nFor example, _#1000_ or _Store1001.",
              type: "string",
            },
            orderNumber: {
              description:
                "A unique numeric identifier for the order for use by shop owner and customer.",
              type: "number",
            },
            originalTotalDuties: {
              description: "The total cost of duties charged at checkout.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            originalTotalPrice: {
              description:
                "The total price of the order before any applied edits.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            phone: {
              description:
                "The customer's phone number for receiving SMS notifications.",
              type: "string",
            },
            processedAt: {
              description:
                "The date and time when the order was imported.\nThis value can be set to dates in the past when importing from other systems.\nIf no value is provided, it will be auto-generated based on current date and time.",
              type: "string",
            },
            shippingAddress: {
              $ref: "#/definitions/MailingAddress",
              description: "The address to where the order will be shipped.",
            },
            shippingDiscountAllocations: {
              description:
                "The discounts that have been allocated onto the shipping line by discount applications.",
              items: {
                description:
                  "An amount discounting the line that has been allocated by a discount.",
                properties: {
                  __typename: {
                    const: "DiscountAllocation",
                    type: "string",
                  },
                  allocatedAmount: {
                    description: "Amount of discount allocated.",
                    properties: {
                      __typename: {
                        const: "MoneyV2",
                        type: "string",
                      },
                      amount: {
                        description: "Decimal money amount.",
                        type: "string",
                      },
                      currencyCode: {
                        $ref: "#/definitions/CurrencyCode",
                        description: "Currency of the money.",
                      },
                    },
                    type: "object",
                  },
                  discountApplication: {
                    anyOf: [
                      {
                        $ref: "#/definitions/AutomaticDiscountApplication",
                        description:
                          "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                      },
                      {
                        $ref: "#/definitions/DiscountCodeApplication",
                        description:
                          "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                      },
                      {
                        $ref: "#/definitions/ManualDiscountApplication",
                        description:
                          "Manual discount applications capture the intentions of a discount that was manually created.",
                      },
                      {
                        $ref: "#/definitions/ScriptDiscountApplication",
                        description:
                          "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                      },
                    ],
                    description:
                      "The discount this allocated amount originated from.",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            statusUrl: {
              description: "The unique URL for the order's status page.",
              type: "string",
            },
            subtotalPrice: {
              description: "Price of the order before shipping and taxes.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            subtotalPriceV2: {
              description:
                "Price of the order before duties, shipping and taxes.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            successfulFulfillments: {
              description: "List of the order’s successful fulfillments.",
              items: {
                description: "Represents a single fulfillment in an order.",
                properties: {
                  __typename: {
                    const: "Fulfillment",
                    type: "string",
                  },
                  fulfillmentLineItems: {
                    description: "List of the fulfillment's line items.",
                    properties: {
                      __typename: {
                        const: "FulfillmentLineItemConnection",
                        type: "string",
                      },
                      edges: {
                        description: "A list of edges.",
                        items: {
                          description:
                            "An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.",
                          properties: {
                            __typename: {
                              const: "FulfillmentLineItemEdge",
                              type: "string",
                            },
                            cursor: {
                              description: "A cursor for use in pagination.",
                              type: "string",
                            },
                            node: {
                              description:
                                "The item at the end of FulfillmentLineItemEdge.",
                              properties: {
                                __typename: {
                                  const: "FulfillmentLineItem",
                                  type: "string",
                                },
                                lineItem: {
                                  description:
                                    "The associated order's line item.",
                                  properties: {
                                    __typename: {
                                      const: "OrderLineItem",
                                      type: "string",
                                    },
                                    currentQuantity: {
                                      description:
                                        "The number of entries associated to the line item minus the items that have been removed.",
                                      type: "number",
                                    },
                                    customAttributes: {
                                      description:
                                        "List of custom attributes associated to the line item.",
                                      items: {
                                        description:
                                          "Represents a generic custom attribute.",
                                        properties: {
                                          __typename: {
                                            const: "Attribute",
                                            type: "string",
                                          },
                                          key: {
                                            description:
                                              "Key or name of the attribute.",
                                            type: "string",
                                          },
                                          value: {
                                            description:
                                              "Value of the attribute.",
                                            type: "string",
                                          },
                                        },
                                        type: "object",
                                      },
                                      type: "array",
                                    },
                                    discountAllocations: {
                                      description:
                                        "The discounts that have been allocated onto the order line item by discount applications.",
                                      items: {
                                        description:
                                          "An amount discounting the line that has been allocated by a discount.",
                                        properties: {
                                          __typename: {
                                            const: "DiscountAllocation",
                                            type: "string",
                                          },
                                          allocatedAmount: {
                                            description:
                                              "Amount of discount allocated.",
                                            properties: {
                                              __typename: {
                                                const: "MoneyV2",
                                                type: "string",
                                              },
                                              amount: {
                                                description:
                                                  "Decimal money amount.",
                                                type: "string",
                                              },
                                              currencyCode: {
                                                $ref: "#/definitions/CurrencyCode",
                                                description:
                                                  "Currency of the money.",
                                              },
                                            },
                                            type: "object",
                                          },
                                          discountApplication: {
                                            anyOf: [
                                              {
                                                $ref: "#/definitions/AutomaticDiscountApplication",
                                                description:
                                                  "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                                              },
                                              {
                                                $ref: "#/definitions/DiscountCodeApplication",
                                                description:
                                                  "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                                              },
                                              {
                                                $ref: "#/definitions/ManualDiscountApplication",
                                                description:
                                                  "Manual discount applications capture the intentions of a discount that was manually created.",
                                              },
                                              {
                                                $ref: "#/definitions/ScriptDiscountApplication",
                                                description:
                                                  "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                                              },
                                            ],
                                            description:
                                              "The discount this allocated amount originated from.",
                                          },
                                        },
                                        type: "object",
                                      },
                                      type: "array",
                                    },
                                    discountedTotalPrice: {
                                      description:
                                        "The total price of the line item, including discounts, and displayed in the presentment currency.",
                                      properties: {
                                        __typename: {
                                          const: "MoneyV2",
                                          type: "string",
                                        },
                                        amount: {
                                          description: "Decimal money amount.",
                                          type: "string",
                                        },
                                        currencyCode: {
                                          $ref: "#/definitions/CurrencyCode",
                                          description: "Currency of the money.",
                                        },
                                      },
                                      type: "object",
                                    },
                                    originalTotalPrice: {
                                      description:
                                        "The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency.",
                                      properties: {
                                        __typename: {
                                          const: "MoneyV2",
                                          type: "string",
                                        },
                                        amount: {
                                          description: "Decimal money amount.",
                                          type: "string",
                                        },
                                        currencyCode: {
                                          $ref: "#/definitions/CurrencyCode",
                                          description: "Currency of the money.",
                                        },
                                      },
                                      type: "object",
                                    },
                                    quantity: {
                                      description:
                                        "The number of products variants associated to the line item.",
                                      type: "number",
                                    },
                                    title: {
                                      description:
                                        "The title of the product combined with title of the variant.",
                                      type: "string",
                                    },
                                    variant: {
                                      $ref: "#/definitions/ProductVariant",
                                      description:
                                        "The product variant object associated to the line item.",
                                    },
                                  },
                                  type: "object",
                                },
                                quantity: {
                                  description:
                                    "The amount fulfilled in this fulfillment.",
                                  type: "number",
                                },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        type: "array",
                      },
                      nodes: {
                        description:
                          "A list of the nodes contained in FulfillmentLineItemEdge.",
                        items: {
                          description:
                            "Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item.",
                          properties: {
                            __typename: {
                              const: "FulfillmentLineItem",
                              type: "string",
                            },
                            lineItem: {
                              description: "The associated order's line item.",
                              properties: {
                                __typename: {
                                  const: "OrderLineItem",
                                  type: "string",
                                },
                                currentQuantity: {
                                  description:
                                    "The number of entries associated to the line item minus the items that have been removed.",
                                  type: "number",
                                },
                                customAttributes: {
                                  description:
                                    "List of custom attributes associated to the line item.",
                                  items: {
                                    description:
                                      "Represents a generic custom attribute.",
                                    properties: {
                                      __typename: {
                                        const: "Attribute",
                                        type: "string",
                                      },
                                      key: {
                                        description:
                                          "Key or name of the attribute.",
                                        type: "string",
                                      },
                                      value: {
                                        description: "Value of the attribute.",
                                        type: "string",
                                      },
                                    },
                                    type: "object",
                                  },
                                  type: "array",
                                },
                                discountAllocations: {
                                  description:
                                    "The discounts that have been allocated onto the order line item by discount applications.",
                                  items: {
                                    description:
                                      "An amount discounting the line that has been allocated by a discount.",
                                    properties: {
                                      __typename: {
                                        const: "DiscountAllocation",
                                        type: "string",
                                      },
                                      allocatedAmount: {
                                        description:
                                          "Amount of discount allocated.",
                                        properties: {
                                          __typename: {
                                            const: "MoneyV2",
                                            type: "string",
                                          },
                                          amount: {
                                            description:
                                              "Decimal money amount.",
                                            type: "string",
                                          },
                                          currencyCode: {
                                            $ref: "#/definitions/CurrencyCode",
                                            description:
                                              "Currency of the money.",
                                          },
                                        },
                                        type: "object",
                                      },
                                      discountApplication: {
                                        anyOf: [
                                          {
                                            $ref: "#/definitions/AutomaticDiscountApplication",
                                            description:
                                              "Automatic discount applications capture the intentions of a discount that was automatically applied.",
                                          },
                                          {
                                            $ref: "#/definitions/DiscountCodeApplication",
                                            description:
                                              "Discount code applications capture the intentions of a discount code at\nthe time that it is applied.",
                                          },
                                          {
                                            $ref: "#/definitions/ManualDiscountApplication",
                                            description:
                                              "Manual discount applications capture the intentions of a discount that was manually created.",
                                          },
                                          {
                                            $ref: "#/definitions/ScriptDiscountApplication",
                                            description:
                                              "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
                                          },
                                        ],
                                        description:
                                          "The discount this allocated amount originated from.",
                                      },
                                    },
                                    type: "object",
                                  },
                                  type: "array",
                                },
                                discountedTotalPrice: {
                                  description:
                                    "The total price of the line item, including discounts, and displayed in the presentment currency.",
                                  properties: {
                                    __typename: {
                                      const: "MoneyV2",
                                      type: "string",
                                    },
                                    amount: {
                                      description: "Decimal money amount.",
                                      type: "string",
                                    },
                                    currencyCode: {
                                      $ref: "#/definitions/CurrencyCode",
                                      description: "Currency of the money.",
                                    },
                                  },
                                  type: "object",
                                },
                                originalTotalPrice: {
                                  description:
                                    "The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency.",
                                  properties: {
                                    __typename: {
                                      const: "MoneyV2",
                                      type: "string",
                                    },
                                    amount: {
                                      description: "Decimal money amount.",
                                      type: "string",
                                    },
                                    currencyCode: {
                                      $ref: "#/definitions/CurrencyCode",
                                      description: "Currency of the money.",
                                    },
                                  },
                                  type: "object",
                                },
                                quantity: {
                                  description:
                                    "The number of products variants associated to the line item.",
                                  type: "number",
                                },
                                title: {
                                  description:
                                    "The title of the product combined with title of the variant.",
                                  type: "string",
                                },
                                variant: {
                                  $ref: "#/definitions/ProductVariant",
                                  description:
                                    "The product variant object associated to the line item.",
                                },
                              },
                              type: "object",
                            },
                            quantity: {
                              description:
                                "The amount fulfilled in this fulfillment.",
                              type: "number",
                            },
                          },
                          type: "object",
                        },
                        type: "array",
                      },
                      pageInfo: {
                        description: "Information to aid in pagination.",
                        properties: {
                          __typename: {
                            const: "PageInfo",
                            type: "string",
                          },
                          endCursor: {
                            description:
                              "The cursor corresponding to the last node in edges.",
                            type: "string",
                          },
                          hasNextPage: {
                            description:
                              "Whether there are more pages to fetch following the current page.",
                            type: "boolean",
                          },
                          hasPreviousPage: {
                            description:
                              "Whether there are any pages prior to the current page.",
                            type: "boolean",
                          },
                          startCursor: {
                            description:
                              "The cursor corresponding to the first node in edges.",
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  trackingCompany: {
                    description: "The name of the tracking company.",
                    type: "string",
                  },
                  trackingInfo: {
                    description:
                      "Tracking information associated with the fulfillment,\nsuch as the tracking number and tracking URL.",
                    items: {
                      description:
                        "Tracking information associated with the fulfillment.",
                      properties: {
                        __typename: {
                          const: "FulfillmentTrackingInfo",
                          type: "string",
                        },
                        number: {
                          description:
                            "The tracking number of the fulfillment.",
                          type: "string",
                        },
                        url: {
                          description: "The URL to track the fulfillment.",
                          type: "string",
                        },
                      },
                      type: "object",
                    },
                    type: "array",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            totalPrice: {
              description:
                "The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalPriceV2: {
              description:
                "The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalRefunded: {
              description: "The total amount that has been refunded.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalRefundedV2: {
              description: "The total amount that has been refunded.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalShippingPrice: {
              description: "The total cost of shipping.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalShippingPriceV2: {
              description: "The total cost of shipping.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalTax: {
              description: "The total cost of taxes.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            totalTaxV2: {
              description: "The total cost of taxes.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
      ],
      description:
        "An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.",
    },
    OrderFulfillmentStatus: {
      description:
        "Represents the order's aggregated fulfillment status for display purposes.",
      enum: [
        "FULFILLED",
        "IN_PROGRESS",
        "ON_HOLD",
        "OPEN",
        "PARTIALLY_FULFILLED",
        "PENDING_FULFILLMENT",
        "RESTOCKED",
        "SCHEDULED",
        "UNFULFILLED",
      ],
      type: "string",
    },
    Page: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          description:
            "Represents a resource that can be published to the Online Store sales channel.",
          properties: {
            onlineStoreUrl: {
              description:
                "The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          description:
            "Represents a resource that you can track the origin of the search traffic.",
          properties: {
            trackingParameters: {
              description:
                "A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Page",
              type: "string",
            },
            body: {
              description:
                "The description of the page, complete with HTML formatting.",
              type: "string",
            },
            bodySummary: {
              description: "Summary of the page body.",
              type: "string",
            },
            createdAt: {
              description: "The timestamp of the page creation.",
              type: "string",
            },
            handle: {
              description:
                "A human-friendly unique string for the page automatically generated from its title.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            onlineStoreUrl: {
              description:
                "The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.",
              type: "string",
            },
            seo: {
              description: "The page's SEO information.",
              properties: {
                __typename: {
                  const: "SEO",
                  type: "string",
                },
                description: {
                  description: "The meta description.",
                  type: "string",
                },
                title: {
                  description: "The SEO title.",
                  type: "string",
                },
              },
              type: "object",
            },
            title: {
              description: "The title of the page.",
              type: "string",
            },
            trackingParameters: {
              description:
                "A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.",
              type: "string",
            },
            updatedAt: {
              description: "The timestamp of the latest page update.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store.",
    },
    'Pick<Image,"id">': {
      properties: {
        id: {
          description: "A unique ID for the image.",
          type: "string",
        },
      },
      type: "object",
    },
    PricingValue: {
      anyOf: [
        {
          description: "A monetary value with currency.",
          properties: {
            __typename: {
              const: "MoneyV2",
              type: "string",
            },
            amount: {
              description: "Decimal money amount.",
              type: "string",
            },
            currencyCode: {
              $ref: "#/definitions/CurrencyCode",
              description: "Currency of the money.",
            },
          },
          type: "object",
        },
        {
          description: "The value of the percentage pricing object.",
          properties: {
            __typename: {
              const: "PricingPercentageValue",
              type: "string",
            },
            percentage: {
              description: "The percentage value of the object.",
              type: "number",
            },
          },
          type: "object",
        },
      ],
      description:
        "The price value (fixed or percentage) for a discount application.",
    },
    ProductOption: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "ProductOption",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            name: {
              description: "The product option’s name.",
              type: "string",
            },
            values: {
              description:
                "The corresponding value to the product option name.",
              items: {
                type: "string",
              },
              type: "array",
            },
          },
          type: "object",
        },
      ],
      description:
        'Product property names like "Size", "Color", and "Material" that the customers can select.\nVariants are selected based on permutations of these options.\n255 characters limit each.',
    },
    ProductVariant: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "ProductVariant",
              type: "string",
            },
            availableForSale: {
              description:
                "Indicates if the product variant is available for sale.",
              type: "boolean",
            },
            barcode: {
              description:
                "The barcode (for example, ISBN, UPC, or GTIN) associated with the variant.",
              type: "string",
            },
            compareAtPrice: {
              description:
                "The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            compareAtPriceV2: {
              description:
                "The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            currentlyNotInStock: {
              description:
                "Whether a product is out of stock but still available for purchase (used for backorders).",
              type: "boolean",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            image: {
              description:
                "Image associated with the product variant. This field falls back to the product image if no image is available.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            price: {
              description: "The product variant’s price.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            priceV2: {
              description: "The product variant’s price.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            product: {
              $ref: "#/definitions/Product_1",
              description:
                "The product object that the product variant belongs to.",
            },
            quantityAvailable: {
              description:
                "The total sellable quantity of the variant for online sales channels.",
              type: "number",
            },
            requiresShipping: {
              description:
                "Whether a customer needs to provide a shipping address when placing an order for the product variant.",
              type: "boolean",
            },
            selectedOptions: {
              description: "List of product options applied to the variant.",
              items: {
                description:
                  "Properties used by customers to select a product variant.\nProducts can have multiple options, like different sizes or colors.",
                properties: {
                  __typename: {
                    const: "SelectedOption",
                    type: "string",
                  },
                  name: {
                    description: "The product option’s name.",
                    type: "string",
                  },
                  value: {
                    description: "The product option’s value.",
                    type: "string",
                  },
                },
                type: "object",
              },
              type: "array",
            },
            sellingPlanAllocations: {
              description:
                "Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing.",
              properties: {
                __typename: {
                  const: "SellingPlanAllocationConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "SellingPlanAllocationEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        description:
                          "The item at the end of SellingPlanAllocationEdge.",
                        properties: {
                          __typename: {
                            const: "SellingPlanAllocation",
                            type: "string",
                          },
                          checkoutChargeAmount: {
                            description:
                              "The checkout charge amount due for the purchase.",
                            properties: {
                              __typename: {
                                const: "MoneyV2",
                                type: "string",
                              },
                              amount: {
                                description: "Decimal money amount.",
                                type: "string",
                              },
                              currencyCode: {
                                $ref: "#/definitions/CurrencyCode",
                                description: "Currency of the money.",
                              },
                            },
                            type: "object",
                          },
                          priceAdjustments: {
                            description:
                              "A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it.",
                            items: {
                              description:
                                "The resulting prices for variants when they're purchased with a specific selling plan.",
                              properties: {
                                __typename: {
                                  const: "SellingPlanAllocationPriceAdjustment",
                                  type: "string",
                                },
                                compareAtPrice: {
                                  description:
                                    "The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00.",
                                  properties: {
                                    __typename: {
                                      const: "MoneyV2",
                                      type: "string",
                                    },
                                    amount: {
                                      description: "Decimal money amount.",
                                      type: "string",
                                    },
                                    currencyCode: {
                                      $ref: "#/definitions/CurrencyCode",
                                      description: "Currency of the money.",
                                    },
                                  },
                                  type: "object",
                                },
                                perDeliveryPrice: {
                                  description:
                                    "The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00.",
                                  properties: {
                                    __typename: {
                                      const: "MoneyV2",
                                      type: "string",
                                    },
                                    amount: {
                                      description: "Decimal money amount.",
                                      type: "string",
                                    },
                                    currencyCode: {
                                      $ref: "#/definitions/CurrencyCode",
                                      description: "Currency of the money.",
                                    },
                                  },
                                  type: "object",
                                },
                                price: {
                                  description:
                                    "The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00.",
                                  properties: {
                                    __typename: {
                                      const: "MoneyV2",
                                      type: "string",
                                    },
                                    amount: {
                                      description: "Decimal money amount.",
                                      type: "string",
                                    },
                                    currencyCode: {
                                      $ref: "#/definitions/CurrencyCode",
                                      description: "Currency of the money.",
                                    },
                                  },
                                  type: "object",
                                },
                                unitPrice: {
                                  description:
                                    "The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`.",
                                  properties: {
                                    __typename: {
                                      const: "MoneyV2",
                                      type: "string",
                                    },
                                    amount: {
                                      description: "Decimal money amount.",
                                      type: "string",
                                    },
                                    currencyCode: {
                                      $ref: "#/definitions/CurrencyCode",
                                      description: "Currency of the money.",
                                    },
                                  },
                                  type: "object",
                                },
                              },
                              type: "object",
                            },
                            type: "array",
                          },
                          remainingBalanceChargeAmount: {
                            description:
                              "The remaining balance charge amount due for the purchase.",
                            properties: {
                              __typename: {
                                const: "MoneyV2",
                                type: "string",
                              },
                              amount: {
                                description: "Decimal money amount.",
                                type: "string",
                              },
                              currencyCode: {
                                $ref: "#/definitions/CurrencyCode",
                                description: "Currency of the money.",
                              },
                            },
                            type: "object",
                          },
                          sellingPlan: {
                            description:
                              "A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.",
                            properties: {
                              __typename: {
                                const: "SellingPlan",
                                type: "string",
                              },
                              checkoutCharge: {
                                description:
                                  "The initial payment due for the purchase.",
                                properties: {
                                  __typename: {
                                    const: "SellingPlanCheckoutCharge",
                                    type: "string",
                                  },
                                  type: {
                                    $ref: "#/definitions/SellingPlanCheckoutChargeType",
                                    description:
                                      "The charge type for the checkout charge.",
                                  },
                                  value: {
                                    $ref: "#/definitions/SellingPlanCheckoutChargeValue",
                                    description:
                                      "The charge value for the checkout charge.",
                                  },
                                },
                                type: "object",
                              },
                              description: {
                                description:
                                  "The description of the selling plan.",
                                type: "string",
                              },
                              id: {
                                description: "A globally-unique ID.",
                                type: "string",
                              },
                              name: {
                                description:
                                  "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.",
                                type: "string",
                              },
                              options: {
                                description:
                                  "The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                                items: {
                                  description:
                                    "An option provided by a Selling Plan.",
                                  properties: {
                                    __typename: {
                                      const: "SellingPlanOption",
                                      type: "string",
                                    },
                                    name: {
                                      description:
                                        'The name of the option (ie "Delivery every").',
                                      type: "string",
                                    },
                                    value: {
                                      description:
                                        'The value of the option (ie "Month").',
                                      type: "string",
                                    },
                                  },
                                  type: "object",
                                },
                                type: "array",
                              },
                              priceAdjustments: {
                                description:
                                  "The price adjustments that a selling plan makes when a variant is purchased with a selling plan.",
                                items: {
                                  description:
                                    "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.",
                                  properties: {
                                    __typename: {
                                      const: "SellingPlanPriceAdjustment",
                                      type: "string",
                                    },
                                    adjustmentValue: {
                                      $ref: "#/definitions/SellingPlanPriceAdjustmentValue",
                                      description:
                                        "The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.",
                                    },
                                    orderCount: {
                                      description:
                                        "The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.",
                                      type: "number",
                                    },
                                  },
                                  type: "object",
                                },
                                type: "array",
                              },
                              recurringDeliveries: {
                                description:
                                  "Whether purchasing the selling plan will result in multiple deliveries.",
                                type: "boolean",
                              },
                            },
                            type: "object",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in SellingPlanAllocationEdge.",
                  items: {
                    description:
                      "Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan.",
                    properties: {
                      __typename: {
                        const: "SellingPlanAllocation",
                        type: "string",
                      },
                      checkoutChargeAmount: {
                        description:
                          "The checkout charge amount due for the purchase.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      priceAdjustments: {
                        description:
                          "A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it.",
                        items: {
                          description:
                            "The resulting prices for variants when they're purchased with a specific selling plan.",
                          properties: {
                            __typename: {
                              const: "SellingPlanAllocationPriceAdjustment",
                              type: "string",
                            },
                            compareAtPrice: {
                              description:
                                "The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00.",
                              properties: {
                                __typename: {
                                  const: "MoneyV2",
                                  type: "string",
                                },
                                amount: {
                                  description: "Decimal money amount.",
                                  type: "string",
                                },
                                currencyCode: {
                                  $ref: "#/definitions/CurrencyCode",
                                  description: "Currency of the money.",
                                },
                              },
                              type: "object",
                            },
                            perDeliveryPrice: {
                              description:
                                "The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00.",
                              properties: {
                                __typename: {
                                  const: "MoneyV2",
                                  type: "string",
                                },
                                amount: {
                                  description: "Decimal money amount.",
                                  type: "string",
                                },
                                currencyCode: {
                                  $ref: "#/definitions/CurrencyCode",
                                  description: "Currency of the money.",
                                },
                              },
                              type: "object",
                            },
                            price: {
                              description:
                                "The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00.",
                              properties: {
                                __typename: {
                                  const: "MoneyV2",
                                  type: "string",
                                },
                                amount: {
                                  description: "Decimal money amount.",
                                  type: "string",
                                },
                                currencyCode: {
                                  $ref: "#/definitions/CurrencyCode",
                                  description: "Currency of the money.",
                                },
                              },
                              type: "object",
                            },
                            unitPrice: {
                              description:
                                "The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`.",
                              properties: {
                                __typename: {
                                  const: "MoneyV2",
                                  type: "string",
                                },
                                amount: {
                                  description: "Decimal money amount.",
                                  type: "string",
                                },
                                currencyCode: {
                                  $ref: "#/definitions/CurrencyCode",
                                  description: "Currency of the money.",
                                },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        type: "array",
                      },
                      remainingBalanceChargeAmount: {
                        description:
                          "The remaining balance charge amount due for the purchase.",
                        properties: {
                          __typename: {
                            const: "MoneyV2",
                            type: "string",
                          },
                          amount: {
                            description: "Decimal money amount.",
                            type: "string",
                          },
                          currencyCode: {
                            $ref: "#/definitions/CurrencyCode",
                            description: "Currency of the money.",
                          },
                        },
                        type: "object",
                      },
                      sellingPlan: {
                        description:
                          "A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.",
                        properties: {
                          __typename: {
                            const: "SellingPlan",
                            type: "string",
                          },
                          checkoutCharge: {
                            description:
                              "The initial payment due for the purchase.",
                            properties: {
                              __typename: {
                                const: "SellingPlanCheckoutCharge",
                                type: "string",
                              },
                              type: {
                                $ref: "#/definitions/SellingPlanCheckoutChargeType",
                                description:
                                  "The charge type for the checkout charge.",
                              },
                              value: {
                                $ref: "#/definitions/SellingPlanCheckoutChargeValue",
                                description:
                                  "The charge value for the checkout charge.",
                              },
                            },
                            type: "object",
                          },
                          description: {
                            description: "The description of the selling plan.",
                            type: "string",
                          },
                          id: {
                            description: "A globally-unique ID.",
                            type: "string",
                          },
                          name: {
                            description:
                              "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.",
                            type: "string",
                          },
                          options: {
                            description:
                              "The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                            items: {
                              description:
                                "An option provided by a Selling Plan.",
                              properties: {
                                __typename: {
                                  const: "SellingPlanOption",
                                  type: "string",
                                },
                                name: {
                                  description:
                                    'The name of the option (ie "Delivery every").',
                                  type: "string",
                                },
                                value: {
                                  description:
                                    'The value of the option (ie "Month").',
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            type: "array",
                          },
                          priceAdjustments: {
                            description:
                              "The price adjustments that a selling plan makes when a variant is purchased with a selling plan.",
                            items: {
                              description:
                                "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.",
                              properties: {
                                __typename: {
                                  const: "SellingPlanPriceAdjustment",
                                  type: "string",
                                },
                                adjustmentValue: {
                                  $ref: "#/definitions/SellingPlanPriceAdjustmentValue",
                                  description:
                                    "The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.",
                                },
                                orderCount: {
                                  description:
                                    "The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.",
                                  type: "number",
                                },
                              },
                              type: "object",
                            },
                            type: "array",
                          },
                          recurringDeliveries: {
                            description:
                              "Whether purchasing the selling plan will result in multiple deliveries.",
                            type: "boolean",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            sku: {
              description:
                "The SKU (stock keeping unit) associated with the variant.",
              type: "string",
            },
            storeAvailability: {
              description:
                "The in-store pickup availability of this variant by location.",
              properties: {
                __typename: {
                  const: "StoreAvailabilityConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one StoreAvailability and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "StoreAvailabilityEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        description:
                          "The item at the end of StoreAvailabilityEdge.",
                        properties: {
                          __typename: {
                            const: "StoreAvailability",
                            type: "string",
                          },
                          available: {
                            description:
                              "Whether the product variant is in-stock at this location.",
                            type: "boolean",
                          },
                          location: {
                            $ref: "#/definitions/Location",
                            description:
                              "The location where this product variant is stocked at.",
                          },
                          pickUpTime: {
                            description:
                              "Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours).",
                            type: "string",
                          },
                          quantityAvailable: {
                            description:
                              "The quantity of the product variant in-stock at this location.",
                            type: "number",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in StoreAvailabilityEdge.",
                  items: {
                    description:
                      "The availability of a product variant at a particular location.\nLocal pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.",
                    properties: {
                      __typename: {
                        const: "StoreAvailability",
                        type: "string",
                      },
                      available: {
                        description:
                          "Whether the product variant is in-stock at this location.",
                        type: "boolean",
                      },
                      location: {
                        $ref: "#/definitions/Location",
                        description:
                          "The location where this product variant is stocked at.",
                      },
                      pickUpTime: {
                        description:
                          "Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours).",
                        type: "string",
                      },
                      quantityAvailable: {
                        description:
                          "The quantity of the product variant in-stock at this location.",
                        type: "number",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            title: {
              description: "The product variant’s title.",
              type: "string",
            },
            unitPrice: {
              description:
                "The unit price value for the variant based on the variant's measurement.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
            unitPriceMeasurement: {
              description: "The unit price measurement for the variant.",
              properties: {
                __typename: {
                  const: "UnitPriceMeasurement",
                  type: "string",
                },
                measuredType: {
                  $ref: "#/definitions/Maybe",
                  description:
                    "The type of unit of measurement for the unit price measurement.",
                },
                quantityUnit: {
                  $ref: "#/definitions/Maybe_1",
                  description:
                    "The quantity unit for the unit price measurement.",
                },
                quantityValue: {
                  description:
                    "The quantity value for the unit price measurement.",
                  type: "number",
                },
                referenceUnit: {
                  $ref: "#/definitions/Maybe_1",
                  description:
                    "The reference unit for the unit price measurement.",
                },
                referenceValue: {
                  description:
                    "The reference value for the unit price measurement.",
                  type: "number",
                },
              },
              type: "object",
            },
            weight: {
              description:
                "The weight of the product variant in the unit system specified with `weight_unit`.",
              type: "number",
            },
            weightUnit: {
              $ref: "#/definitions/WeightUnit",
              description: "Unit of measurement for weight.",
            },
          },
          type: "object",
        },
      ],
      description:
        "A product variant represents a different version of a product, such as differing sizes or differing colors.",
    },
    ProductVariant_1: {
      properties: {
        availableForSale: {
          description:
            "Indicates if the product variant is available for sale.",
          type: "boolean",
        },
        id: {
          description: "A globally-unique ID.",
          type: "string",
        },
        price: {
          description: "The product variant’s price.",
          properties: {
            __typename: {
              const: "MoneyV2",
              type: "string",
            },
            amount: {
              description: "Decimal money amount.",
              type: "string",
            },
            currencyCode: {
              $ref: "#/definitions/CurrencyCode",
              description: "Currency of the money.",
            },
          },
          type: "object",
        },
        selectedOptions: {
          description: "List of product options applied to the variant.",
          items: {
            description:
              "Properties used by customers to select a product variant.\nProducts can have multiple options, like different sizes or colors.",
            properties: {
              __typename: {
                const: "SelectedOption",
                type: "string",
              },
              name: {
                description: "The product option’s name.",
                type: "string",
              },
              value: {
                description: "The product option’s value.",
                type: "string",
              },
            },
            type: "object",
          },
          type: "array",
        },
        title: {
          description: "The product variant’s title.",
          type: "string",
        },
      },
      type: "object",
    },
    Product_1: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          description:
            "Represents a resource that can be published to the Online Store sales channel.",
          properties: {
            onlineStoreUrl: {
              description:
                "The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          description:
            "Represents a resource that you can track the origin of the search traffic.",
          properties: {
            trackingParameters: {
              description:
                "A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Product",
              type: "string",
            },
            availableForSale: {
              description:
                "Indicates if at least one product variant is available for sale.",
              type: "boolean",
            },
            collections: {
              description: "List of collections a product belongs to.",
              properties: {
                __typename: {
                  const: "CollectionConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one Collection and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "CollectionEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        $ref: "#/definitions/Collection",
                        description: "The item at the end of CollectionEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in CollectionEdge.",
                  items: {
                    $ref: "#/definitions/Collection",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
                totalCount: {
                  description: "The total count of Collections.",
                  type: "string",
                },
              },
              type: "object",
            },
            compareAtPriceRange: {
              description:
                "The compare at price of the product across all variants.",
              properties: {
                __typename: {
                  const: "ProductPriceRange",
                  type: "string",
                },
                maxVariantPrice: {
                  description: "The highest variant's price.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                minVariantPrice: {
                  description: "The lowest variant's price.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            createdAt: {
              description: "The date and time when the product was created.",
              type: "string",
            },
            description: {
              description:
                "Stripped description of the product, single line with HTML tags removed.",
              type: "string",
            },
            descriptionHtml: {
              description:
                "The description of the product, complete with HTML formatting.",
              type: "string",
            },
            featuredImage: {
              description:
                "The featured image for the product.\n\nThis field is functionally equivalent to `images(first: 1)`.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
            handle: {
              description:
                "A human-friendly unique string for the Product automatically generated from its title.\nThey are used by the Liquid templating language to refer to objects.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            images: {
              description: "List of images associated with the product.",
              properties: {
                __typename: {
                  const: "ImageConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one Image and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "ImageEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        description: "The item at the end of ImageEdge.",
                        properties: {
                          __typename: {
                            const: "Image",
                            type: "string",
                          },
                          altText: {
                            description:
                              "A word or phrase to share the nature or contents of an image.",
                            type: "string",
                          },
                          height: {
                            description:
                              "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                            type: "number",
                          },
                          id: {
                            description: "A unique ID for the image.",
                            type: "string",
                          },
                          originalSrc: {
                            description:
                              "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                            type: "string",
                          },
                          src: {
                            description: "The location of the image as a URL.",
                            type: "string",
                          },
                          transformedSrc: {
                            description:
                              'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                            type: "string",
                          },
                          url: {
                            description:
                              'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                            type: "string",
                          },
                          width: {
                            description:
                              "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                            type: "number",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description: "A list of the nodes contained in ImageEdge.",
                  items: {
                    description: "Represents an image resource.",
                    properties: {
                      __typename: {
                        const: "Image",
                        type: "string",
                      },
                      altText: {
                        description:
                          "A word or phrase to share the nature or contents of an image.",
                        type: "string",
                      },
                      height: {
                        description:
                          "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                        type: "number",
                      },
                      id: {
                        description: "A unique ID for the image.",
                        type: "string",
                      },
                      originalSrc: {
                        description:
                          "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                        type: "string",
                      },
                      src: {
                        description: "The location of the image as a URL.",
                        type: "string",
                      },
                      transformedSrc: {
                        description:
                          'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                        type: "string",
                      },
                      url: {
                        description:
                          'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                        type: "string",
                      },
                      width: {
                        description:
                          "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                        type: "number",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            isGiftCard: {
              description: "Whether the product is a gift card.",
              type: "boolean",
            },
            media: {
              description: "The media associated with the product.",
              properties: {
                __typename: {
                  const: "MediaConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one Media and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "MediaEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        anyOf: [
                          {
                            $ref: "#/definitions/MediaImage",
                            description: "Represents a Shopify hosted image.",
                          },
                          {
                            $ref: "#/definitions/ExternalVideo",
                            description:
                              "Represents a video hosted outside of Shopify.",
                          },
                          {
                            $ref: "#/definitions/Model3d",
                            description:
                              "Represents a Shopify hosted 3D model.",
                          },
                          {
                            $ref: "#/definitions/Video",
                            description: "Represents a Shopify hosted video.",
                          },
                        ],
                        description: "The item at the end of MediaEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description: "A list of the nodes contained in MediaEdge.",
                  items: {
                    anyOf: [
                      {
                        $ref: "#/definitions/MediaImage",
                        description: "Represents a Shopify hosted image.",
                      },
                      {
                        $ref: "#/definitions/ExternalVideo",
                        description:
                          "Represents a video hosted outside of Shopify.",
                      },
                      {
                        $ref: "#/definitions/Model3d",
                        description: "Represents a Shopify hosted 3D model.",
                      },
                      {
                        $ref: "#/definitions/Video",
                        description: "Represents a Shopify hosted video.",
                      },
                    ],
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            onlineStoreUrl: {
              description:
                "The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.",
              type: "string",
            },
            options: {
              description: "List of product options.",
              items: {
                $ref: "#/definitions/ProductOption",
              },
              type: "array",
            },
            priceRange: {
              description: "The price range.",
              properties: {
                __typename: {
                  const: "ProductPriceRange",
                  type: "string",
                },
                maxVariantPrice: {
                  description: "The highest variant's price.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
                minVariantPrice: {
                  description: "The lowest variant's price.",
                  properties: {
                    __typename: {
                      const: "MoneyV2",
                      type: "string",
                    },
                    amount: {
                      description: "Decimal money amount.",
                      type: "string",
                    },
                    currencyCode: {
                      $ref: "#/definitions/CurrencyCode",
                      description: "Currency of the money.",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            productType: {
              description:
                "A categorization that a product can be tagged with, commonly used for filtering and searching.",
              type: "string",
            },
            publishedAt: {
              description:
                "The date and time when the product was published to the channel.",
              type: "string",
            },
            requiresSellingPlan: {
              description:
                "Whether the product can only be purchased with a selling plan.",
              type: "boolean",
            },
            sellingPlanGroups: {
              description:
                "A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans.",
              properties: {
                __typename: {
                  const: "SellingPlanGroupConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "SellingPlanGroupEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        description:
                          "The item at the end of SellingPlanGroupEdge.",
                        properties: {
                          __typename: {
                            const: "SellingPlanGroup",
                            type: "string",
                          },
                          appName: {
                            description:
                              "A display friendly name for the app that created the selling plan group.",
                            type: "string",
                          },
                          name: {
                            description: "The name of the selling plan group.",
                            type: "string",
                          },
                          options: {
                            description:
                              "Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product.",
                            items: {
                              description:
                                "Represents an option on a selling plan group that's available in the drop-down list in the storefront.\n\nIndividual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                              properties: {
                                __typename: {
                                  const: "SellingPlanGroupOption",
                                  type: "string",
                                },
                                name: {
                                  description:
                                    "The name of the option. For example, 'Delivery every'.",
                                  type: "string",
                                },
                                values: {
                                  description:
                                    "The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'.",
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                              },
                              type: "object",
                            },
                            type: "array",
                          },
                          sellingPlans: {
                            description:
                              "A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.",
                            properties: {
                              __typename: {
                                const: "SellingPlanConnection",
                                type: "string",
                              },
                              edges: {
                                description: "A list of edges.",
                                items: {
                                  description:
                                    "An auto-generated type which holds one SellingPlan and a cursor during pagination.",
                                  properties: {
                                    __typename: {
                                      const: "SellingPlanEdge",
                                      type: "string",
                                    },
                                    cursor: {
                                      description:
                                        "A cursor for use in pagination.",
                                      type: "string",
                                    },
                                    node: {
                                      description:
                                        "The item at the end of SellingPlanEdge.",
                                      properties: {
                                        __typename: {
                                          const: "SellingPlan",
                                          type: "string",
                                        },
                                        checkoutCharge: {
                                          description:
                                            "The initial payment due for the purchase.",
                                          properties: {
                                            __typename: {
                                              const:
                                                "SellingPlanCheckoutCharge",
                                              type: "string",
                                            },
                                            type: {
                                              $ref: "#/definitions/SellingPlanCheckoutChargeType",
                                              description:
                                                "The charge type for the checkout charge.",
                                            },
                                            value: {
                                              $ref: "#/definitions/SellingPlanCheckoutChargeValue",
                                              description:
                                                "The charge value for the checkout charge.",
                                            },
                                          },
                                          type: "object",
                                        },
                                        description: {
                                          description:
                                            "The description of the selling plan.",
                                          type: "string",
                                        },
                                        id: {
                                          description: "A globally-unique ID.",
                                          type: "string",
                                        },
                                        name: {
                                          description:
                                            "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.",
                                          type: "string",
                                        },
                                        options: {
                                          description:
                                            "The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                                          items: {
                                            description:
                                              "An option provided by a Selling Plan.",
                                            properties: {
                                              __typename: {
                                                const: "SellingPlanOption",
                                                type: "string",
                                              },
                                              name: {
                                                description:
                                                  'The name of the option (ie "Delivery every").',
                                                type: "string",
                                              },
                                              value: {
                                                description:
                                                  'The value of the option (ie "Month").',
                                                type: "string",
                                              },
                                            },
                                            type: "object",
                                          },
                                          type: "array",
                                        },
                                        priceAdjustments: {
                                          description:
                                            "The price adjustments that a selling plan makes when a variant is purchased with a selling plan.",
                                          items: {
                                            description:
                                              "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.",
                                            properties: {
                                              __typename: {
                                                const:
                                                  "SellingPlanPriceAdjustment",
                                                type: "string",
                                              },
                                              adjustmentValue: {
                                                $ref: "#/definitions/SellingPlanPriceAdjustmentValue",
                                                description:
                                                  "The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.",
                                              },
                                              orderCount: {
                                                description:
                                                  "The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.",
                                                type: "number",
                                              },
                                            },
                                            type: "object",
                                          },
                                          type: "array",
                                        },
                                        recurringDeliveries: {
                                          description:
                                            "Whether purchasing the selling plan will result in multiple deliveries.",
                                          type: "boolean",
                                        },
                                      },
                                      type: "object",
                                    },
                                  },
                                  type: "object",
                                },
                                type: "array",
                              },
                              nodes: {
                                description:
                                  "A list of the nodes contained in SellingPlanEdge.",
                                items: {
                                  description:
                                    "Represents how products and variants can be sold and purchased.",
                                  properties: {
                                    __typename: {
                                      const: "SellingPlan",
                                      type: "string",
                                    },
                                    checkoutCharge: {
                                      description:
                                        "The initial payment due for the purchase.",
                                      properties: {
                                        __typename: {
                                          const: "SellingPlanCheckoutCharge",
                                          type: "string",
                                        },
                                        type: {
                                          $ref: "#/definitions/SellingPlanCheckoutChargeType",
                                          description:
                                            "The charge type for the checkout charge.",
                                        },
                                        value: {
                                          $ref: "#/definitions/SellingPlanCheckoutChargeValue",
                                          description:
                                            "The charge value for the checkout charge.",
                                        },
                                      },
                                      type: "object",
                                    },
                                    description: {
                                      description:
                                        "The description of the selling plan.",
                                      type: "string",
                                    },
                                    id: {
                                      description: "A globally-unique ID.",
                                      type: "string",
                                    },
                                    name: {
                                      description:
                                        "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.",
                                      type: "string",
                                    },
                                    options: {
                                      description:
                                        "The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                                      items: {
                                        description:
                                          "An option provided by a Selling Plan.",
                                        properties: {
                                          __typename: {
                                            const: "SellingPlanOption",
                                            type: "string",
                                          },
                                          name: {
                                            description:
                                              'The name of the option (ie "Delivery every").',
                                            type: "string",
                                          },
                                          value: {
                                            description:
                                              'The value of the option (ie "Month").',
                                            type: "string",
                                          },
                                        },
                                        type: "object",
                                      },
                                      type: "array",
                                    },
                                    priceAdjustments: {
                                      description:
                                        "The price adjustments that a selling plan makes when a variant is purchased with a selling plan.",
                                      items: {
                                        description:
                                          "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.",
                                        properties: {
                                          __typename: {
                                            const: "SellingPlanPriceAdjustment",
                                            type: "string",
                                          },
                                          adjustmentValue: {
                                            $ref: "#/definitions/SellingPlanPriceAdjustmentValue",
                                            description:
                                              "The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.",
                                          },
                                          orderCount: {
                                            description:
                                              "The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.",
                                            type: "number",
                                          },
                                        },
                                        type: "object",
                                      },
                                      type: "array",
                                    },
                                    recurringDeliveries: {
                                      description:
                                        "Whether purchasing the selling plan will result in multiple deliveries.",
                                      type: "boolean",
                                    },
                                  },
                                  type: "object",
                                },
                                type: "array",
                              },
                              pageInfo: {
                                description:
                                  "Information to aid in pagination.",
                                properties: {
                                  __typename: {
                                    const: "PageInfo",
                                    type: "string",
                                  },
                                  endCursor: {
                                    description:
                                      "The cursor corresponding to the last node in edges.",
                                    type: "string",
                                  },
                                  hasNextPage: {
                                    description:
                                      "Whether there are more pages to fetch following the current page.",
                                    type: "boolean",
                                  },
                                  hasPreviousPage: {
                                    description:
                                      "Whether there are any pages prior to the current page.",
                                    type: "boolean",
                                  },
                                  startCursor: {
                                    description:
                                      "The cursor corresponding to the first node in edges.",
                                    type: "string",
                                  },
                                },
                                type: "object",
                              },
                            },
                            type: "object",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in SellingPlanGroupEdge.",
                  items: {
                    description:
                      "Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans.",
                    properties: {
                      __typename: {
                        const: "SellingPlanGroup",
                        type: "string",
                      },
                      appName: {
                        description:
                          "A display friendly name for the app that created the selling plan group.",
                        type: "string",
                      },
                      name: {
                        description: "The name of the selling plan group.",
                        type: "string",
                      },
                      options: {
                        description:
                          "Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product.",
                        items: {
                          description:
                            "Represents an option on a selling plan group that's available in the drop-down list in the storefront.\n\nIndividual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                          properties: {
                            __typename: {
                              const: "SellingPlanGroupOption",
                              type: "string",
                            },
                            name: {
                              description:
                                "The name of the option. For example, 'Delivery every'.",
                              type: "string",
                            },
                            values: {
                              description:
                                "The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'.",
                              items: {
                                type: "string",
                              },
                              type: "array",
                            },
                          },
                          type: "object",
                        },
                        type: "array",
                      },
                      sellingPlans: {
                        description:
                          "A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.",
                        properties: {
                          __typename: {
                            const: "SellingPlanConnection",
                            type: "string",
                          },
                          edges: {
                            description: "A list of edges.",
                            items: {
                              description:
                                "An auto-generated type which holds one SellingPlan and a cursor during pagination.",
                              properties: {
                                __typename: {
                                  const: "SellingPlanEdge",
                                  type: "string",
                                },
                                cursor: {
                                  description:
                                    "A cursor for use in pagination.",
                                  type: "string",
                                },
                                node: {
                                  description:
                                    "The item at the end of SellingPlanEdge.",
                                  properties: {
                                    __typename: {
                                      const: "SellingPlan",
                                      type: "string",
                                    },
                                    checkoutCharge: {
                                      description:
                                        "The initial payment due for the purchase.",
                                      properties: {
                                        __typename: {
                                          const: "SellingPlanCheckoutCharge",
                                          type: "string",
                                        },
                                        type: {
                                          $ref: "#/definitions/SellingPlanCheckoutChargeType",
                                          description:
                                            "The charge type for the checkout charge.",
                                        },
                                        value: {
                                          $ref: "#/definitions/SellingPlanCheckoutChargeValue",
                                          description:
                                            "The charge value for the checkout charge.",
                                        },
                                      },
                                      type: "object",
                                    },
                                    description: {
                                      description:
                                        "The description of the selling plan.",
                                      type: "string",
                                    },
                                    id: {
                                      description: "A globally-unique ID.",
                                      type: "string",
                                    },
                                    name: {
                                      description:
                                        "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.",
                                      type: "string",
                                    },
                                    options: {
                                      description:
                                        "The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                                      items: {
                                        description:
                                          "An option provided by a Selling Plan.",
                                        properties: {
                                          __typename: {
                                            const: "SellingPlanOption",
                                            type: "string",
                                          },
                                          name: {
                                            description:
                                              'The name of the option (ie "Delivery every").',
                                            type: "string",
                                          },
                                          value: {
                                            description:
                                              'The value of the option (ie "Month").',
                                            type: "string",
                                          },
                                        },
                                        type: "object",
                                      },
                                      type: "array",
                                    },
                                    priceAdjustments: {
                                      description:
                                        "The price adjustments that a selling plan makes when a variant is purchased with a selling plan.",
                                      items: {
                                        description:
                                          "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.",
                                        properties: {
                                          __typename: {
                                            const: "SellingPlanPriceAdjustment",
                                            type: "string",
                                          },
                                          adjustmentValue: {
                                            $ref: "#/definitions/SellingPlanPriceAdjustmentValue",
                                            description:
                                              "The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.",
                                          },
                                          orderCount: {
                                            description:
                                              "The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.",
                                            type: "number",
                                          },
                                        },
                                        type: "object",
                                      },
                                      type: "array",
                                    },
                                    recurringDeliveries: {
                                      description:
                                        "Whether purchasing the selling plan will result in multiple deliveries.",
                                      type: "boolean",
                                    },
                                  },
                                  type: "object",
                                },
                              },
                              type: "object",
                            },
                            type: "array",
                          },
                          nodes: {
                            description:
                              "A list of the nodes contained in SellingPlanEdge.",
                            items: {
                              description:
                                "Represents how products and variants can be sold and purchased.",
                              properties: {
                                __typename: {
                                  const: "SellingPlan",
                                  type: "string",
                                },
                                checkoutCharge: {
                                  description:
                                    "The initial payment due for the purchase.",
                                  properties: {
                                    __typename: {
                                      const: "SellingPlanCheckoutCharge",
                                      type: "string",
                                    },
                                    type: {
                                      $ref: "#/definitions/SellingPlanCheckoutChargeType",
                                      description:
                                        "The charge type for the checkout charge.",
                                    },
                                    value: {
                                      $ref: "#/definitions/SellingPlanCheckoutChargeValue",
                                      description:
                                        "The charge value for the checkout charge.",
                                    },
                                  },
                                  type: "object",
                                },
                                description: {
                                  description:
                                    "The description of the selling plan.",
                                  type: "string",
                                },
                                id: {
                                  description: "A globally-unique ID.",
                                  type: "string",
                                },
                                name: {
                                  description:
                                    "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.",
                                  type: "string",
                                },
                                options: {
                                  description:
                                    "The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.",
                                  items: {
                                    description:
                                      "An option provided by a Selling Plan.",
                                    properties: {
                                      __typename: {
                                        const: "SellingPlanOption",
                                        type: "string",
                                      },
                                      name: {
                                        description:
                                          'The name of the option (ie "Delivery every").',
                                        type: "string",
                                      },
                                      value: {
                                        description:
                                          'The value of the option (ie "Month").',
                                        type: "string",
                                      },
                                    },
                                    type: "object",
                                  },
                                  type: "array",
                                },
                                priceAdjustments: {
                                  description:
                                    "The price adjustments that a selling plan makes when a variant is purchased with a selling plan.",
                                  items: {
                                    description:
                                      "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.",
                                    properties: {
                                      __typename: {
                                        const: "SellingPlanPriceAdjustment",
                                        type: "string",
                                      },
                                      adjustmentValue: {
                                        $ref: "#/definitions/SellingPlanPriceAdjustmentValue",
                                        description:
                                          "The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.",
                                      },
                                      orderCount: {
                                        description:
                                          "The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.",
                                        type: "number",
                                      },
                                    },
                                    type: "object",
                                  },
                                  type: "array",
                                },
                                recurringDeliveries: {
                                  description:
                                    "Whether purchasing the selling plan will result in multiple deliveries.",
                                  type: "boolean",
                                },
                              },
                              type: "object",
                            },
                            type: "array",
                          },
                          pageInfo: {
                            description: "Information to aid in pagination.",
                            properties: {
                              __typename: {
                                const: "PageInfo",
                                type: "string",
                              },
                              endCursor: {
                                description:
                                  "The cursor corresponding to the last node in edges.",
                                type: "string",
                              },
                              hasNextPage: {
                                description:
                                  "Whether there are more pages to fetch following the current page.",
                                type: "boolean",
                              },
                              hasPreviousPage: {
                                description:
                                  "Whether there are any pages prior to the current page.",
                                type: "boolean",
                              },
                              startCursor: {
                                description:
                                  "The cursor corresponding to the first node in edges.",
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                        },
                        type: "object",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            seo: {
              description: "The product's SEO information.",
              properties: {
                __typename: {
                  const: "SEO",
                  type: "string",
                },
                description: {
                  description: "The meta description.",
                  type: "string",
                },
                title: {
                  description: "The SEO title.",
                  type: "string",
                },
              },
              type: "object",
            },
            tags: {
              description:
                "A comma separated list of tags that have been added to the product.\nAdditional access scope required for private apps: unauthenticated_read_product_tags.",
              items: {
                type: "string",
              },
              type: "array",
            },
            title: {
              description: "The product’s title.",
              type: "string",
            },
            totalInventory: {
              description:
                "The total quantity of inventory in stock for this Product.",
              type: "number",
            },
            trackingParameters: {
              description:
                "A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic.",
              type: "string",
            },
            updatedAt: {
              description:
                "The date and time when the product was last modified.\nA product's `updatedAt` value can change for different reasons. For example, if an order\nis placed for a product that has inventory tracking set up, then the inventory adjustment\nis counted as an update.",
              type: "string",
            },
            variantBySelectedOptions: {
              $ref: "#/definitions/ProductVariant",
              description:
                "Find a product’s variant based on its selected options.\nThis is useful for converting a user’s selection of product options into a single matching variant.\nIf there is not a variant for the selected options, `null` will be returned.",
            },
            variants: {
              description: "List of the product’s variants.",
              properties: {
                __typename: {
                  const: "ProductVariantConnection",
                  type: "string",
                },
                edges: {
                  description: "A list of edges.",
                  items: {
                    description:
                      "An auto-generated type which holds one ProductVariant and a cursor during pagination.",
                    properties: {
                      __typename: {
                        const: "ProductVariantEdge",
                        type: "string",
                      },
                      cursor: {
                        description: "A cursor for use in pagination.",
                        type: "string",
                      },
                      node: {
                        $ref: "#/definitions/ProductVariant",
                        description:
                          "The item at the end of ProductVariantEdge.",
                      },
                    },
                    type: "object",
                  },
                  type: "array",
                },
                nodes: {
                  description:
                    "A list of the nodes contained in ProductVariantEdge.",
                  items: {
                    $ref: "#/definitions/ProductVariant",
                  },
                  type: "array",
                },
                pageInfo: {
                  description: "Information to aid in pagination.",
                  properties: {
                    __typename: {
                      const: "PageInfo",
                      type: "string",
                    },
                    endCursor: {
                      description:
                        "The cursor corresponding to the last node in edges.",
                      type: "string",
                    },
                    hasNextPage: {
                      description:
                        "Whether there are more pages to fetch following the current page.",
                      type: "boolean",
                    },
                    hasPreviousPage: {
                      description:
                        "Whether there are any pages prior to the current page.",
                      type: "boolean",
                    },
                    startCursor: {
                      description:
                        "The cursor corresponding to the first node in edges.",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            vendor: {
              description: "The product’s vendor name.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.\nFor example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).",
    },
    ScriptDiscountApplication: {
      allOf: [
        {
          description:
            "Discount applications capture the intentions of a discount source at\nthe time of application.",
          properties: {
            allocationMethod: {
              $ref: "#/definitions/DiscountApplicationAllocationMethod",
              description:
                "The method by which the discount's value is allocated to its entitled items.",
            },
            targetSelection: {
              $ref: "#/definitions/DiscountApplicationTargetSelection",
              description:
                "Which lines of targetType that the discount is allocated over.",
            },
            targetType: {
              $ref: "#/definitions/DiscountApplicationTargetType",
              description:
                "The type of line that the discount is applicable towards.",
            },
            value: {
              $ref: "#/definitions/PricingValue",
              description: "The value of the discount application.",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "ScriptDiscountApplication",
              type: "string",
            },
            allocationMethod: {
              $ref: "#/definitions/DiscountApplicationAllocationMethod",
              description:
                "The method by which the discount's value is allocated to its entitled items.",
            },
            targetSelection: {
              $ref: "#/definitions/DiscountApplicationTargetSelection",
              description:
                "Which lines of targetType that the discount is allocated over.",
            },
            targetType: {
              $ref: "#/definitions/DiscountApplicationTargetType",
              description:
                "The type of line that the discount is applicable towards.",
            },
            title: {
              description:
                "The title of the application as defined by the Script.",
              type: "string",
            },
            value: {
              $ref: "#/definitions/PricingValue",
              description: "The value of the discount application.",
            },
          },
          type: "object",
        },
      ],
      description:
        "Script discount applications capture the intentions of a discount that\nwas created by a Shopify Script.",
    },
    SellingPlanCheckoutChargeType: {
      description:
        "The checkout charge when the full amount isn't charged at checkout.",
      enum: ["PERCENTAGE", "PRICE"],
      type: "string",
    },
    SellingPlanCheckoutChargeValue: {
      anyOf: [
        {
          description: "A monetary value with currency.",
          properties: {
            __typename: {
              const: "MoneyV2",
              type: "string",
            },
            amount: {
              description: "Decimal money amount.",
              type: "string",
            },
            currencyCode: {
              $ref: "#/definitions/CurrencyCode",
              description: "Currency of the money.",
            },
          },
          type: "object",
        },
        {
          description:
            "The percentage value of the price used for checkout charge.",
          properties: {
            __typename: {
              const: "SellingPlanCheckoutChargePercentageValue",
              type: "string",
            },
            percentage: {
              description:
                "The percentage value of the price used for checkout charge.",
              type: "number",
            },
          },
          type: "object",
        },
      ],
      description: "The portion of the price to be charged at checkout.",
    },
    SellingPlanPriceAdjustmentValue: {
      anyOf: [
        {
          description:
            "A fixed amount that's deducted from the original variant price. For example, $10.00 off.",
          properties: {
            __typename: {
              const: "SellingPlanFixedAmountPriceAdjustment",
              type: "string",
            },
            adjustmentAmount: {
              description: "The money value of the price adjustment.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          description:
            "A fixed price adjustment for a variant that's purchased with a selling plan.",
          properties: {
            __typename: {
              const: "SellingPlanFixedPriceAdjustment",
              type: "string",
            },
            price: {
              description:
                "A new price of the variant when it's purchased with the selling plan.",
              properties: {
                __typename: {
                  const: "MoneyV2",
                  type: "string",
                },
                amount: {
                  description: "Decimal money amount.",
                  type: "string",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description: "Currency of the money.",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          description:
            "A percentage amount that's deducted from the original variant price. For example, 10% off.",
          properties: {
            __typename: {
              const: "SellingPlanPercentagePriceAdjustment",
              type: "string",
            },
            adjustmentPercentage: {
              description: "The percentage value of the price adjustment.",
              type: "number",
            },
          },
          type: "object",
        },
      ],
      description:
        "Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments.",
    },
    Shop: {
      allOf: [
        {
          description:
            "Represents information about the metafields associated to the specified resource.",
          properties: {
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Shop",
              type: "string",
            },
            brand: {
              description: "The shop's branding configuration.",
              properties: {
                __typename: {
                  const: "Brand",
                  type: "string",
                },
                colors: {
                  description: "The colors of the store's brand.",
                  properties: {
                    __typename: {
                      const: "BrandColors",
                      type: "string",
                    },
                    primary: {
                      description: "The shop's primary brand colors.",
                      items: {
                        description:
                          "A group of related colors for the shop's brand.",
                        properties: {
                          __typename: {
                            const: "BrandColorGroup",
                            type: "string",
                          },
                          background: {
                            description: "The background color.",
                            type: "string",
                          },
                          foreground: {
                            description: "The foreground color.",
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                    secondary: {
                      description: "The shop's secondary brand colors.",
                      items: {
                        description:
                          "A group of related colors for the shop's brand.",
                        properties: {
                          __typename: {
                            const: "BrandColorGroup",
                            type: "string",
                          },
                          background: {
                            description: "The background color.",
                            type: "string",
                          },
                          foreground: {
                            description: "The foreground color.",
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                      type: "array",
                    },
                  },
                  type: "object",
                },
                coverImage: {
                  $ref: "#/definitions/MediaImage",
                  description: "The store's cover image.",
                },
                logo: {
                  $ref: "#/definitions/MediaImage",
                  description: "The store's default logo.",
                },
                shortDescription: {
                  description: "The store's short description.",
                  type: "string",
                },
                slogan: {
                  description: "The store's slogan.",
                  type: "string",
                },
                squareLogo: {
                  $ref: "#/definitions/MediaImage",
                  description:
                    "The store's preferred logo for square UI elements.",
                },
              },
              type: "object",
            },
            description: {
              description: "A description of the shop.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            metafield: {
              $ref: "#/definitions/Metafield",
              description: "Returns a metafield found by namespace and key.",
            },
            metafields: {
              description:
                "The metafields associated with the resource matching the supplied list of namespaces and keys.",
              items: {
                $ref: "#/definitions/Metafield",
              },
              type: "array",
            },
            moneyFormat: {
              description:
                "A string representing the way currency is formatted when the currency isn’t specified.",
              type: "string",
            },
            name: {
              description: "The shop’s name.",
              type: "string",
            },
            paymentSettings: {
              description: "Settings related to payments.",
              properties: {
                __typename: {
                  const: "PaymentSettings",
                  type: "string",
                },
                acceptedCardBrands: {
                  description:
                    "List of the card brands which the shop accepts.",
                  items: {
                    $ref: "#/definitions/CardBrand",
                  },
                  type: "array",
                },
                cardVaultUrl: {
                  description:
                    "The url pointing to the endpoint to vault credit cards.",
                  type: "string",
                },
                countryCode: {
                  $ref: "#/definitions/CountryCode",
                  description: "The country where the shop is located.",
                },
                currencyCode: {
                  $ref: "#/definitions/CurrencyCode",
                  description:
                    "The three-letter code for the shop's primary currency.",
                },
                enabledPresentmentCurrencies: {
                  description:
                    "A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.",
                  items: {
                    $ref: "#/definitions/CurrencyCode",
                  },
                  type: "array",
                },
                shopifyPaymentsAccountId: {
                  description: "The shop’s Shopify Payments account ID.",
                  type: "string",
                },
                supportedDigitalWallets: {
                  description:
                    "List of the digital wallets which the shop supports.",
                  items: {
                    $ref: "#/definitions/DigitalWallet",
                  },
                  type: "array",
                },
              },
              type: "object",
            },
            primaryDomain: {
              description: "The primary domain of the shop’s Online Store.",
              properties: {
                __typename: {
                  const: "Domain",
                  type: "string",
                },
                host: {
                  description:
                    "The host name of the domain (eg: `example.com`).",
                  type: "string",
                },
                sslEnabled: {
                  description: "Whether SSL is enabled or not.",
                  type: "boolean",
                },
                url: {
                  description:
                    "The URL of the domain (eg: `https://example.com`).",
                  type: "string",
                },
              },
              type: "object",
            },
            privacyPolicy: {
              $ref: "#/definitions/ShopPolicy",
              description: "The shop’s privacy policy.",
            },
            refundPolicy: {
              $ref: "#/definitions/ShopPolicy",
              description: "The shop’s refund policy.",
            },
            shippingPolicy: {
              $ref: "#/definitions/ShopPolicy",
              description: "The shop’s shipping policy.",
            },
            shipsToCountries: {
              description: "Countries that the shop ships to.",
              items: {
                $ref: "#/definitions/CountryCode",
              },
              type: "array",
            },
            subscriptionPolicy: {
              description: "The shop’s subscription policy.",
              properties: {
                __typename: {
                  const: "ShopPolicyWithDefault",
                  type: "string",
                },
                body: {
                  description: "The text of the policy. Maximum size: 64KB.",
                  type: "string",
                },
                handle: {
                  description: "The handle of the policy.",
                  type: "string",
                },
                id: {
                  description:
                    "The unique ID of the policy. A default policy doesn't have an ID.",
                  type: "string",
                },
                title: {
                  description: "The title of the policy.",
                  type: "string",
                },
                url: {
                  description: "Public URL to the policy.",
                  type: "string",
                },
              },
              type: "object",
            },
            termsOfService: {
              $ref: "#/definitions/ShopPolicy",
              description: "The shop’s terms of service.",
            },
          },
          type: "object",
        },
      ],
      description:
        "Shop represents a collection of the general settings and information about the shop.",
    },
    ShopPolicy: {
      allOf: [
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "ShopPolicy",
              type: "string",
            },
            body: {
              description: "Policy text, maximum size of 64kb.",
              type: "string",
            },
            handle: {
              description: "Policy’s handle.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            title: {
              description: "Policy’s title.",
              type: "string",
            },
            url: {
              description: "Public URL to the policy.",
              type: "string",
            },
          },
          type: "object",
        },
      ],
      description:
        "Policy that a merchant has configured for their store, such as their refund or privacy policy.",
    },
    Video: {
      allOf: [
        {
          description: "Represents a media interface.",
          properties: {
            alt: {
              description:
                "A word or phrase to share the nature or contents of a media.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            mediaContentType: {
              $ref: "#/definitions/MediaContentType",
              description: "The media content type.",
            },
            presentation: {
              $ref: "#/definitions/MediaPresentation",
              description: "The presentation for a media.",
            },
            previewImage: {
              description: "The preview image for the media.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        {
          description:
            "An object with an ID field to support global identification, in accordance with the\n[Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).\nThis interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)\nand [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.",
          properties: {
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
          },
          type: "object",
        },
        {
          properties: {
            __typename: {
              const: "Video",
              type: "string",
            },
            alt: {
              description:
                "A word or phrase to share the nature or contents of a media.",
              type: "string",
            },
            id: {
              description: "A globally-unique ID.",
              type: "string",
            },
            mediaContentType: {
              $ref: "#/definitions/MediaContentType",
              description: "The media content type.",
            },
            presentation: {
              $ref: "#/definitions/MediaPresentation",
              description: "The presentation for a media.",
            },
            previewImage: {
              description: "The preview image for the media.",
              properties: {
                __typename: {
                  const: "Image",
                  type: "string",
                },
                altText: {
                  description:
                    "A word or phrase to share the nature or contents of an image.",
                  type: "string",
                },
                height: {
                  description:
                    "The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
                id: {
                  description: "A unique ID for the image.",
                  type: "string",
                },
                originalSrc: {
                  description:
                    "The location of the original image as a URL.\n\nIf there are any existing transformations in the original source URL, they will remain and not be stripped.",
                  type: "string",
                },
                src: {
                  description: "The location of the image as a URL.",
                  type: "string",
                },
                transformedSrc: {
                  description:
                    'The location of the transformed image as a URL.\n\nAll transformation arguments are considered "best-effort". If they can be applied to an image, they will be.\nOtherwise any transformations which an image type does not support will be ignored.',
                  type: "string",
                },
                url: {
                  description:
                    'The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn\'t support will be ignored.\n\nIf you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).',
                  type: "string",
                },
                width: {
                  description:
                    "The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify.",
                  type: "number",
                },
              },
              type: "object",
            },
            sources: {
              description: "The sources for a video.",
              items: {
                description: "Represents a source for a Shopify hosted video.",
                properties: {
                  __typename: {
                    const: "VideoSource",
                    type: "string",
                  },
                  format: {
                    description: "The format of the video source.",
                    type: "string",
                  },
                  height: {
                    description: "The height of the video.",
                    type: "number",
                  },
                  mimeType: {
                    description: "The video MIME type.",
                    type: "string",
                  },
                  url: {
                    description: "The URL of the video.",
                    type: "string",
                  },
                  width: {
                    description: "The width of the video.",
                    type: "number",
                  },
                },
                type: "object",
              },
              type: "array",
            },
          },
          type: "object",
        },
      ],
      description: "Represents a Shopify hosted video.",
    },
    WeightUnit: {
      description: "Units of measurement for weight.",
      enum: ["GRAMS", "KILOGRAMS", "OUNCES", "POUNDS"],
      type: "string",
    },
  },
};
