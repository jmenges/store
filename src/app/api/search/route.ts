import { getProducts } from "@/lib/shopify/operations/product";
import { NextResponse } from "next/server";

// import { z } from "zod";

// const termSchema = z.string().regex(/^[A-Za-z0-9\s]*$/);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  try {
    const term = searchParams.get("term");
    // const termParsed = termSchema.parse(term);
    const searchQuery = `title:${term}*`;
    const products = await getProducts({
      query: searchQuery,
      first: 6,
    });
    return NextResponse.json({ products });
  } catch (error) {
    // console.log(error)
    return NextResponse.json({ products: [] });
  }
}
