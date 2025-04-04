import {
  Button,
  ExternalLink,
  List,
  SimpleCard,
  SprayBackground,
} from '@/components';

import { DiagnosticSectionProps } from './types';

const DiagnosticSection = ({ diagnostic }: DiagnosticSectionProps) => {
  const {
    title,
    subtitle,
    description,
    benefitsTitle,
    benefits,
    buttonText,
    buttonLink,
  } = diagnostic;

  return (
    <section className="relative w-full desktop:px-72">
      <div className="grid desktop:grid-cols-2 desktop:gap-24">
        <div className="flex flex-col items-center text-center desktop:w-[464px] desktop:items-start desktop:px-2 desktop:text-left">
          <h2 className="mb-2 text-4xl font-bold leading-9 tracking-tight text-black tablet:mb-3 tablet:text-44 tablet:leading-44 desktop:mb-5 desktop:text-52 desktop:leading-54">
            {title}
          </h2>
          <p className="mb-8 w-[190px] text-xl font-normal leading-5 tracking-normal text-blue-default tablet:mb-9 tablet:w-[400px] tablet:px-16 tablet:text-left tablet:text-28 tablet:leading-7 desktop:mb-10 desktop:w-[442px] desktop:px-16 desktop:text-32 desktop:leading-8">
            {subtitle}
          </p>
          <p className="mb-8 w-full max-w-400 text-base font-normal leading-5 tracking-normal text-gray-dark tablet:mb-5 tablet:max-w-482 tablet:text-lg tablet:leading-6 desktop:mb-12 desktop:max-w-full desktop:leading-6">
            {description}
          </p>

          <ExternalLink
            className="hidden desktop:block desktop:w-[400px]"
            href={buttonLink}
          >
            <Button>{buttonText}</Button>
          </ExternalLink>
        </div>

        <div className="relative flex items-center justify-center">
          <SimpleCard
            backgroundColor="bg-teal-light"
            className="w-full max-w-[400px] p-6 tablet:max-w-[482px] desktop:max-w-[408px]"
          >
            <SprayBackground className="left-[-20px] top-[-250px] h-[700px] w-full tablet:left-[-30px] tablet:top-[-280px] tablet:h-[800px] tablet:w-full desktop:top-[-200px] desktop:h-[800px] desktop:w-[800px]" />
            <p className="mb-6 font-normal text-black tablet:text-2xl tablet:leading-6 desktop:text-2xl desktop:leading-6">
              {benefitsTitle}
            </p>
            <List list={benefits} />
          </SimpleCard>
        </div>

        <div className="mt-4 flex justify-center desktop:hidden">
          <ExternalLink
            className="w-full max-w-[400px] tablet:max-w-482 desktop:max-w-[314px]"
            href={buttonLink}
          >
            <Button>{buttonText}</Button>
          </ExternalLink>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
