import Image from 'next/image';

import { Button } from '@/components/Button';
import { ExternalLink } from '@/components/Links';

import { SimpleCard } from '../SimpleCard';
import { HeroMainCardProps } from './types';

const HeroMainCard = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  iconURL,
}: HeroMainCardProps) => {
  return (
    <SimpleCard
      className="pt-130 text-white"
      backgroundImageUrl="./images/backgrounds/hero-maincard-bg.svg"
    >
      <Image
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
