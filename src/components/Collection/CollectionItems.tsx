import CollectionItem from '@/components/Collection/CollectionItem';
import { Collection } from '@/types/shopify';
import React from 'react';

type Props = { collections: Collection[]; activeHandle: string };

export default function CollectionItems({ collections, activeHandle }: Props) {
  console.log(activeHandle)
  console.log(collections)
  return (
    <>
      <div className="flex">
        {collections.map((collection) => (
          <CollectionItem
            key={collection.handle}
            collection={collection}
            active={collection.handle === activeHandle}
          />
        ))}
      </div>
    </>
  );
}
