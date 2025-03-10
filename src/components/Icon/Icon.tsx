import Image from 'next/image';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  ICON_COMPONENT_IMAGE_TEST_ID,
  ICON_COMPONENT_TEST_ID,
} from '@/lib/testIDs';

import { getIconClasses } from './helpers/getIconClasses';
import { IconProps } from './types';

const Icon = ({
  iconURL,
  iconAlt = 'Icon',
  circleColor = 'bg-teal-darkOpacity',
  type,
}: IconProps) => {
  const isTablet = useMediaQuery('(min-width: 600px) and (max-width: 1223px)');
  const isDesktop = useMediaQuery('(min-width: 1224px)');

  const { circleClass, iconClass, offsets } = getIconClasses(type);

  const offset = isDesktop
    ? offsets.desktop
    : isTablet
      ? offsets.tablet
      : offsets.mobile;

  return (
    <div
      className="flex items-center justify-center"
      data-testid={ICON_COMPONENT_TEST_ID}
    >
      <div
        className={`relative flex items-center justify-center rounded-full ${circleColor} ${circleClass}`}
      >
        <Image
          src={iconURL}
          alt={iconAlt}
          width={0}
          height={0}
          className={`absolute ${iconClass}`}
          style={{
            transform: `translateX(-${offset}px)`,
          }}
          data-testid={ICON_COMPONENT_IMAGE_TEST_ID}
        />
      </div>
    </div>
  );
};

export default Icon;
