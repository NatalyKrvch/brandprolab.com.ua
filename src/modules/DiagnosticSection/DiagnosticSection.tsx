import {
  Button,
  ExternalLink,
  List,
  SimpleCard,
  SprayBackground,
} from '@/components';
import { normalizeText } from '@/utils';

import type { DiagnosticSectionProps } from './types';

const DiagnosticSection = ({ diagnosticData }: DiagnosticSectionProps) => {
  const {
    title,
    subtitle,
    description,
    benefitsTitle,
    benefits,
    buttonText,
    buttonLink,
  } = diagnosticData;

  return (
    <div className="relative w-full desktop:px-72">
      <div className="grid desktop:grid-cols-2 desktop:gap-24">
        <div className="flex flex-col items-center text-center desktop:w-464 desktop:items-start desktop:px-2 desktop:text-left">
          <h2 className="mb-2 text-4xl font-bold leading-9 tracking-tight text-black tablet:mb-3 tablet:text-44 tablet:leading-44 desktop:mb-5 desktop:text-52 desktop:leading-54">
            {normalizeText(title)}
          </h2>

          <p className="mb-8 w-190 text-xl font-normal leading-5 tracking-normal text-blue-default tablet:mb-9 tablet:w-400 tablet:px-16 tablet:text-left tablet:text-28 tablet:leading-7 desktop:mb-10 desktop:w-442 desktop:px-16 desktop:text-32 desktop:leading-8">
            {normalizeText(subtitle)}
          </p>

          <p className="mb-8 w-full max-w-400 text-base font-normal leading-5 tracking-normal text-gray-dark tablet:mb-5 tablet:max-w-482 tablet:text-lg tablet:leading-6 desktop:mb-12 desktop:max-w-full desktop:leading-6">
            {normalizeText(description)}
          </p>

          <ExternalLink
            aria-label="Перейти до запису на консультацію"
            className="hidden desktop:block desktop:w-400"
            href={buttonLink.trim()}
          >
            <Button>{normalizeText(buttonText)}</Button>
          </ExternalLink>
        </div>

        <div className="relative flex items-center justify-center">
          <SimpleCard
            backgroundColor="bg-teal-light"
            className="w-full max-w-400 p-6 tablet:max-w-482 desktop:max-w-408"
          >
            <SprayBackground className="-left-20 -top-250 h-700 w-full -rotate-30 tablet:-left-30 tablet:-top-336 tablet:h-900 tablet:w-full desktop:-top-270 desktop:h-800 desktop:w-800" />

            <p className="mb-6 font-normal text-black tablet:text-2xl tablet:leading-6 desktop:text-2xl desktop:leading-6">
              {normalizeText(benefitsTitle)}
            </p>

            <List list={benefits} />
          </SimpleCard>
        </div>

        <div className="mt-4 flex justify-center desktop:hidden">
          <ExternalLink
            aria-label="Перейти до запису на консультацію"
            className="w-full max-w-400 tablet:max-w-482 desktop:max-w-314"
            href={buttonLink.trim()}
          >
            <Button>{normalizeText(buttonText)}</Button>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticSection;
