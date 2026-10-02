export interface SelectProps {
  label?: string;
  id?: string;
  options: Array<string | { value: string; label: string }>;
  placeholder?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  value?: string;
  name?: string;
  onChange?: (e: any) => void;
  className?: string;
}
export declare function Select(props: SelectProps): JSX.Element;