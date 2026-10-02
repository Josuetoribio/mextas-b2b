export interface SectionHeadingProps {
  eyebrow?: string;
  /** White first line */
  title: React.ReactNode;
  /** Second line in electric blue */
  accent?: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  size?: 'lg' | 'xl';
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
  className?: string;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;