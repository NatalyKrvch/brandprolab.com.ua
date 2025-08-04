import { ServiceCardFrontVariant } from '../ServiceCardFront/types';

export type ServiceCardBackComponentsListType = {
  wrapper: string;
  header: string;
  list: string;
};

export interface ServiceCardBackProps {
  header: string;
  list: string[];
  variant?: ServiceCardFrontVariant;
  backgroundImageUrl?: string;
}
