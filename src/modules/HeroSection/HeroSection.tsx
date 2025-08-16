import Image from 'next/image';

import {
  Container,
  HeroMainCard,
  HeroTextContent,
  PhotoCard,
} from '@/components';
import {
  HERO_CARD_HEIGHT,
  HERO_CARD_PHOTO_HEIGHT,
  HERO_CARD_PHOTO_WIDTH,
} from '@/styles/constants';
import { normalizeImageURL } from '@/utils';

import type { HeroSectionProps } from './types';

const HeroSection = ({ heroData }: HeroSectionProps) => {
  if (!heroData) return null;

  const { buttonLink, buttonText, description, icon, title, subtitle, photo } =
    heroData;

  const photoUrl = normalizeImageURL(photo);
  const iconUrl = normalizeImageURL(icon);

  const photoAlt = "Захарова Вікторія - кар'єрна консультантка";

  return (
    <>
      <div className="relative aspect-[10/17] max-h-833 min-h-477 w-full overflow-hidden bg-[url('/images/backgrounds/hero/mobile-spray-bg.svg')] bg-cover bg-no-repeat tablet:aspect-auto tablet:h-800 tablet:bg-[url('/images/backgrounds/hero/tablet-spray-bg.svg')] desktop:hidden">
        <div className="absolute inset-0 -translate-y-8 translate-x-[8%] min_mobile:translate-x-[15%] tablet:-translate-x-0 tablet:translate-y-0 mid_tablet:-translate-x-16">
          <Image
            src={photoUrl}
            alt={photoAlt}
            fill
            priority
            className="object-contain object-right"
          />
        </div>

        <Image
          src="/images/backgrounds/hero/mobile-spray-fg.svg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="pointer-events-none z-10 object-cover object-left tablet:hidden tablet:opacity-95 desktop:hidden"
          style={{
            transform: 'scale(clamp(1, 120vw / 1000, 1.2))',
            transformOrigin: 'top left',
          }}
        />

        <Image
          src="/images/backgrounds/hero/tablet-spray-fg.svg"
          alt=""
          fill
          aria-hidden
          priority
          className="pointer-events-none absolute inset-0 z-10 hidden object-left tablet:block tablet:object-cover mid_tablet:object-contain desktop:hidden"
        />

        <HeroTextContent
          iconUrl={iconUrl}
          title={title}
          subtitle={subtitle}
          description={description}
          buttonText={buttonText}
          buttonLink={buttonLink}
          iconClassName="tablet:h-84 tablet:w-84 h-12 w-12"
          wrapperClassName="absolute bottom-0 left-0 z-20 flex flex-col items-start gap-6 p-4 text-white min_mobile:gap-3 tablet:gap-8 tablet:px-12"
          titleClassName="flex flex-col gap-4 px-1 min_mobile:gap-3 tablet:gap-4"
          titleSpanClassName="tablet:leading-56 block max-w-370 text-4xl font-bold leading-9 tracking-tight min_mobile:text-3xl min_mobile:leading-[30px] tablet:max-w-480 tablet:pl-3 tablet:text-54"
          subtitleClassName="block max-w-360 text-right text-28 font-normal leading-7 tracking-normal min_mobile:text-2xl min_mobile:leading-6 tablet:min-w-480 tablet:text-4xl tablet:leading-none"
          descriptionClassName="px-2 text-lg font-normal leading-6 min_mobile:text-base min_mobile:leading-18 tablet:text-2xl tablet:leading-7"
          contentWrapperClassName="flex flex-col gap-4 px-4 pb-4 pt-6 min_mobile:pb-2 min_mobile:pt-4 tablet:gap-8 tablet:px-6 tablet:pb-6 tablet:pt-7 mid_tablet:max-w-532"
        />
      </div>

      <Container className="hidden tablet:hidden desktop:flex desktop:gap-6">
        <HeroMainCard
          title={title}
          subtitle={subtitle}
          description={description}
          buttonText={buttonText}
          buttonLink={buttonLink}
          hasBackground
          iconURL={iconUrl}
        />

        <PhotoCard
          photoUrl={photoUrl}
          photoAlt={photoAlt}
          backgroundUrl="./images/backgrounds/hero/photocard-bg.svg"
          hasPriority
          cardHeight={HERO_CARD_HEIGHT}
          imageWidth={HERO_CARD_PHOTO_WIDTH}
          imageHeight={HERO_CARD_PHOTO_HEIGHT}
        />
      </Container>
    </>
  );
};

export default HeroSection;
