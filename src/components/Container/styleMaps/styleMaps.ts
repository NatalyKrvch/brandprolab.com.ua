import type { ContainerVariant } from '../types';

export const containerClassMap: Record<ContainerVariant, string> = {
  full: 'w-full',
  centered: 'mx-auto max-w-container px-4 tablet:px-12 desktop:px-12',
  leftLimited:
    'mx-auto max-w-container pl-4 tablet:pl-12 desktop:pl-12 overflow-x-visible',
};
