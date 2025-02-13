import type { PropsWithChildren } from 'react';

import { LABEL_COMPONENT_TEST_ID } from '@/lib/testIDs';

const Label = ({ children }: PropsWithChildren) => {
  return (
    <div
      data-testid={LABEL_COMPONENT_TEST_ID}
      className="flex max-w-max items-center justify-center rounded-full bg-teal-lightOpacity px-5 py-2 font-mariupol text-base font-normal leading-none text-blue-dark"
    >
      {children}
    </div>
  );
};

export default Label;
