import clsx from 'clsx';
import Image from 'next/image';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { useIconStyles, useMediaQuery } from '@/hooks';
import {
  ICON_COMPONENT_IMAGE_TEST_ID,
  ICON_COMPONENT_TEST_ID,
} from '@/lib/testIDs';
import { DESKTOP_MEDIA_QUERY, TABLET_MEDIA_QUERY } from '@/styles/constants';

import { IconProps } from './types';

const Icon = ({
  size,
  iconURL,
  iconAlt = 'Icon',
  isIconCentered = false,
  circleColor = 'bg-teal-darkOpacity',
}: IconProps) => {
  const { circleStyles, iconStyles } = useIconStyles(size, isIconCentered);
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);

  const deviceStyles = useMemo(() => {
    if (isDesktop)
      return { circle: circleStyles.desktop, icon: iconStyles.desktop };
    if (isTablet)
      return { circle: circleStyles.tablet, icon: iconStyles.tablet };
    return { circle: circleStyles.mobile, icon: iconStyles.mobile };
  }, [isDesktop, isTablet, circleStyles, iconStyles]);

  return (
    <div className="flex" data-testid={ICON_COMPONENT_TEST_ID}>
      <div
        className={twMerge(
          clsx(
            'relative flex items-center justify-center rounded-full',
            circleColor,
          ),
        )}
        style={deviceStyles.circle}
      >
        <Image
          src={iconURL}
          alt={iconAlt}
          width={0}
          height={0}
          className="absolute"
          style={deviceStyles.icon}
          data-testid={ICON_COMPONENT_IMAGE_TEST_ID}
        />
      </div>
    </div>
  );
};

export default Icon;
