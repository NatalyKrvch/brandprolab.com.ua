import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { ExternalLink } from '@/components';
import { normalizeImageURL } from '@/utils';

import type { SocialIconsProps } from './types';

const SocialIcons = ({
  socialLinks,
  className,
  isColored,
}: SocialIconsProps) => {
  return (
    <ul
      aria-label="Соціальні мережі"
      className={twMerge('flex items-center gap-4', className)}
    >
      {socialLinks.map(link => {
        const src = isColored
          ? normalizeImageURL(link.colorIcon)
          : normalizeImageURL(link.whiteIcon);

        return (
          <li key={link._key}>
            <ExternalLink href={link.url}>
              <Image
                src={src}
                alt={`Посилання на ${link.label}`}
                width={32}
                height={32}
                priority
              />
            </ExternalLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
