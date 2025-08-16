import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { MAIN_SPRAY_BG_TEST_ID } from '@/lib/testIDs';

import type { MainSprayBgProps } from './types';

const MainSprayBg = ({ className = '' }: MainSprayBgProps) => (
  <Image
    src="/images/backgrounds/spray.svg"
    alt=""
    width={100}
    height={200}
    data-testid={MAIN_SPRAY_BG_TEST_ID}
    aria-hidden="true"
    className={twMerge(
      'pointer-events-none absolute inset-0 z-[-1] select-none overflow-hidden object-cover blur-2xl',
      className,
    )}
  />
);

export default MainSprayBg;
