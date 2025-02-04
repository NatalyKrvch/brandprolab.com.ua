import { UnderlinedTextProps } from './types';
import { UNDERLINED_TEXT_TEST_ID } from '@/lib/constants';

const UnderlinedText = ({ children }: UnderlinedTextProps) => {
  return (
    <span
      className="relative inline-block cursor-pointer text-16 font-bold leading-none text-teal-dark underline"
      data-testid={UNDERLINED_TEXT_TEST_ID}
    >
      {children}
    </span>
  );
};

export default UnderlinedText;
