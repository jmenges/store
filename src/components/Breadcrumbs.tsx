import Link from "next/link";
import React from "react";

type Breadcrumb = {
  title: string;
  href: string;
};

type Props = { title: string; items: Breadcrumb[] };

export default function Breadcrumbs({ title, items }: Props) {
  return (
    <aside className="mb-8 bg-gray-200/60 py-4 sm:py-8">
      <div className="container mx-auto max-sm:flex max-sm:items-end max-sm:gap-2">
        <h1 className="text-xl sm:text-2xl font-semibold max-sm:leading-none max-sm:hidden">
          {title}
        </h1>
        <nav aria-label="Breadcrumbs">
          <ol className="inline-flex gap-2 font-mono text-xs sm:text-sm font-light uppercase tracking-wider text-gray-800 [&>li:not(:last-child)]:after:content-['/'] [&>li:not(:last-child)]:after:ml-2">
            {items.map((breadcrumb) => (
              <li key={breadcrumb.title}>
                <Link className="" href={breadcrumb.href}>
                  {breadcrumb.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
