import Link from "next/link";
import React from "react";

type Breadcrumb = {
  title: string;
  href: string;
};

type Props = { title: string; items: Breadcrumb[] };

export default function Breadcrumbs({ title, items }: Props) {
  return (
    <div className="mb-8 bg-gray-200/60 py-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="inline-flex gap-2 font-mono text-sm font-light uppercase tracking-wider text-gray-800 [&>a:not(:last-child)]:after:content-['/'] [&>a:not(:last-child)]:after:ml-2">
          {items.map((breadcrumb) => (
            <Link key={breadcrumb.title} href={breadcrumb.href}>
              {breadcrumb.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
