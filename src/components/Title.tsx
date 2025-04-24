import { TitleProps } from '@/lib/types';
import clsx from 'clsx';

const Title = ({ as: Comp = 'h1', className, size, children }: TitleProps) => {
  return <Comp className={clsx('text-balance')}>{children}</Comp>;
};

export default Title;
