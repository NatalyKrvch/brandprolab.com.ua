import { FlipCard, ServiceCardBack, ServiceCardFront } from '@/components';
import { normalizeImageURL, normalizeText } from '@/utils';

import { getCardVariantByIndex } from './helpers/getCardVariantByIndex';
import { serviceCardClassMap } from './styleMaps';
import type { ServicesSectionProps } from './types';

const ServicesSection = ({ servicesData }: ServicesSectionProps) => {
  const { title, description, cards, backgroundImage } = servicesData;

  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 px-1 text-left tablet:gap-4 tablet:px-2 desktop:gap-6 desktop:px-2">
        <h2 className="font-bold leading-9 -tracking-wide text-teal-dark tablet:text-5xl tablet:leading-48 desktop:text-6xl">
          {normalizeText(title)}
        </h2>

        <p className="max-w-530 text-base font-normal leading-5 tracking-wider text-gray-dark tablet:text-xl desktop:max-w-610 desktop:text-22 desktop:leading-8">
          {normalizeText(description)}
        </p>
      </div>

      <article className="grid grid-cols-1 items-stretch gap-4 mid_tablet:grid-cols-2 desktop:grid-cols-[1fr_1.302fr] desktop:gap-6">
        {cards.map((card, index) => {
          const variant = getCardVariantByIndex(index);
          const cardClass = serviceCardClassMap[variant];

          return (
            <FlipCard
              key={card._key}
              className={cardClass}
              front={
                <ServiceCardFront
                  iconURL={normalizeImageURL(card.icon)}
                  whiteIconURL={normalizeImageURL(card.whiteIcon ?? card.icon)}
                  callToActionText={card.flipText}
                  header={card.title}
                  label={card.label}
                  description={card.shortDescription}
                  backgroundImageUrl={normalizeImageURL(backgroundImage)}
                  variant={variant}
                />
              }
              back={
                <ServiceCardBack
                  header={card.detailedDescription.title}
                  list={card.detailedDescription.points}
                  backgroundImageUrl={normalizeImageURL(backgroundImage)}
                  variant={variant}
                />
              }
            />
          );
        })}
      </article>
    </section>
  );
};

export default ServicesSection;
