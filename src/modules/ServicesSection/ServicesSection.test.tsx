import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { FLIP_CARD_TEST_ID } from '@/lib/testIDs';

import ServicesSection from './ServicesSection';

jest.mock('@/sanity/lib/client', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

describe('ServicesSection component', () => {
  it('renders the component correctly', () => {
    const { asFragment } = render(
      <ServicesSection
        servicesData={{
          _id: 'mock-id',
          _type: 'services',
          title: 'Our Services',
          description: 'We offer various services to our clients',
          backgroundImage: {
            _type: 'image',
            asset: {
              _ref: 'image-ref',
              _type: 'reference',
            },
          },
          cards: [
            {
              _key: 'card-1',
              _type: 'card',
              icon: {
                _type: 'image',
                asset: {
                  _ref: 'icon-ref',
                  _type: 'reference',
                },
              },
              whiteIcon: {
                _type: 'image',
                asset: {
                  _ref: 'white-icon-ref',
                  _type: 'reference',
                },
              },
              title: 'Service 1',
              label: 'Label 1',
              shortDescription: 'Short description of service 1',
              flipText: 'Learn more',
              detailedDescription: {
                title: 'Details of service 1',
                points: ['Point 1', 'Point 2'],
              },
            },
          ],
        }}
      />,
    );

    const card = screen.getByTestId(FLIP_CARD_TEST_ID);
    expect(card).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
