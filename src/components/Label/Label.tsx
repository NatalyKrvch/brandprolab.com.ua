import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { LABEL_COMPONENT_TEST_ID } from '@/lib/testIDs';

import { LabelProps } from './types';

const Label = ({ children, className }: PropsWithChildren<LabelProps>) => {
  return (
    <label
      data-testid={LABEL_COMPONENT_TEST_ID}
      className={twMerge(
        'flex max-w-max items-center justify-center rounded-40 bg-teal-lightOpacity px-4 py-2 text-blue-dark',
        className,
      )}
    >
      {children}
    </label>
  );
};

export default Label;
