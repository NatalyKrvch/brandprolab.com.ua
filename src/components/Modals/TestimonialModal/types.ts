import { NormalizedTestimonial } from '@/modules/TestimonialsSection';

export interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: NormalizedTestimonial | null;
}
