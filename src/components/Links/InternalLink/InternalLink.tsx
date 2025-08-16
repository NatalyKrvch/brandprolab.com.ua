import Link from 'next/link';
import type { PropsWithChildren } from 'react';

import { INTERNAL_LINK_TEST_ID } from '@/lib/testIDs';

import type { InternalLinkProps } from './types';

const InternalLink = ({
  href,
  className,
  children,
  prefetch = true,
}: PropsWithChildren<InternalLinkProps>) => {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={className}
      data-testid={INTERNAL_LINK_TEST_ID}
    >
      {children}
    </Link>
  );
};

export default InternalLink;
