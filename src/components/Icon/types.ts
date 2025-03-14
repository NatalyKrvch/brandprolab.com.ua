import { IconClassType } from '@/lib/constants';

export interface IconProps {
  iconURL: string;
  iconAlt?: string;
  circleColor?: string;
  type: IconClassType;
}

export type IconClassSet = {
  circleClass: string;
  iconClass: string;
};
