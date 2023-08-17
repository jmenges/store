#/bin/bash

# used to generated json schema for validating api requests in the searchbar
# required typescript-json-schema to be installed. 
# We need to generate just the schema for the product as the search api returns a list of products
# the generation is not possible with zod, as our types are based on the types provided by the storefront-api from hydrogen.

typescript-json-schema src/types/shopify.ts Product > src/validation/product.json