import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { FOOTER_SECTION_TEST_ID } from '@/lib/testIDs';

import FooterSection from './FooterSection';

jest.mock('@/sanity/lib/client', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

describe('FooterSection component', () => {
  it('renders the component correctly', () => {
    const { asFragment } = render(
      <FooterSection
        footerData={{
          title: 'Footer title',
          offerLink: 'https://example.com/offer',
        }}
      />,
    );

    const footer = screen.getByTestId(FOOTER_SECTION_TEST_ID);

    expect(footer).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
