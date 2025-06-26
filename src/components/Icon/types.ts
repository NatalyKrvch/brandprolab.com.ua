export enum IconClassType {
  SERVICES = 'services',
  EXPERTISE = 'expertise',
  SOCIAL_MEDIA = 'social-media',
  SOCIAL_MEDIA_MAIN = 'social-media-main',
}

export interface IconProps {
  iconURL: string;
  type: IconClassType;
  className?: string;
  iconAlt?: string;
  circleColor?: string;
}

export type IconClassSet = {
  circleClass: string;
  iconClass: string;
};
