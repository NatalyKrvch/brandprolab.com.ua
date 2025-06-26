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

export type ServiceCardComponentsListType = {
  background: string;
  header: string;
  description: string;
  label: string;
  underlined: string;
  icon: string;
  whiteIcon: string;
};
