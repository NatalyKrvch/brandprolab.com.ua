import type { PropsWithChildren } from 'react';

import { BUTTON_TEST_ID } from '@/lib/testIDs';

import { getButtonClasses } from './helpers/getButtonClasses';
import type { ButtonProps } from './types';

const Button = ({
  children,
  onClick,
  color = 'teal',
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      data-testid={BUTTON_TEST_ID}
      className={getButtonClasses(color)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
