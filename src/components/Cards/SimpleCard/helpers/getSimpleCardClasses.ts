import { twMerge } from 'tailwind-merge';

import { ROUNDED_CLASSES } from '@/styles/constants';

import type { SimpleCardProps } from '../types';

export const getSimpleCardClasses = ({
  backgroundColor = 'bg-white',
  borderColor,
  className,
}: Pick<SimpleCardProps, 'backgroundColor' | 'borderColor' | 'className'>) => {
  return twMerge(
    backgroundColor,
    className,
    borderColor && `border ${borderColor}`,
    ROUNDED_CLASSES,
    'w-full',
    'bg-cover bg-center',
  );
};
