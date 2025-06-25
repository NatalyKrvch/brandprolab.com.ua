import {
  MainSocialCardColor,
  socialMediaColorClassMapType,
} from '@/components/Cards/SocialMediaCard/types';

export const socialMediaColorClassMap: socialMediaColorClassMapType = {
  [MainSocialCardColor.RED]: {
    bg: 'bg-red-default',
    text: 'text-red-default',
  },
  [MainSocialCardColor.BLUE]: {
    bg: 'bg-blue-default',
    text: 'text-blue-default',
  },
};
