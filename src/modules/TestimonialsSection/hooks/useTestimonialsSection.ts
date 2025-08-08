import { useCallback, useMemo, useState } from 'react';

import { normalizeImageURL, normalizeText } from '@/utils';

import type { NormalizedTestimonial, TestimonialsSectionProps } from '../types';

export function useTestimonialsSection(
  testimonialsData: TestimonialsSectionProps['testimonialsData'],
) {
  const { title, testimonials } = testimonialsData;

  const [selectedTestimonial, setSelectedTestimonial] =
    useState<NormalizedTestimonial | null>(null);

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

  const handleReadMoreClick = useCallback(
    (testimonial: NormalizedTestimonial) => {
      setSelectedTestimonial(testimonial);
    },
    [],
  );

  const normalizedTestimonials: NormalizedTestimonial[] = useMemo(
    () =>
      testimonials.map(person => ({
        key: person._key,
        text: normalizeText(person.review),
        clientName: normalizeText(person.personName),
        clientPhotoUrl: normalizeImageURL(person.smallPhoto),
        clientLink: person.link.trim(),
        clientPosition: normalizeText(person.personTitle),
      })),
    [testimonials],
  );

  return {
    title,
    normalizedTestimonials,
    selectedTestimonial,
    handleCloseModal,
    handleReadMoreClick,
  };
}
