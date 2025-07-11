import { HeroTextContent } from '../../HeroTextContent';
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
      className="pt-120 text-white"
      backgroundImageUrl={backgroundImageUrl}
    >
      <HeroTextContent
        iconUrl={iconURL}
        title={title}
        subtitle={subtitle}
        description={description}
        buttonText={buttonText}
        buttonLink={buttonLink}
        iconClassName="mb-6 ml-11"
        titleClassName="px-52 flex flex-col gap-4 text-[52px] font-bold leading-56 tracking-tight text-white"
        subtitleClassName="block text-right text-40 font-normal leading-40 tracking-normal"
        descriptionClassName="max-w-408 px-2 text-xl font-normal"
        contentWrapperClassName="flex flex-col gap-10 px-11 pb-160 pt-11"
      />
    </SimpleCard>
  );
};

export default HeroMainCard;
