import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  ICON_COMPONENT_IMAGE_TEST_ID,
  ICON_COMPONENT_TEST_ID,
} from '@/lib/testIDs';

import Icon from './Icon';
import { IconClassType } from './types';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    className,
    'data-testid': dataTestId,
  }: {
    src: string;
    alt: string;
    className?: string;
    'data-testid'?: string;
  }) => (
    <img src={src} alt={alt} className={className} data-testid={dataTestId} />
  ),
}));

jest.mock('@/hooks/useMediaQuery', () => ({
  useMediaQuery: (query: string): boolean => {
    if (query.includes('min-width: 1224px')) return true;
    if (query.includes('min-width: 600px')) return false;
    return false;
  },
}));

describe('Icon component', () => {
  const defaultProps = {
    iconURL: '/test-icon.svg',
    iconAlt: 'Test Icon',
    circleColor: 'bg-teal-darkOpacity',
    type: IconClassType.SERVICES,
  };

  it('renders the Icon component with image inside and correct props', () => {
    const { asFragment } = render(<Icon {...defaultProps} />);

    const wrapper = screen.getByTestId(ICON_COMPONENT_TEST_ID);
    const image = screen.getByTestId(ICON_COMPONENT_IMAGE_TEST_ID);

    expect(wrapper).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-icon.svg');
    expect(image).toHaveAttribute('alt', 'Test Icon');
    expect(asFragment()).toMatchSnapshot();
  });
});
