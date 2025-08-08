'use client';

import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

import {
  MODAL_CLOSE_BUTTON_TEST_ID,
  MODAL_CONTENT_TEST_ID,
  MODAL_WRAPPER_TEST_ID,
} from '@/lib/testIDs';
import { ROUNDED_CLASSES } from '@/styles/constants';

import { useModalWrapper } from './hooks/useModalWrapper';
import type { ModalWrapperProps } from './types';

const ModalWrapper = ({
  isOpen,
  onClose,
  children,
  className,
}: ModalWrapperProps) => {
  const { mounted } = useModalWrapper(isOpen, onClose);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      data-testid={MODAL_WRAPPER_TEST_ID}
      className="fixed inset-0 z-50 flex items-center justify-center bg-teal-lightOpacity06 p-4"
      onClick={onClose}
    >
      <div
        className={twMerge(
          'relative flex w-full max-w-lg flex-col items-end bg-white p-6 shadow-lg',
          ROUNDED_CLASSES,
          className,
        )}
        data-testid={MODAL_CONTENT_TEST_ID}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} data-testid={MODAL_CLOSE_BUTTON_TEST_ID}>
          <IoCloseOutline className="transition-color-fast h-7 w-7 text-gray-dark hover:text-teal-dark tablet:h-8 tablet:w-8 desktop:h-10 desktop:w-10" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!,
  );
};

export default ModalWrapper;
