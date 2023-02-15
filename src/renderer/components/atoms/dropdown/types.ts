export interface Item<T> {
  label: string;
  value: T;
}

export interface DropdownProps<T> {
  color: 'light' | 'dark';
  items: Item<T>[];
}
