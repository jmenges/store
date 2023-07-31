'use client';
import { Button } from '@/components/ui/button';

import SolarUserLinear from '~icons/solar/user-linear.jsx';

type Props = {};

export default function HeaderActions({}: Props) {
  return (
    <div>
      <Button onClick={() => {}} size="icon" variant="ghost">
        <SolarUserLinear className="svg-stroke-2 h-4 w-4 stroke-current" />
      </Button>
    </div>
  );
}
