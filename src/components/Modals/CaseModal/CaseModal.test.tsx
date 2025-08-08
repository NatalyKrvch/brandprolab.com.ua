import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { CASE_MODAL_TEXT_TEST_ID, MODAL_WRAPPER_TEST_ID } from '@/lib/testIDs';

import CaseModal from './CaseModal';

beforeAll(() => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
});

describe('CaseModal', () => {
  const caseText = 'Case text goes here';
  const onClose = jest.fn();

  const renderModal = (isOpen = true) =>
    render(<CaseModal isOpen={isOpen} onClose={onClose} caseText={caseText} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders modal when open', () => {
    const { asFragment } = renderModal();

    expect(screen.getByTestId(MODAL_WRAPPER_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(CASE_MODAL_TEXT_TEST_ID)).toHaveTextContent(
      caseText,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render modal when closed', () => {
    const { asFragment, queryByTestId } = renderModal(false);

    expect(queryByTestId(MODAL_WRAPPER_TEST_ID)).not.toBeInTheDocument();
    expect(queryByTestId(CASE_MODAL_TEXT_TEST_ID)).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
