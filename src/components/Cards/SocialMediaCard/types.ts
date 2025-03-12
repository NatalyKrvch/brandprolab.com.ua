import { MainSocialCardColor } from '@/styles/constants';

export interface SocialMediaCardProps {
  iconURL: string;
  socialMediaURL: string;
  label: string;
  description: string;
  mainColor: MainSocialCardColor;
}
