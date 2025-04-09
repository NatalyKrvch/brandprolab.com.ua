import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { LABEL_COMPONENT_TEST_ID } from '@/lib/testIDs';

import { LabelProps } from './types';

const Label = ({ children, className }: PropsWithChildren<LabelProps>) => {
  return (
    <div
      data-testid={LABEL_COMPONENT_TEST_ID}
      className={twMerge(
        'flex max-w-max items-center justify-center rounded-full bg-teal-lightOpacity text-blue-dark',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Label;
