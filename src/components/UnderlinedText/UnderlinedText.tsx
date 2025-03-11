import type { PropsWithChildren } from 'react';

import { UNDERLINED_TEXT_TEST_ID } from '@/lib/testIDs';

import { getUnderlinedTextClass } from './helpers/getUnderlinedTextClass';

const UnderlinedText = ({ children }: PropsWithChildren) => {
  return (
    <span
      className={getUnderlinedTextClass()}
      data-testid={UNDERLINED_TEXT_TEST_ID}
    >
      {children}
    </span>
  );
};

export default UnderlinedText;
