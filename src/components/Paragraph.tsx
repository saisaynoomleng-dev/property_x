import { ParagraphProps } from '@/lib/types';
import clsx from 'clsx';

const Paragraph = ({ as: Comp = 'p', className, children }: ParagraphProps) => {
  return <Comp className={(clsx('text-pretty'), className)}>{children}</Comp>;
};

export default Paragraph;
