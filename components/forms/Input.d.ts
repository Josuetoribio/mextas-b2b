export interface InputProps {
  label?: string;
  id?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  /** Render a textarea */
  multiline?: boolean;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  onChange?: (e: any) => void;
  className?: string;
}
export declare function Input(props: InputProps): JSX.Element;