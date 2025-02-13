import Link from 'next/link';

import { INTERNAL_LINK_TEST_ID } from '@/lib/testIDs';

import { InternalLinkProps } from './types';

const InternalLink = ({ href, className, children }: InternalLinkProps) => {
  return (
    <Link href={href} className={className} data-testid={INTERNAL_LINK_TEST_ID}>
      {children}
    </Link>
  );
};

export default InternalLink;
