import { IconClassType } from '@/lib/constants';

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
