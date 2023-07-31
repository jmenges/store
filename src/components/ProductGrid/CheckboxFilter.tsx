'use client';

import { Checkbox } from '@/components/ui/checkbox';
import useQueryParamUpdater from '@/hooks/useQueryParamUpdater';
import { useEffect, useRef, useState } from 'react';

type Props = { urlKey: string; options: string[]; queryValues: string[] };

export default function CheckboxFilter({
  urlKey,
  options: checkboxOptions,
  queryValues = [],
}: Props) {
  const [activeValues, setActiveValues] = useState<string[]>(queryValues);
  const activeValuesRef = useRef<string[]>(activeValues);
  activeValuesRef.current = activeValues;

  /* Hooks */
  const { setQueryParamArray } = useQueryParamUpdater();

  /* Functions */
  const onCheckboxChange = ({ value, checked }: { value: string; checked: boolean }) => {
    if (!checked) {
      setActiveValues((prev) => prev.filter((activeValue) => activeValue != value));
      return;
    }
    setActiveValues((prev) => [...prev, value]);
  };

  /* Update queryParams based on checkbox changes */
  useEffect(() => {
    setQueryParamArray(urlKey, activeValues);
  }, [activeValues, urlKey, setQueryParamArray]);

  /* Handle filter updates based on external changes */
  useEffect(() => {
    const activeValues = activeValuesRef.current;
    const isNotSameLength = activeValues.length !== queryValues.length;
    const hasDiffrentValues = !queryValues.every((value) => activeValues.includes(value));
    if (isNotSameLength || hasDiffrentValues) {
      setActiveValues(queryValues);
    }
  }, [queryValues]);

  return (
    <>
      {checkboxOptions.map((option) => (
        <div className="ml-4 flex items-center gap-2" key={option}>
          <Checkbox
            checked={activeValues.includes(option)}
            onCheckedChange={(checked: boolean) => onCheckboxChange({ value: option, checked })}
          />
          {option}
        </div>
      ))}
    </>
  );
}
