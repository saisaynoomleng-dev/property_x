import { SubtitleProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Subtitle = ({ as: Comp = 'h2', children, className }: SubtitleProps) => {
  return <Comp className={clsx('')}>Subtitle</Comp>;
};

export default Subtitle;
