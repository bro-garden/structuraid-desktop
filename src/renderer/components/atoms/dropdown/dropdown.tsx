import { useState } from 'react';
import { on } from 'events';
import type { Item, DropdownProps } from './types';

const Dropdown = ({
  items,
  className,
  selected,
  onSelect,
  color = 'light',
}: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(
    selected ? items.find((item) => item.id === selected) : undefined
  );

  let styles = 'flex flex-col rounded shadow-md-center py-2 text-xs';
  if (color === 'light') {
    styles += ' bg-blue-white text-primary';
  } else if (color === 'dark') {
    styles += ' bg-primary text-blue-white';
  }

  const handleClick = (item: Item) => {
    setSelectedItem(item);

    if (onSelect) onSelect(item);
  };

  return (
    <div className={`${styles} ${className || ''}`}>
      {items.map((item) => (
        <button
          type="button"
          className={`text-xs py-3 px-4 text-left hover:bg-soft-blue focus:outline-none focus:bg-soft-blue transition ${
            selectedItem?.id === item.id ? 'bg-soft-blue' : ''
          }`}
          key={item.id}
          onClick={() => handleClick(item)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
