import { Button } from '@/components/ui/button';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import React from 'react';

type Props = { className?: string; children?: React.ReactNode; onRemoveClick: () => void };

export default function Chip({ className, children, onRemoveClick }: Props) {
  return (
    <motion.div
      initial={{
        x: 10,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.1,
          delay: 0.2,
        },
      }}
      exit={{
        x: 10,
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
      // key={children?.toString()}
      className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
    >
      {children}
      <Button onClick={onRemoveClick} size="raw" variant="icon">
        <XMarkIcon className="h-4 w-4 stroke-current text-gray-500" />
      </Button>
    </motion.div>
  );
}
