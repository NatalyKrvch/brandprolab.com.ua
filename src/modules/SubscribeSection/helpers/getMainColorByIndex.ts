import { MainSocialCardColor } from '@/components/Cards/SocialMediaCard/types';

const getMainColorByIndex = (index: number): MainSocialCardColor => {
  return index % 2 === 0 ? MainSocialCardColor.RED : MainSocialCardColor.BLUE;
};

export default getMainColorByIndex;
