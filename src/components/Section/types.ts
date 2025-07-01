import type { HTMLAttributes } from 'react';

import { ContainerVariant } from '../Container';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  containerVariant?: ContainerVariant;
}
