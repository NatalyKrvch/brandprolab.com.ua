import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { LABEL_COMPONENT_TEST_ID } from '@/lib/testIDs';

import { getLabelBaseClass } from './helpers/getLabelBaseClass';

interface LabelProps {
  className?: string;
}

const Label = ({ children, className }: PropsWithChildren<LabelProps>) => {
  return (
    <div
      data-testid={LABEL_COMPONENT_TEST_ID}
      className={twMerge(getLabelBaseClass(), className)}
    >
      {children}
    </div>
  );
};

export default Label;
