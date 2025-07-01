import type { PropsWithChildren } from 'react';

import { Container } from '@/components';
import { ContainerVariant } from '@/components/Container';

import type { SectionProps } from './types';

const Section = ({
  children,
  className,
  containerClassName,
  containerVariant = ContainerVariant.CENTERED,
  ...props
}: PropsWithChildren<SectionProps>) => {
  return (
    <section className={className} {...props}>
      <Container variant={containerVariant} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
