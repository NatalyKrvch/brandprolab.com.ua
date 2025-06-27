import type { PropsWithChildren } from 'react';

import { EXTERNAL_LINK_TEST_ID } from '@/lib/testIDs';

import type { ExternalLinkProps } from './types';

const ExternalLink = ({
  href,
  className,
  children,
}: PropsWithChildren<ExternalLinkProps>) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-testid={EXTERNAL_LINK_TEST_ID}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
