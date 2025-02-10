import { render, screen } from '@testing-library/react';
import Label from './Label';
import '@testing-library/jest-dom';
import { LABEL_COMPONENT_TEST_ID } from '@/lib/testIDs';

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

  it('applies correct Tailwind styles', () => {
    const { asFragment } = render(<Label {...defaultProps} />);
    const labelElement = screen.getByTestId(LABEL_COMPONENT_TEST_ID);

    expect(labelElement).toHaveClass(
      'font-mariupol',
      'flex',
      'max-w-max',
      'items-center',
      'justify-center',
      'rounded-full',
      'bg-teal-lightOpacity',
      'px-5',
      'py-2',
      'text-base',
      'font-normal',
      'leading-none',
      'text-blue-dark',
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
