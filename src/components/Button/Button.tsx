import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import { BUTTON_TEST_ID } from '@/lib/testIDs';

import type { ButtonProps } from './types';

const Button = ({
  children,
  onClick,
  color = 'teal',
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      data-testid={BUTTON_TEST_ID}
      onClick={onClick}
      className={clsx(
        'w-full rounded-full py-3 text-xl font-medium leading-26 tracking-wide outline-none transition-all duration-300 hover:outline-offset-0 tablet:py-5 tablet:text-22 desktop:py-6 desktop:text-2xl desktop:leading-6',
        color === 'white'
          ? 'bg-white text-blue-default hover:outline-8 hover:outline-whiteOpacity active:bg-teal-light'
          : 'bg-teal-dark text-white hover:outline-8 hover:outline-teal-darkTranslucent active:bg-black',
      )}
    >
      {children}
    </button>
  );
};

export default Button;
