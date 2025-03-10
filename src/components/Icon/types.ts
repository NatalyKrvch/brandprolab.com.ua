import { IconClassType } from '@/styles/constants';

export interface IconProps {
  iconURL: string;
  iconAlt?: string;
  circleColor?: string;
  type: IconClassType;
}

export interface IconClassSet {
  circleClass: string;
  iconClass: string;
  offsets: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}
