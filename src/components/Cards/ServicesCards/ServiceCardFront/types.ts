export type ServiceCardFrontVariant = 'default' | 'gradient';

export interface ServiceCardFrontProps {
  iconURL: string;
  header: string;
  label: string;
  description: string;
  callToActionText: string;
  whiteIconURL: string;
  backgroundImageUrl?: string;
  variant?: ServiceCardFrontVariant;
}
