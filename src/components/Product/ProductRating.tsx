import { cn } from '@/lib/utils';
import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

type Props = { rating: number, className?: string };

export default function ProductRating({ rating, className }: Props) {
  //   const handleStarClick = (starIndex: number) => {
  //     const newRating = starIndex + 1;
  //     // onRatingChange(newRating);
  //   };

  return (
    <div className={cn('flex items-center', className)}>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-5 w-5 cursor-pointer ${
            index < rating ? 'text-yellow-500' : 'text-gray-200'
          }`}
        />
      ))}
      <span className='ml-2'>({rating.toFixed(1)})</span>
    </div>
  );
}
