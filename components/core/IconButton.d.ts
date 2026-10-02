export interface IconButtonProps {
  icon: string;
  /** Required accessible label */
  label: string;
  variant?: 'glass' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: any) => void;
  className?: string;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;