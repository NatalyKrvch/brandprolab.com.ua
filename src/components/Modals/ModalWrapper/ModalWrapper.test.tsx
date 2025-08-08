import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import {
  MODAL_CLOSE_BUTTON_TEST_ID,
  MODAL_CONTENT_TEST_ID,
  MODAL_WRAPPER_TEST_ID,
} from '@/lib/testIDs';

import ModalWrapper from './ModalWrapper';

describe('ModalWrapper', () => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);

  const onClose = jest.fn();
  const childrenText = 'Modal content goes here';

  const renderModal = () =>
    render(
      <ModalWrapper isOpen={true} onClose={onClose}>
        <p>{childrenText}</p>
      </ModalWrapper>,
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders modal with content', () => {
    const { asFragment } = renderModal();

    expect(screen.getByTestId(MODAL_WRAPPER_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(MODAL_CONTENT_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(childrenText)).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClose when clicking on backdrop', () => {
    const { asFragment } = renderModal();

    fireEvent.click(screen.getByTestId(MODAL_WRAPPER_TEST_ID));
    expect(onClose).toHaveBeenCalledTimes(1);

    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClose when clicking on close button', () => {
    const { asFragment } = renderModal();

    fireEvent.click(screen.getByTestId(MODAL_CLOSE_BUTTON_TEST_ID));
    expect(onClose).toHaveBeenCalledTimes(1);

    expect(asFragment()).toMatchSnapshot();
  });

  it('does not call onClose when clicking inside modal content', () => {
    const { asFragment } = renderModal();

    fireEvent.click(screen.getByTestId(MODAL_CONTENT_TEST_ID));
    expect(onClose).not.toHaveBeenCalled();

    expect(asFragment()).toMatchSnapshot();
  });
});
