import { useState, useEffect } from 'react';
import type { Item, SelectionListProps } from './types';

const loadSelectedItems = (items: Item[], selection: string | string[]) => {
  return items.filter((item) => {
    if (typeof selection === 'string') return item.id === selection;

    return selection.includes(item.id);
  });
};

const isSelectedItem = (selectedItems: Item[] | undefined, item: Item) => {
  return selectedItems?.some((selectedItem) => selectedItem.id === item.id);
};

const SelectionList = ({
  items,
  className,
  selection,
  onSelect,
  color = 'light',
  multiple = false,
}: SelectionListProps) => {
  const [selectedItems, setSelectedItems] = useState<Item[] | undefined>(
    selection ? loadSelectedItems(items, selection) : undefined
  );

  useEffect(() => {
    setSelectedItems(
      selection ? loadSelectedItems(items, selection) : undefined
    );
  }, [items, selection]);

  let styles = 'flex flex-col rounded shadow-md-center py-2 text-xs';
  if (color === 'light') {
    styles += ' bg-blue-white text-primary';
  } else if (color === 'dark') {
    styles += ' bg-primary text-blue-white';
  }

  const handleClick = (item: Item) => {
    let newSelectedItems = selectedItems ? [...selectedItems] : [];

    if (multiple) {
      if (isSelectedItem(newSelectedItems, item)) {
        newSelectedItems = newSelectedItems.filter(
          (selectedItem) => selectedItem.id !== item.id
        );
      } else {
        newSelectedItems.push(item);
      }
    } else {
      newSelectedItems = [item];
    }

    setSelectedItems(newSelectedItems);

    if (onSelect) onSelect(multiple ? newSelectedItems : item);
  };

  return (
    <div className={`${styles} ${className || ''}`}>
      {items.map((item) => (
        <button
          type="button"
          className={`text-xs py-3 px-4 text-left hover:bg-soft-blue focus:outline-none transition ${
            isSelectedItem(selectedItems, item) ? 'bg-soft-blue' : ''
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

export default SelectionList;
