import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { ShopifyImage } from "@/components/ui/ShopifyImage";
import { Button } from "@/components/ui/button";
import { getCollections } from "@/lib/shopify/operations/collection";
import { getProducts } from "@/lib/shopify/operations/product";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const collections = await getCollections({ first: 3 });
  const bestSellingProducts = await getProducts({
    sortKey: "BEST_SELLING",
  });

  return (
    <main className="relative mb-24 flex flex-col items-center justify-between py-4">
      {/* Hero */}
      <div className="relative container mx-auto  flex min-h-screen w-full overflow-clip bg-gray-200/60">
        <div className="z-10 mb-32 flex flex-col items-center p-8 md:w-1/2 md:justify-center md:p-12 lg:w-3/5 lg:p-16">
          <p className="w-full font-light lg:text-lg ">New Arrivals</p>
          <h2 className="mb-4 text-6xl text-[4.2rem] font-semibold lg:text-7xl">
            A collection made for you
          </h2>
          <p className="text-lg font-light lg:text-xl">
            Aliquam lorem ante, dapibus in, viverra quister, feugiat a, tellus.
            Phasellus viverra nulla utme.
          </p>
          <Button
            className="text-md mr-auto mt-6 px-8 py-6"
            variant="default"
            size="lg"
          >
            Shop Now
          </Button>
        </div>
        <div className="absolute right-[-5%] top-[10%] h-[60vw] min-h-[600px] w-[60vw] min-w-[600px] rounded-[100%] bg-sky-800/20 md:top-[15%] "></div>
        <div className="absolute right-5 top-[10%] w-[40vw] min-w-[500px]">
          <Image src="/hero.png" height={1024} width={683} alt="hero" />
        </div>
      </div>
      {/* Shop by Categories */}
      <div className="mb-24 mt-16">
        <div className="text-center">
          <div className="relative mb-2 inline-flex items-center">
            <span className="mr-2 h-[1px] w-6 bg-black"></span>
            <span className="text-sm uppercase">New Collection</span>
          </div>
          <h3 className="text-3xl">Shop by Collections </h3>
        </div>
        <div className="mt-12 grid max-w-5xl grid-cols-3 gap-6">
          {collections
            .filter((map) => map.handle !== "")
            .map((collection) => {
              return (
                <Link
                  key={collection.id}
                  className="group flex flex-col"
                  href={`/collections/`}
                >
                  <div className="overflow-hidden">
                    <ShopifyImage
                      src={collection?.image?.url}
                      alt={collection?.image?.altText || collection.title}
                      width={1000}
                      height={1000}
                      className="scale-[103%] transition-all duration-500 hover:translate-x-1"
                    />
                  </div>

                  <div className="mt-4 flex justify-center text-center">
                    <p className="animate-underline group-hover:animate-underline text-2xl ">
                      {collection.title}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      {/*   */}
      <div className="container my-24 max-w-5xl px-0">
        <div className="flex justify-between gap-4 border-y border-gray-300 py-8 ">
          <Link href="#">
            <Image
              src="/company-logo/matrix.svg"
              height={60}
              width={60}
              alt="asdf"
              className="transition-all duration-300  hover:-translate-y-1"
            />
          </Link>
          <Link href="#">
            <Image
              src="/company-logo/2k.svg"
              height={60}
              width={60}
              alt="asdf"
              className="transition-all duration-300  hover:-translate-y-1"
            />
          </Link>
          <Link href="#">
            <Image
              src="/company-logo/airtable.svg"
              height={60}
              width={60}
              alt="asdf"
              className="transition-all duration-300  hover:-translate-y-1"
            />
          </Link>
          <Link href="#">
            <Image
              src="/company-logo/logitech.svg"
              height={60}
              width={60}
              alt="asdf"
              className="transition-all duration-300 hover:-translate-y-1"
            />
          </Link>
          <Link href="#">
            <Image
              src="/company-logo/redux.svg"
              height={60}
              width={60}
              alt="asdf"
              className="transition-all duration-300  hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
      {/* Shop by Bestsellers */}
      <div className="container mx-auto mt-12 w-full">
        <div className="mb-8 flex w-full items-end justify-between">
          <div>
            <div className="relative mb-2 inline-flex items-center">
              <span className="mr-2 h-[1px] w-6 bg-black"></span>
              <span className="text-sm uppercase">New Arrivals</span>
            </div>
            <h3 className="text-3xl">Popular Products</h3>
          </div>
          <Link
            href="/products/"
            className="overflow-hiden group flex items-center gap-2 transition-all"
          >
            Explore All
            <ArrowRightIcon className="h-4 w-4 transition-all group-hover:translate-x-1" />
          </Link>
        </div>
        <ProductGrid products={bestSellingProducts.slice(0, 6)} />
      </div>
    </main>
  );
}
