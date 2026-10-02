export interface IconProps {
  /** Lucide icon name, kebab or Pascal case: "arrow-right" | "ArrowRight". Requires lucide UMD on window. */
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Accessible label; omit for decorative icons */
  label?: string;
}
export declare function Icon(props: IconProps): JSX.Element;