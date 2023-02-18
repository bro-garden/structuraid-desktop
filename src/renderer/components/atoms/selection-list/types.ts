export interface Item {
  id: string;
  label: string;
  value: unknown;
}

export interface SelectionListProps {
  items: Item[];
  color?: 'light' | 'dark';
  className?: string;
  selection?: string | string[];
  onSelect?: (items: Item | Item[]) => void;
  multiple?: boolean;
}
