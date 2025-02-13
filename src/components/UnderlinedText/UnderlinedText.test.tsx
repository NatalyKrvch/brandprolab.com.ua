import { render, screen } from '@testing-library/react';

import UnderlinedText from './UnderlinedText';

import '@testing-library/jest-dom';
import { UNDERLINED_TEXT_TEST_ID } from '@/lib/testIDs';

describe('UnderlinedText component', () => {
  const defaultProps = {
    children: 'Underlined Text',
  };

  it('renders the UnderlinedText component correctly', () => {
    const { asFragment } = render(<UnderlinedText {...defaultProps} />);
    const textElement = screen.getByTestId(UNDERLINED_TEXT_TEST_ID);

    expect(textElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    const { asFragment } = render(<UnderlinedText {...defaultProps} />);
    const textElement = screen.getByTestId(UNDERLINED_TEXT_TEST_ID);

    expect(textElement).toHaveTextContent('Underlined Text');
    expect(asFragment()).toMatchSnapshot();
  });
});
