'use client';

import { ModalWrapper } from '@/components/Modals/ModalWrapper';
import { CASE_MODAL_TEXT_TEST_ID } from '@/lib/testIDs';

import type { CaseModalProps } from './types';

const CaseModal = ({ isOpen, onClose, caseText }: CaseModalProps) => {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <p
        data-testid={CASE_MODAL_TEXT_TEST_ID}
        className="text-base text-gray-dark tablet:text-lg desktop:text-xl"
      >
        {caseText}
      </p>
    </ModalWrapper>
  );
};

export default CaseModal;
