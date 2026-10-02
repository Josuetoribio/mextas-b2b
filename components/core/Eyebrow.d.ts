export interface EyebrowProps {
  children?: React.ReactNode;
  /** accent = blue (section labels); muted = gray (trust bar) */
  tone?: 'accent' | 'muted';
  /** Show the small square marker */
  mark?: boolean;
  className?: string;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;