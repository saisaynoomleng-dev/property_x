import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  className,
  children,
}: BoundedProps) => {
  return (
    <Comp className={clsx('space-y-10 pt-20 px-5 pb-5 relative', className)}>
      {children}
    </Comp>
  );
};

export default Bounded;
