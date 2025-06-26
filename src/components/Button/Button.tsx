import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import { BUTTON_TEST_ID } from '@/lib/testIDs';

import { buttonVariantClassMap } from './styleMaps';
import type { ButtonProps } from './types';

const Button = ({
  children,
  onClick,
  variant = 'teal',
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      data-testid={BUTTON_TEST_ID}
      onClick={onClick}
      className={clsx(
        'w-full rounded-full py-3 text-xl font-medium leading-26 tracking-wide outline-none transition-all duration-150 ease-in-out hover:outline-offset-0 tablet:py-5 tablet:text-22 desktop:py-6 desktop:text-2xl desktop:leading-6',
        buttonVariantClassMap[variant],
      )}
    >
      {children}
    </button>
  );
};

export default Button;
