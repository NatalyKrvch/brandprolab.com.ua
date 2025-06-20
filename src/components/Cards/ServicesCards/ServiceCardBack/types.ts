import { ServiceCardFrontVariant } from '../ServiceCardFront/types';

export interface ServiceCardBackProps {
  header: string;
  list: string[];
  variant?: ServiceCardFrontVariant;
  backgroundImageUrl?: string;
}
