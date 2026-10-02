export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** modal = centered (bottom sheet on mobile); drawer = right side panel */
  variant?: 'modal' | 'drawer';
  /** aria-label when no string title */
  label?: string;
  className?: string;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;