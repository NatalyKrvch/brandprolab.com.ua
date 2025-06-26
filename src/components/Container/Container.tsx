import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import {
  FULL_WIDTH_CONTAINER_TEST_ID,
  LEFT_LIMITED_CONTAINER_TEST_ID,
  LIMITED_WIDTH_CONTAINER_TEST_ID,
} from '@/lib/testIDs';

import { containerClassMap } from './styleMaps';
import type { ContainerProps } from './types';

const Container = ({
  children,
  className,
  variant = 'centered',
}: PropsWithChildren<ContainerProps>) => {
  const testId = {
    full: FULL_WIDTH_CONTAINER_TEST_ID,
    centered: LIMITED_WIDTH_CONTAINER_TEST_ID,
    leftLimited: LEFT_LIMITED_CONTAINER_TEST_ID,
  }[variant];

  const baseClasses = containerClassMap[variant];

  const containerClasses = clsx(baseClasses, className);

  return (
    <div className={containerClasses} data-testid={testId}>
      {children}
    </div>
  );
};

export default Container;
