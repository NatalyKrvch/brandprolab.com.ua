import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import {
  HERO_TEXT_CONTENT_ICON_TEST_ID,
  HERO_TEXT_CONTENT_TEST_ID,
} from '@/lib/testIDs';

import { Button, ButtonColor } from '../Button';
import { ExternalLink } from '../Links';
import { HeroTextContentProps } from './types';

const HeroTextContent = ({
  iconUrl,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  iconClassName,
  titleClassName,
  titleSpanClassName,
  subtitleClassName,
  descriptionClassName,
  wrapperClassName,
  contentWrapperClassName,
}: HeroTextContentProps) => {
  return (
    <div
      className={twMerge(wrapperClassName)}
      data-testid={HERO_TEXT_CONTENT_TEST_ID}
    >
      <Image
        src={iconUrl}
        alt=""
        width={84}
        height={84}
        className={twMerge(iconClassName)}
        aria-hidden="true"
        priority
        data-testid={HERO_TEXT_CONTENT_ICON_TEST_ID}
      />

      <h1 className={twMerge(titleClassName)}>
        <span className={twMerge(titleSpanClassName)}>{title}</span>
        <span className={twMerge(subtitleClassName)}>{subtitle}</span>
      </h1>

      <div className={twMerge(contentWrapperClassName)}>
        <strong className={twMerge(descriptionClassName)}>{description}</strong>

        <ExternalLink
          href={buttonLink}
          aria-label={`Перейти, щоб ${buttonText}`}
        >
          <Button variant={ButtonColor.WHITE}>{buttonText}</Button>
        </ExternalLink>
      </div>
    </div>
  );
};

export default HeroTextContent;
