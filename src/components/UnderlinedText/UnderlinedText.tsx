import type { PropsWithChildren } from 'react';

import { UNDERLINED_TEXT_TEST_ID } from '@/lib/testIDs';

const UnderlinedText = ({ children }: PropsWithChildren) => {
  return (
    <span
      className="relative inline-block cursor-pointer text-base font-bold leading-none text-teal-dark underline"
      data-testid={UNDERLINED_TEXT_TEST_ID}
    >
      {children}
    </span>
  );
};

export default UnderlinedText;
