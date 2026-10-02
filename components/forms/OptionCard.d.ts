export interface OptionCardProps {
  type?: 'radio' | 'checkbox';
  name?: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string, e: any) => void;
  label: React.ReactNode;
  description?: React.ReactNode;
  icon?: string;
  className?: string;
}
export declare function OptionCard(props: OptionCardProps): JSX.Element;