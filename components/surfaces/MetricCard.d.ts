export interface MetricCardProps {
  label: string;
  value: string;
  caption?: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function MetricCard(props: MetricCardProps): JSX.Element;