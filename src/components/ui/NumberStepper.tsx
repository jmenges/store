'use client';

import HeroIcon from '@/components/ui/HeroIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { VariantProps, cva } from 'class-variance-authority';
import { useEffect, useState } from 'react';

const stepperVariants = cva('', {
  variants: {
    size: {
      default: 'h-9',
      sm: 'h-7',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const iconVariants = cva('', {
  variants: {
    size: {
      default: 'h-4 w-4',
      sm: 'h-3 w-3',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const buttonVariants = cva('focus:z-10', {
  variants: {
    size: {
      default: 'px-1',
      sm: 'px-0 h-7',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface StepperProps extends VariantProps<typeof stepperVariants> {
  initialValue: number;
  onValueChange: (newValue: number) => void;
  minValue?: number;
  maxValue?: number;
  className?: string;
  disabled?: boolean;
}

export default function NumberStepper({
  disabled = false,
  initialValue,
  onValueChange,
  minValue = 1,
  maxValue = 10,
  className,
  size,
}: StepperProps) {
  const [value, setValue] = useState<number>(initialValue);

  const decrement = () => {
    setValue((prev) => (prev > minValue ? --prev : minValue));
  };

  const increment = () => {
    setValue((prev) => (prev < maxValue ? ++prev : maxValue));
  };

  useEffect(() => {
    if (value !== initialValue) {
      onValueChange(value);
    }
  }, [initialValue, value, onValueChange]);

  return (
    <div className={cn('flex', className)}>
      <Button
        className={cn('rounded-r-none border-r-0', buttonVariants({ size }))}
        onClick={decrement}
        variant="outline"
        size="icon"
        disabled={disabled}
      >
        <HeroIcon ariaAlt='Decrement quantity'>
          <MinusIcon className={cn(iconVariants({ size }))} />
        </HeroIcon>
      </Button>
      <label className='sr-only' htmlFor='quantity'>Quantity</label>
      <Input
        disabled={disabled}
        id="quantity"
        type="number"
        className={cn(
          'rounded-l-none rounded-r-none border-x-0 text-center focus:z-10',
          stepperVariants({ size })
        )}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <Button
        className={cn('rounded-l-none border-l-0', buttonVariants({ size }))}
        onClick={increment}
        variant="outline"
        size="icon"
        disabled={disabled}
      >
        <HeroIcon ariaAlt='Increment quantity'>
          <PlusIcon className={cn(iconVariants({ size }))} />
        </HeroIcon>
      </Button>
    </div>
  );
}
