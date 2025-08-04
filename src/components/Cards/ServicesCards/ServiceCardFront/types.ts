import { IconClassType } from '@/components/Icon';

export enum ServiceCardFrontVariant {
  DEFAULT = 'default',
  GRADIENT = 'gradient',
  BASE = 'base',
}

export interface ServiceCardFrontProps {
  iconURL: string;
  header: string;
  description: string;
  callToActionText: string;
  whiteIconURL?: string;
  label?: string;
  backgroundImageUrl?: string;
  variant?: ServiceCardFrontVariant;
}

export type ServiceCardComponentsListType = {
  wrapper: string;
  background: string;
  header: string;
  description: string;
  label: string;
  underlined: string;
  icon: string;
  whiteIcon: string;
  headerLayout: string;
  iconContainer: string;
  iconType: IconClassType;
  button: string;
};
