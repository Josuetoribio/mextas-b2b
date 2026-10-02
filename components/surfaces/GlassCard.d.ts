/**
 * @startingPoint section="Surfaces" subtitle="Navy card, glass and glow variants" viewport="700x300"
 */
export interface GlassCardProps {
  as?: string;
  /** Blurred translucent surface — only over photography */
  glass?: boolean;
  /** Faint blue edge glow for featured items */
  glow?: boolean;
  /** Hover lift + accent border */
  interactive?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
  children?: React.ReactNode;
}
export declare function GlassCard(props: GlassCardProps): JSX.Element;