import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import {
  MODAL_WRAPPER_TEST_ID,
  TESTIMONIAL_MODAL_IMAGE_TEST_ID,
  TESTIMONIAL_MODAL_NAME_TEST_ID,
  TESTIMONIAL_MODAL_POSITION_TEST_ID,
  TESTIMONIAL_MODAL_TEXT_TEST_ID,
} from '@/lib/testIDs';

import TestimonialModal from './TestimonialModal';

jest.mock('@/sanity/lib/serverClient', () => ({
  client: { fetch: jest.fn() },
}));

jest.mock('@/sanity/lib/image', () => ({
  urlForImage: (image: any) =>
    image?.asset?._ref ? `/mocked-url-${image.asset._ref}` : '/mocked-fallback',
}));

beforeAll(() => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
});

describe('TestimonialModal', () => {
  const testimonial = {
    key: 'test-1',
    clientName: 'Jane Doe',
    clientPosition: 'Marketing Director at Company',
    clientPhotoUrl: '/test-image.jpg',
    clientLink: 'https://example.com',
    text: 'This is a testimonial.\nWith multiple lines.',
  };

  const onClose = jest.fn();

  const renderModal = (isOpen = true) =>
    render(
      <TestimonialModal
        isOpen={isOpen}
        onClose={onClose}
        testimonial={testimonial}
      />,
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all testimonial info when open', () => {
    const { asFragment } = renderModal();

    expect(screen.getByTestId(MODAL_WRAPPER_TEST_ID)).toBeInTheDocument();
    expect(
      screen.getByTestId(TESTIMONIAL_MODAL_IMAGE_TEST_ID),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(TESTIMONIAL_MODAL_NAME_TEST_ID),
    ).toHaveTextContent(testimonial.clientName);
    expect(
      screen.getByTestId(TESTIMONIAL_MODAL_POSITION_TEST_ID),
    ).toHaveTextContent(testimonial.clientPosition);
    expect(
      screen.getByTestId(TESTIMONIAL_MODAL_TEXT_TEST_ID),
    ).toHaveTextContent('This is a testimonial.');

    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render anything when closed', () => {
    const { asFragment, queryByTestId } = renderModal(false);

    expect(queryByTestId(MODAL_WRAPPER_TEST_ID)).not.toBeInTheDocument();
    expect(
      queryByTestId(TESTIMONIAL_MODAL_NAME_TEST_ID),
    ).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
