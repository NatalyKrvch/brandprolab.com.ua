import { TestimonialsSectionType } from '@/sanity/lib/types';

export interface TestimonialsSectionProps {
  testimonialsData: TestimonialsSectionType;
}

export type NormalizedTestimonial = {
  key: string;
  text: string;
  clientName: string;
  clientPhotoUrl: string;
  clientLink: string;
  clientPosition: string;
};
