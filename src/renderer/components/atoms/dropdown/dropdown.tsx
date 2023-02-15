import { useState } from 'react';
import type { Item, DropdownProps } from './types';

const Dropdown = ({
  color = 'light',
  items,
  className,
  selectedItem,
  onSelect,
}: DropdownProps) => {
  let styles = 'flex flex-col rounded shadow-md-center py-2 text-xs';
  if (color === 'light') {
    styles += ' bg-blue-white text-primary';
  } else if (color === 'dark') {
    styles += ' bg-primary text-blue-white';
  }

  return (
    <div className={`${styles} ${className || ''}`}>
      {items.map((item) => (
        <button
          type="button"
          className="text-xs py-3 px-4 text-left hover:bg-soft-blue focus:outline-none focus:bg-soft-blue transition"
          key={item.label}
          onClick={(e) => console.log(e)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
