export interface Item {
  id: string;
  label: string;
  value: unknown;
}

export interface SelectProps {
  items: Item[];
  selection?: string;
  onSelect?: (item: Item) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  as?: 'rounded' | 'one-liner';
  color?: 'light' | 'dark';
}
