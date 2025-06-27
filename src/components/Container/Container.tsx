import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import {
  FULL_WIDTH_CONTAINER_TEST_ID,
  LEFT_LIMITED_CONTAINER_TEST_ID,
  LIMITED_WIDTH_CONTAINER_TEST_ID,
} from '@/lib/testIDs';

import { containerClassMap } from './styleMaps';
import { ContainerProps, ContainerVariant } from './types';

const Container = ({
  children,
  className,
  variant = ContainerVariant.CENTERED,
}: PropsWithChildren<ContainerProps>) => {
  const testId = {
    [ContainerVariant.FULL]: FULL_WIDTH_CONTAINER_TEST_ID,
    [ContainerVariant.CENTERED]: LIMITED_WIDTH_CONTAINER_TEST_ID,
    [ContainerVariant.LEFT_LIMITED]: LEFT_LIMITED_CONTAINER_TEST_ID,
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
