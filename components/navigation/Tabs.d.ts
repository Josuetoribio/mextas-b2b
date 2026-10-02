export interface TabsProps {
  tabs: Array<{ id: string; label: string }>;
  value: string;
  onChange?: (id: string) => void;
  /** pill = segmented control; underline = bar indicator */
  variant?: 'pill' | 'underline';
  label?: string;
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;