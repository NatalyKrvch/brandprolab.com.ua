import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import {
  FULL_WIDTH_CONTAINER_TEST_ID,
  LEFT_LIMITED_CONTAINER_TEST_ID,
  LIMITED_WIDTH_CONTAINER_TEST_ID,
} from '@/lib/testIDs';

import { ContainerProps } from './types';

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

  const baseClasses = {
    full: 'w-full',
    centered: 'mx-auto max-w-container px-4 tablet:px-12 desktop:px-12',
    leftLimited:
      'mx-auto max-w-container pl-4 tablet:pl-12 desktop:pl-12 overflow-x-visible',
  }[variant];

  const containerClasses = clsx(baseClasses, className);

  return (
    <div className={containerClasses} data-testid={testId}>
      {children}
    </div>
  );
};

export default Container;
