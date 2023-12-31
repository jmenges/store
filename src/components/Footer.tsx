import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { footerNav } from "@/lib/constants";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

import TypcnSocialFacebook from "~icons/typcn/social-facebook";
import TypcnSocialInstagram from "~icons/typcn/social-instagram";
import TypcnSocialTwitter from "~icons/typcn/social-twitter";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="relative bg-black pb-10 pt-14 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-y-4 text-left lg:text-left">
          <div className="w-full px-4 lg:w-3/12 ">
            <h1 className="text-mono text-3xl font-bold">ST0RE</h1>
            <h2 className="mb-2 mt-2 text-sm font-light">
              Find us on any of these platforms, we respond 1-2 business days.
            </h2>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top flex flex-wrap">
              {footerNav.map((nav) => {
                return (
                  <div key={nav.title} className="w-1/2">
                    <span className="mb-2 block text-sm font-semibold uppercase">
                      {nav.title}
                    </span>
                    <ul className="list-unstyled font-light">
                      {nav.items.map((item) => (
                        <li key={item.title}>
                          <Link
                            className="animate-underline pb-2 text-sm font-light"
                            href={item.href}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-3/12 max-w-sm ">
            <span className="text-md font-semibold">
              Subscribe for newsletter
            </span>
            <form className="relative flex" action="/not-implemented">
              <Input
                className="mt-2 text-white"
                variant="underline"
                placeholder="Email address"
              />
              <Button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent px-2 py-2 hover:scale-x-105 hover:bg-transparent hover:text-white"
                variant="icon"
                size="raw"
              >
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
                <span className="sr-only">Subscribe to newsletter</span>
              </Button>
            </form>
            <div className="mt-4 flex gap-2">
              <Link href="/">
                <span className="sr-only">Visit Facebook page</span>
                <TypcnSocialFacebook aria-hidden />
              </Link>
              <Link href="/" >
                <span className="sr-only">Visit Instagram page</span>
                <TypcnSocialInstagram aria-hidden />
              </Link>
              <Link href="/">
                <span className="sr-only">Visit Twitter page</span>
                <TypcnSocialTwitter aria-hidden />
              </Link>
            </div>
          </div>
        </div>
        <Separator className="mt-12 mb-8 bg-gray-400" />
        {/* <hr className="mt-12 mb-6" /> */}
        <div className="flex flex-wrap gap-y-2 items-center justify-center font-light md:justify-between">
          <div className="mx-auto text-sm w-full flex gap-4 md:w-6/12 px-4">
            <span className="">Copyright 2023 © Jonas Menges</span>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <span className="font-semibold md:inline-flex md:gap-4 items-center">
              Portfolio Project: STORE <br />
              <Link
                className="animate-underline text-current"
                href="https://github.com/jmenges/store"
              >
                View on GitHub
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
