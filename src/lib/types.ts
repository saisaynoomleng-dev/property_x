// title props
export type TitleProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'lg' | 'md' | 'sm';
  as?: 'h1' | 'h2' | 'h3';
};

// subtitle props
export type SubtitleProps = {
  children?: React.ReactNode;
  className?: string;
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'lg' | 'md' | 'sm';
};

// Bounded Props
export type BoundedProps = {
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

// Paragraph Props
export type ParagraphProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};
