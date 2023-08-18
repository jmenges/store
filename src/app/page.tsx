import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { Button, buttonVariants } from "@/components/ui/button";
import { getCollections } from "@/lib/shopify/operations/collection";
import { getProducts } from "@/lib/shopify/operations/product";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

import image2 from "/public/landing/collection.jpeg";
import newsletterImage from "/public/landing/newsletter.webp";

import HeroSlider from "@/components/HeroSlider";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default async function Home() {
  const collectionsData = getCollections({ first: 3 });
  const bestSellingProductsData = getProducts({
    sortKey: "BEST_SELLING",
  });

  const [collections, bestSellingProducts] = await Promise.all([
    collectionsData,
    bestSellingProductsData,
  ]);

  return (
    <main className="relative -mt-[68px] flex flex-col items-center justify-between">
      {/* Hero */}
      <HeroSlider className="h-screen max-h-[960px] overflow-clip" />
      {/* Shop by Categories */}
      <div className="mb-24 mt-16">
        <div className="text-center">
          <div className="relative mb-2 inline-flex items-center">
            <span className="mr-2 h-[1px] w-6 bg-black"></span>
            <span className="text-sm uppercase">The essentials</span>
          </div>
          <h1 className="text-3xl">Shop by Collections </h1>
        </div>
        <div className="mt-12 container mx-auto grid grid-cols-3 gap-6">
          {collections
            .filter((map) => map.handle !== "")
            .map((collection) => {
              return (
                <Link
                  key={collection.id}
                  className="group flex flex-col"
                  href={`/collections/`}
                  aria-label={`View collection ${collection.title}`}
                >
                  <div className="overflow-hidden bg-gray-500">
                    <Image
                      src={collection.image.url}
                      alt={collection.image.altText}
                      width={collection.image.width}
                      height={collection.image.height}
                      sizes="(min-width: 1440px) 421px, calc(31.52vw - 27px)"
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
      {/*  Partners  */}
      <div className="container mt-18 mb-24">
        <div className="relative mb-2 inline-flex items-center">
          <span className="mr-2 h-[1px] w-6 bg-black"></span>
          <h1 className="text-sm uppercase">Our partners</h1>
        </div>
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
      {/* Spring Collection */}
      <div className="flex w-full relative">
        <Image
          src={image2}
          className="object-cover w-full max-h-[600px]"
          sizes="100vw"
          alt={""}
        />

        <div className="lg:mt-12 absolute space-y-4 lg:w-1/3 p-12 h-full overflow-clip">
          <h1 className="text-xl lg:text-3xl font-thin">
            Explore Our Exclusive Spring Collection for Women, Designed by Tim
            Freedman. Enjoy Complimentary Shipping on Orders Over €60.
          </h1>
          <Link
            href="/collections/women/"
            className={cn(
              "overflow-hiden group flex items-center transition-all",
              buttonVariants()
            )}
          >
            Shop Now
            <ArrowRightIcon className="h-4 w-4 ml-2 transition-all group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Shop by Bestsellers */}
      <div className="container mx-auto mt-24 w-full">
        <div className="mb-8 flex w-full items-end justify-between">
          <div>
            <div className="relative mb-2 inline-flex items-center">
              <span className="mr-2 h-[1px] w-6 bg-black"></span>
              <span className="text-sm uppercase">New Arrivals</span>
            </div>
            <h1 className="text-3xl">Popular Products</h1>
          </div>
          <Link
            href="/products/"
            className="overflow-hiden group flex items-center gap-2 transition-all"
          >
            Explore All
            <ArrowRightIcon className="h-4 w-4 transition-all group-hover:translate-x-1" />
          </Link>
        </div>
        <ProductGrid
          products={bestSellingProducts.slice(0, 6)}
          imageSizes="(min-width: 1440px) 405px, (min-width: 1040px) 27.89vw, calc(50vw - 40px)"
        />
      </div>

      {/* Newletter */}
      <div className="w-full mt-24 flex flex-col py-32 relative overflow-hidden">
        <Image
          src={newsletterImage}
          alt=""
          fill
          sizes="100vw"
          className="w-full object-cover"
        />
        <div className="gap-4 flex flex-col max-w-sm lg:max-w-lg mx-auto z-10">
          <h1 className="text-3xl font-medium">
            Signup for our newsletter to receive special offers, news, & events.
          </h1>
          <p className="text-sm uppercase font-mono">
            Get 15% off on your first purchase
          </p>
          <form className="flex" action="/not-implemented">
            <label htmlFor="newsletter-landing" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-landing"
              className="border-black z-10 max-w-sm ring-offset-[#f0f1f3]"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
