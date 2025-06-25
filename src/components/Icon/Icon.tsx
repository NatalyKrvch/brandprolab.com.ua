import clsx from 'clsx';
import Image from 'next/image';

import {
  ICON_COMPONENT_IMAGE_TEST_ID,
  ICON_COMPONENT_TEST_ID,
} from '@/lib/testIDs';

import { getIconClasses } from './helpers/getIconClasses';
import { IconProps } from './types';

const Icon = ({
  iconURL,
  type,
  className = '',
  iconAlt = '',
  circleColor = 'bg-teal-darkOpacity',
}: IconProps) => {
  const { circleClass, iconClass } = getIconClasses(type);

  return (
    <div
      className={clsx('flex items-center justify-center', className)}
      data-testid={ICON_COMPONENT_TEST_ID}
    >
      <div className={`${circleColor} ${circleClass}`}>
        <Image
          src={iconURL}
          alt={iconAlt}
          width={68}
          height={68}
          className={iconClass}
          loading="lazy"
          data-testid={ICON_COMPONENT_IMAGE_TEST_ID}
        />
      </div>
    </div>
  );
};

export default Icon;
