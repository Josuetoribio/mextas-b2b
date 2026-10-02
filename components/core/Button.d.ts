/**
 * @startingPoint section="Core" subtitle="Primary / secondary / accent / ghost buttons" viewport="700x260"
 */
export interface ButtonProps {
  /** primary = white solid (main CTA); secondary = white outline; accent = electric blue; ghost = subtle border; link = text */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  /** Adds trailing arrow that nudges right on hover */
  arrow?: boolean;
  /** Leading Lucide icon name */
  icon?: string;
  /** Trailing Lucide icon name (overrides arrow) */
  iconRight?: string;
  fullWidth?: boolean;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: any) => void;
  className?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;