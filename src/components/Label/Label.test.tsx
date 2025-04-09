import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { LABEL_COMPONENT_TEST_ID } from '@/lib/testIDs';

import Label from './Label';

describe('Label component', () => {
  const defaultProps = {
    children: 'Test Label',
  };

  it('renders the Label component', () => {
    const { asFragment } = render(<Label {...defaultProps} />);
    const labelElement = screen.getByTestId(LABEL_COMPONENT_TEST_ID);

    expect(labelElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    const { asFragment } = render(<Label {...defaultProps} />);
    const labelElement = screen.getByTestId(LABEL_COMPONENT_TEST_ID);

    expect(labelElement).toHaveTextContent('Test Label');
    expect(asFragment()).toMatchSnapshot();
  });
});
