import Image from 'next/image';

import { Button } from '@/components/Button';
import { ExternalLink } from '@/components/Links';
import { HERO_MAIN_CARD_ICON_TEST_ID } from '@/lib/testIDs';

import { SimpleCard } from '../SimpleCard';
import type { HeroMainCardProps } from './types';

const HeroMainCard = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  iconURL,
  hasBackground = false,
}: HeroMainCardProps) => {
  const backgroundImageUrl = hasBackground
    ? '/images/backgrounds/hero/maincard-bg.svg'
    : undefined;

  return (
    <SimpleCard
      className="pt-130 text-white"
      backgroundImageUrl={backgroundImageUrl}
    >
      <Image
        data-testid={HERO_MAIN_CARD_ICON_TEST_ID}
        className="mb-6 ml-11"
        width={84}
        height={84}
        src={iconURL}
        aria-hidden="true"
        alt=""
      />

      <h1 className="px-54 text-54 font-bold leading-54 tracking-tight text-white">
        <span className="mb-4 block">{title}</span>

        <span className="block text-right text-40 font-normal leading-40 tracking-normal">
          {subtitle}
        </span>
      </h1>

      <div className="flex flex-col gap-10 px-11 pb-160 pt-11">
        <strong className="max-w-408 px-2 text-xl font-normal">
          {description}
        </strong>

        <ExternalLink
          href={buttonLink}
          aria-label={`Перейти, щоб ${buttonText}`}
        >
          <Button variant="white">{buttonText}</Button>
        </ExternalLink>
      </div>
    </SimpleCard>
  );
};

export default HeroMainCard;
