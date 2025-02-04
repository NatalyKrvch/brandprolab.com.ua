import classNames from 'classnames';
import { ButtonProps } from './types';
import { BUTTON_TEST_ID } from '@/lib/constants';

const Button = ({ children, color = 'teal', ...props }: ButtonProps) => {
  return (
    <button
      data-testid={BUTTON_TEST_ID}
      className={classNames(
        'w-full rounded-full py-3 text-20 font-medium outline-none transition-all duration-300 hover:outline-offset-0 mobile:tracking-0.4',
        'tablet:py-5 tablet:text-22 tablet:tracking-0.44',
        'desktop:py-6 desktop:text-24 desktop:tracking-0.48',
        {
          'bg-white text-blue-default hover:outline hover:outline-8 hover:outline-whiteOpacity active:bg-teal-light':
            color === 'white',

          'bg-teal-dark text-white hover:outline hover:outline-8 hover:outline-teal-darkTranslucent active:bg-black':
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
