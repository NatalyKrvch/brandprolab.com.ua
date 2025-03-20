import { PropsWithChildren } from 'react';

import {
  FULL_WIDTH_CONTAINER_TEST_ID,
  LIMITED_WIDTH_CONTAINER_TEST_ID,
} from '@/lib/testIDs';

import { getContainerClass } from './helpers/getContainerClass';
import { ContainerProps } from './types';

const Container = ({
  children,
  className,
  fullWidth = false,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      className={`${getContainerClass(fullWidth)} ${className ?? ''}`}
      data-testid={
        fullWidth
          ? FULL_WIDTH_CONTAINER_TEST_ID
          : LIMITED_WIDTH_CONTAINER_TEST_ID
      }
    >
      {children}
    </div>
  );
};

export default Container;
