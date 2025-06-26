import { twMerge } from 'tailwind-merge';

import { SPRAY_BG_TEST_ID } from '@/lib/testIDs';

import type { SprayBackgroundProps } from './types';

const SprayBackground = ({ className = '' }: SprayBackgroundProps) => (
  <img
    src="/images/backgrounds/spray.svg"
    alt=""
    data-testid={SPRAY_BG_TEST_ID}
    aria-hidden="true"
    className={twMerge(
      'pointer-events-none absolute inset-0 z-[-1] select-none overflow-hidden object-cover blur-2xl',
      className,
    )}
  />
);

export default SprayBackground;
