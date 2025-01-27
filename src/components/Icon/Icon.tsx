'use client';

import Image from 'next/image';
import { IconProps } from './types';
import { useIconStyles, useMediaQuery } from '@/hooks';

const Icon = ({
  size,
  iconURL,
  iconAlt = 'icon',
  isIconCentered = false,
  isSemiTransparent = false,
  circleColor = 'bg-teal-medium',
}: IconProps) => {
  const { circleStyles, iconStyles } = useIconStyles(size, isIconCentered);

  const isDesktop = useMediaQuery('(min-width: 1224px)');
  const isTablet = useMediaQuery('(min-width: 600px)');
  const transparency = isSemiTransparent ? 'opacity-10' : '';

  const currentIconStyles = isDesktop
    ? iconStyles.desktop
    : isTablet
      ? iconStyles.tablet
      : iconStyles.mobile;

  const currentCircleStyles = isDesktop
    ? circleStyles.desktop
    : isTablet
      ? circleStyles.tablet
      : circleStyles.mobile;

  return (
    <div className="flex">
      <div
        className={`rounded-full ${circleColor} ${transparency} relative flex items-center justify-center`}
        style={{
          ...currentCircleStyles,
        }}
      >
        <Image
          src={iconURL}
          alt={iconAlt}
          width={0}
          height={0}
          className="absolute"
          style={{
            ...currentIconStyles,
          }}
          priority
        />
      </div>
    </div>
  );
};

export default Icon;
