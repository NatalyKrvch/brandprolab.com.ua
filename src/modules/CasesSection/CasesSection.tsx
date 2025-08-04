'use client';

import { Container, TestimonialCard } from '@/components';
import { normalizeText } from '@/utils';

import { useCasesSection } from './hooks/useCasesSection';
import type { CasesSectionProps } from './types';

const CasesSection = ({ casesData }: CasesSectionProps) => {
  const { subtitle, description, cases } = casesData;

  const { leadingWords, rest, wordsToDisplay, CarouselComponent } =
    useCasesSection(description);

  return (
    <>
      <Container className="desktop:px-2">
        <p className="mb-4 text-lg font-normal leading-5 tracking-wider text-gray-dark tablet:text-xl tablet:leading-none desktop:text-22 desktop:leading-none">
          {normalizeText(subtitle)}
        </p>

        <p className="mb-16 text-center text-32 font-bold leading-34 tracking-tight text-black tablet:text-4xl tablet:leading-none desktop:text-52 desktop:leading-54">
          <span className="text-teal-dark">{leadingWords}</span>
          {rest && ` ${rest}`}
        </p>
      </Container>

      <CarouselComponent>
        {cases.map(caseItem => {
          return (
            <div key={caseItem._key} className="mx-4">
              <TestimonialCard
                text={normalizeText(caseItem.caseText)}
                amountOfWordsToDisplay={wordsToDisplay}
                className="h-216 w-300 tablet:h-160 tablet:w-314 desktop:h-216 desktop:w-336"
              />
            </div>
          );
        })}
      </CarouselComponent>
    </>
  );
};

export default CasesSection;
