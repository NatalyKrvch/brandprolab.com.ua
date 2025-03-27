import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { FOOTER_SECTION_TEST_ID } from '@/lib/testIDs';

import FooterSection from './FooterSection';

const mockData = {
  offerURL: 'https://example.com/offer',
};

jest.mock('@/utils/fetchDataFromSanity', () => ({
  fetchDataFromSanity: jest.fn(() => Promise.resolve(mockData)),
}));

describe('FooterSection component', () => {
  it('renders the component correctly', () => {
    const { asFragment } = render(
      <FooterSection offerURL="https://example.com/offer" />,
    );
    const footer = screen.getByTestId(FOOTER_SECTION_TEST_ID);

    expect(footer).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
