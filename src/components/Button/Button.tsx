import classNames from 'classnames';

import { BUTTON_TEST_ID } from '@/lib/testIDs';

import { ButtonProps } from './types';

const Button = ({ children, color = 'teal', ...props }: ButtonProps) => {
  return (
    <button
      data-testid={BUTTON_TEST_ID}
      className={classNames(
        'w-full rounded-full py-3 text-xl font-medium leading-26 tracking-wide outline-none transition-all duration-300 hover:outline-offset-0',
        'tablet:py-5 tablet:text-22',
        'desktop:py-6 desktop:text-2xl',
        {
          'bg-white text-blue-default hover:outline-8 hover:outline-whiteOpacity active:bg-teal-light':
            color === 'white',

          'bg-teal-dark text-white hover:outline-8 hover:outline-teal-darkTranslucent active:bg-black':
            color === 'teal',
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
