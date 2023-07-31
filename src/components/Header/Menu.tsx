import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Props = {};

export default function Menu({}: Props) {
  return (
    <div className="flex gap-4 items-center text-sm">
      <Link href={'/products'}>Shop</Link>
      <Link href="/">
        <Image src="/StoreLogo.svg" width={100} height={40} alt="logo" className="" />
      </Link>
      <Link href="/collections">Collections</Link>
    </div>
  );
}
