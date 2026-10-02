export interface BadgeProps {
  children?: React.ReactNode;
  /** demo = amber "DEMOSTRACIÓN" tag for mock data */
  tone?: 'neutral' | 'accent' | 'success' | 'demo';
  dot?: boolean;
  className?: string;
}
export declare function Badge(props: BadgeProps): JSX.Element;