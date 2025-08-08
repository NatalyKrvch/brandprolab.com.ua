import { useState } from 'react';

import { useCarouselComponent } from '@/hooks';
import { splitLeadingWords } from '@/utils';

export function useCasesSection(description: string) {
  const { leadingWords, restWords } = splitLeadingWords(description, 1);
  const CarouselComponent = useCarouselComponent();

  const [selectedCaseText, setSelectedCaseText] = useState<string>('');

  const handleOpenModal = (text: string) => setSelectedCaseText(text);
  const handleCloseModal = () => setSelectedCaseText('');

  const isModalOpen = selectedCaseText !== '';

  return {
    leadingWords,
    restWords,
    CarouselComponent,
    selectedCaseText,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
}
