import { ExternalLink } from '@/components';
import { FOOTER_SECTION_TEST_ID } from '@/lib/testIDs';
import { getCurrentYear } from '@/utils';

import { FooterSectionProps } from './types';

const FooterSection = ({ footerData }: FooterSectionProps) => {
  const { offerLink } = footerData;
  const year = getCurrentYear();

  return (
    <footer
      data-testid={FOOTER_SECTION_TEST_ID}
      className="border-t border-gray-medium px-2 py-4 tablet:px-4 tablet:py-8 desktop:px-4 desktop:py-8"
    >
      <div className="flex items-center justify-between text-xs text-gray-dark tablet:text-sm desktop:text-sm">
        <div className="flex flex-col justify-between tablet:w-1/2 tablet:flex-row desktop:w-1/2 desktop:flex-row">
          <div>ФОП Захарова Вікторія</div>
          <div>(c) {year}</div>
        </div>

        <ExternalLink
          href={offerLink.trim()}
          className="whitespace-nowrap underline transition hover:text-teal-dark"
        >
          Договір оферти
        </ExternalLink>
      </div>
    </footer>
  );
};

export default FooterSection;
