import { render, screen } from '@testing-library/react';

import {
  EXTERNAL_LINK_TEST_ID,
  SOCIAL_MEDIA_DESCRIPTION_TEST_ID,
  SOCIAL_MEDIA_LABEL_TEST_ID,
} from '@/lib/testIDs';

import SocialMediaCard from './SocialMediaCard';
import { MainSocialCardColor } from './types';

describe('SocialMediaCard', () => {
  const defaultProps = {
    iconURL: '/icons/youtube.svg',
    socialMediaURL: 'https://youtube.com',
    label: 'Viktoriia Zakharova',
    description: 'Відео про саморозвиток і пошук роботи.',
    mainColor: MainSocialCardColor.RED,
  };

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('renders correctly with given props', () => {
    const { container } = render(<SocialMediaCard {...defaultProps} />);

    expect(screen.getByTestId(EXTERNAL_LINK_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(SOCIAL_MEDIA_LABEL_TEST_ID)).toHaveTextContent(
      defaultProps.label,
    );
    expect(
      screen.getByTestId(SOCIAL_MEDIA_DESCRIPTION_TEST_ID),
    ).toHaveTextContent(defaultProps.description);
    expect(container).toMatchSnapshot();
  });

  it('applies correct href to link', () => {
    const { container } = render(<SocialMediaCard {...defaultProps} />);

    const link = screen.getByTestId(EXTERNAL_LINK_TEST_ID);
    expect(link).toHaveAttribute('href', defaultProps.socialMediaURL);
    expect(container).toMatchSnapshot();
  });

  it('renders correct color class based on mainColor prop', () => {
    const { container } = render(<SocialMediaCard {...defaultProps} />);

    const label = screen.getByTestId(SOCIAL_MEDIA_LABEL_TEST_ID);
    expect(label.className).toContain('text-red-default');
    expect(container).toMatchSnapshot();
  });
});
