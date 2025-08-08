'use client';

import {
  DiplomaCard,
  FlipCard,
  PhotoCard,
  ServiceCardBack,
  ServiceCardFront,
} from '@/components';
import { ServiceCardFrontVariant } from '@/components/Cards/ServicesCards';
import { useCarouselComponent } from '@/hooks';
import { EXPERTISE_SECTION_TEST_ID } from '@/lib/testIDs';
import { normalizeImageURL, splitLeadingWords } from '@/utils';

import { serviceCardClassMap } from '../ServicesSection/styleMaps';
import type { ExpertiseSectionProps } from './types';

const ExpertiseSection = ({ expertiseData }: ExpertiseSectionProps) => {
  const CarouselComponent = useCarouselComponent();

  if (!expertiseData) return null;

  const { diplomaCards, expertiseCards, title, photo } = expertiseData;
  const { leadingWords, restWords } = splitLeadingWords(title, 3);

  const photoUrl = normalizeImageURL(photo);
  const variant = ServiceCardFrontVariant.BASE;
  const cardClass = serviceCardClassMap[variant];

  return (
    <div
      className="flex flex-col gap-12 desktop:items-center"
      data-testid={EXPERTISE_SECTION_TEST_ID}
    >
      <h2 className="ml-6 text-32 font-bold leading-34 tracking-tight text-black tablet:ml-10 desktop:hidden">
        <span className="text-teal-dark">{leadingWords}</span>
        <span>{' ' + restWords}</span>
      </h2>

      <div className="flex gap-6">
        <PhotoCard
          backgroundUrl="/images/backgrounds/expert-bg.svg"
          photoAlt={title}
          cardHeight={744}
          imageHeight={600}
          imageWidth={362}
          imageContainerClassName="-translate-x-[155px]"
          photoUrl={photoUrl}
          text={title}
          className="hidden desktop:block desktop:w-[408px]"
        />

        <article className="mx-auto grid grid-cols-1 gap-6 tablet:grid-cols-2 mid_tablet:grid-cols-2 desktop:grid-cols-2 [@media(min-width:600px)_and_(max-width:900px)]:grid-cols-1">
          {expertiseCards.map(card => (
            <div key={card._key} className="w-full justify-self-center">
              <FlipCard
                className={cardClass}
                front={
                  <ServiceCardFront
                    iconURL={normalizeImageURL(card.icon)}
                    callToActionText={card.expandText}
                    header={card.title}
                    description={card.shortDescription}
                    variant={variant}
                  />
                }
                back={
                  <ServiceCardBack
                    header={card.detailedDescription.title}
                    list={card.detailedDescription.points}
                    variant={variant}
                  />
                }
              />
            </div>
          ))}
        </article>
      </div>

      <CarouselComponent>
        {diplomaCards.map(card => (
          <div key={card._key} className="mx-4">
            <DiplomaCard
              colorDiplomaURL={normalizeImageURL(card.colorImage)}
              bwDiplomaURL={normalizeImageURL(card.bwImage)}
            />
          </div>
        ))}
      </CarouselComponent>
    </div>
  );
};

export default ExpertiseSection;
