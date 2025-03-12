import { MainSocialCardColor } from '@/styles/constants';

export const getSocialMediaCardColorClass = (
  color: MainSocialCardColor,
  type: 'bg' | 'text',
): string => {
  switch (color) {
    case MainSocialCardColor.RED:
      return type === 'bg' ? 'bg-red-default' : 'text-red-default';
    case MainSocialCardColor.BLUE:
      return type === 'bg' ? 'bg-blue-default' : 'text-blue-default';
    default:
      return '';
  }
};
