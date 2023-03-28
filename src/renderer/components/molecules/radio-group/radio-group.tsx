import { useState, useEffect } from 'react';
import invariant from 'tiny-invariant';
import { Radio } from '../../atoms';

import type { RadioGroupProps, RadioItem } from './types';

const loadSelectedItem = (
  items: RadioItem[],
  selection: string | undefined
) => {
  if (!selection) return undefined;

  return items.find((item) => item.id === selection);
};

const RadioGroup = ({
  items,
  selection,
  onChange,
  direction = 'column',
  name,
}: RadioGroupProps) => {
  const [selectedItem, setSelectedItem] = useState<RadioItem | undefined>(
    loadSelectedItem(items, selection)
  );

  useEffect(() => {
    setSelectedItem(loadSelectedItem(items, selection));
  }, [items, selection]);

  const handleSelection = (id: string) => {
    const newItem = items.find((item) => item.id === id);
    invariant(newItem, `item with id ${id} not found`);

    setSelectedItem(newItem);

    if (onChange) onChange(newItem);
  };

  return (
    <div
      className={`
        flex gap-2
        ${direction === 'row' ? 'flex-row' : 'flex-col'}
      `}
    >
      {items.map((item) => (
        <Radio
          id={item.id}
          name={name}
          value={item.value}
          checked={item.id === selectedItem?.id}
          onChange={() => handleSelection(item.id)}
        >
          {item.label}
        </Radio>
      ))}
    </div>
  );
};

export default RadioGroup;
