import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import DiagnosticSection from './DiagnosticSection';
import { DiagnosticSectionProps } from './types';

jest.mock('@/sanity/lib/client', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

jest.mock('@/components', () => ({
  Button: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
  ExternalLink: ({ children }: { children: React.ReactNode }) => (
    <a>{children}</a>
  ),
  List: ({ list }: { list: string[] }) => (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ),
  SimpleCard: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SprayBackground: () => <div>SprayBackground</div>,
}));

describe('DiagnosticSection component', () => {
  const mockProps: DiagnosticSectionProps = {
    diagnosticData: {
      _id: 'test-id',
      _type: 'diagnosticSection',
      title: 'Some title',
      subtitle: 'Some subtitle',
      description: 'Some description',
      benefitsTitle: 'Benefits title',
      benefits: ['Benefit 1', 'Benefit 2'],
      buttonText: 'Click Me',
      buttonLink: '/offer',
    },
  };

  it('renders DiagnosticSection correctly', () => {
    const { asFragment } = render(<DiagnosticSection {...mockProps} />);

    expect(screen.getByText('Some title')).toBeInTheDocument();
    expect(screen.getByText('Some subtitle')).toBeInTheDocument();
    expect(screen.getByText('Some description')).toBeInTheDocument();
    expect(screen.getByText('Benefits title')).toBeInTheDocument();
    expect(screen.getByText('Benefit 1')).toBeInTheDocument();
    expect(screen.getByText('Benefit 2')).toBeInTheDocument();
    expect(screen.getAllByText('Click Me')).toHaveLength(2);

    expect(asFragment()).toMatchSnapshot();
  });
});
