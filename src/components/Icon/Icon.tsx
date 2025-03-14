import Image from 'next/image';

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
  const { circleClass, iconClass } = getIconClasses(type);

  return (
    <div
      className="flex items-center justify-center"
      data-testid={ICON_COMPONENT_TEST_ID}
    >
      <div className={`${circleColor} ${circleClass}`}>
        <Image
          src={iconURL}
          alt={iconAlt}
          width={0}
          height={0}
          className={iconClass}
          data-testid={ICON_COMPONENT_IMAGE_TEST_ID}
        />
      </div>
    </div>
  );
};

export default Icon;
