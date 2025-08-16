import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import type { BurgerMenuSprayBgProps } from './types';

const BurgerMenuSprayBg = ({ className = '' }: BurgerMenuSprayBgProps) => (
  <div
    className={twMerge('pointer-events-none relative', className)}
    aria-hidden="true"
  >
    <div className="absolute -left-270 -top-150 rotate-[10deg] scale-x-[1.5] tablet:-top-136">
      <div className="relative h-400 w-400">
        <Image
          src="/images/backgrounds/burgerMenu/teal-spray.svg"
          alt=""
          fill
          sizes="400px"
          className="object-contain"
        />
      </div>
    </div>

    <div className="absolute -left-108 -top-16 tablet:-top-14">
      <div className="relative h-250 w-250">
        <Image
          src="/images/backgrounds/burgerMenu/yellow-spray.svg"
          alt=""
          fill
          sizes="250px"
          className="object-contain"
        />
      </div>
    </div>

    <div className="absolute -rotate-[30deg] scale-x-[2.5] scale-y-[2] tablet:top-14">
      <div className="relative h-200 w-200">
        <Image
          src="/images/backgrounds/burgerMenu/blue-spray.svg"
          alt=""
          fill
          sizes="290px"
          className="object-contain"
        />
      </div>
    </div>
  </div>
);

export default BurgerMenuSprayBg;
