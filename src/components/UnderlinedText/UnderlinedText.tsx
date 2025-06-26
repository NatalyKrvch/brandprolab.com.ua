import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { UNDERLINED_TEXT_TEST_ID } from '@/lib/testIDs';

import type { UnderlinedTextProps } from './types';

const UnderlinedText = ({
  children,
  className,
}: PropsWithChildren<UnderlinedTextProps>) => {
  return (
    <span
      className={twMerge(
        'relative inline-block cursor-pointer text-base font-normal leading-5 text-teal-dark underline underline-offset-4',
        className,
      )}
      data-testid={UNDERLINED_TEXT_TEST_ID}
    >
      {children}
    </span>
  );
};

export default UnderlinedText;
