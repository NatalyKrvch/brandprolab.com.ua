import { ExternalLink } from '@/components';
import { FOOTER_SECTION_TEST_ID } from '@/lib/testIDs';
import { getCurrentYear, normalizeText } from '@/utils';

import type { FooterSectionProps } from './types';

const FooterSection = ({ footerData }: FooterSectionProps) => {
  if (!footerData) {
    return null;
  }

  const { companyName, linkTitle, URL } = footerData;

  const year = getCurrentYear();
  const normalizedLinkTitle = normalizeText(linkTitle);
  const normalizedCompanyName = normalizeText(companyName);
  const normalizedURL = normalizeText(URL);

  return (
    <footer
      data-testid={FOOTER_SECTION_TEST_ID}
      className="mx-6 items-center tablet:mx-60 desktop:mx-auto desktop:max-w-container"
    >
      <div className="mx-auto flex max-w-container items-center justify-between border-t border-gray-medium px-2 py-4 text-xs text-gray-dark tablet:px-4 tablet:py-8 tablet:text-sm desktop:mx-60 desktop:px-4 desktop:py-8 desktop:text-sm">
        <small className="flex flex-col justify-between text-xs leading-3 text-gray-dark tablet:w-1/2 tablet:flex-row tablet:text-sm tablet:leading-14 desktop:w-1/2 desktop:flex-row desktop:text-sm desktop:leading-14">
          <div>{normalizedCompanyName}</div>
          <div>© {year}</div>
        </small>

        <ExternalLink
          aria-label={`Відкрити ${normalizedLinkTitle} у новій вкладці`}
          href={normalizedURL}
          className="whitespace-nowrap underline underline-offset-3 transition hover:text-teal-dark"
        >
          {normalizedLinkTitle}
        </ExternalLink>
      </div>
    </footer>
  );
};

export default FooterSection;
