/* eslint-disable react/jsx-props-no-spreading */

import { useState } from 'react';
import { ChevronDownIcon } from '@primer/octicons-react';
import { Input, SelectionList } from '../../atoms';

import type { SelectProps, Item } from './types';

const Select = ({
  placeholder,
  selection,
  className,
  items,
  onSelection,
  disabled = false,
  as = 'one-liner',
  color = 'light',
  ...props
}: SelectProps) => {
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(
    items.find((item) => item.id === selection)
  );
  const [listVisible, setListVisible] = useState<boolean>(false);

  const handleSelect = (item: Item | Item[]) => {
    if (Array.isArray(item)) return;

    setListVisible(false);
    setSelectedItem(item);
    if (onSelection) onSelection(item);
  };

  const toggleListVisibility = () => {
    setListVisible(!listVisible);
  };

  return (
    <div className={`relative ${className}`}>
      <Input
        as={as}
        color={color}
        type="button"
        disabled={disabled}
        icon={
          <ChevronDownIcon
            size={12}
            className={`
              transition-all
              ${color === 'dark' ? 'text-blue-white' : 'text-primary'}
              ${listVisible && 'rotate-180'}
            `}
          />
        }
        className={`w-full text-left ${color === 'dark' && 'text-blue-white'}`}
        value={selectedItem?.label || placeholder || 'Please Select an Option'}
        onClick={toggleListVisibility}
        {...props}
      />

      {listVisible && (
        <div className="absolute top-full w-full mt-1">
          <SelectionList
            items={items}
            selection={selectedItem?.id}
            onSelect={handleSelect}
            color={color}
          />
        </div>
      )}
    </div>
  );
};

export default Select;
