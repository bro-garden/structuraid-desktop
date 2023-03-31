import type { ReactNode } from 'react';

export type NotificationType = 'error' | 'warning' | 'success' | 'info';

export interface NotificationProps {
  message: string;
  type: NotificationType;
  children?: ReactNode;
  open?: boolean;
  onVisibilityChange?: (open: boolean) => void;
}
