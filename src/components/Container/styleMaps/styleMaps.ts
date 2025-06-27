import { ContainerVariant } from '../types';

export const containerClassMap: Record<ContainerVariant, string> = {
  [ContainerVariant.FULL]: 'w-full',
  [ContainerVariant.CENTERED]:
    'mx-auto max-w-container px-4 tablet:px-12 desktop:px-12',
  [ContainerVariant.LEFT_LIMITED]:
    'mx-auto max-w-container pl-4 tablet:pl-12 desktop:pl-12 overflow-x-visible',
};
