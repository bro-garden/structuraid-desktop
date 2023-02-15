export interface Item {
  id: string;
  label: string;
  value: unknown;
}

export interface DropdownProps {
  items: Item[];
  color?: 'light' | 'dark';
  className?: string;
  selectedItem?: Item;
  onSelect?: (item: Item) => void;
}
