export interface Item {
  id: string;
  label: string;
  value: unknown;
}

export interface DropdownProps {
  items: Item[];
  color?: 'light' | 'dark';
  className?: string;
  selected?: string;
  onSelect?: (item: Item) => void;
}
